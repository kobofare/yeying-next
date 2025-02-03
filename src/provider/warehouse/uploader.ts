import {BlockProvider} from './block'
import {AssetCipher} from './cipher'
import {convertDateToDateTime, convertToUtcDateTime, formatDateTime, getCurrentUtcString} from '../../common/date'
import {readBlock} from '../../common/file'
import {Digest, SecurityAlgorithm} from '@yeying-community/yeying-web3'
import {decodeHex, encodeHex} from '../../common/codec'
import {convertChunkMetadataFromBlock, getDigitalFormatByName} from '../../common/message'
import {AssetMetadata, AssetMetadataSchema} from '../../yeying/api/asset/asset_pb'
import {create} from "@bufbuild/protobuf";
import {BlockMetadata} from "../../yeying/api/asset/block_pb";
import {isExisted} from "../../common/status";
import {ProviderOption} from "../common/model";
import {AssetProvider} from "./asset";

/**
 * 该类用于上传资产文件，通过将文件分块后上传，每个块加密（可选）并生成哈希值，最后对整个资产进行签名。
 *
 * 发送资产的SOP是：
 * 1、分块
 * 2、读第一块
 * 3、哈希
 * 4、加密（可选）
 * 5、检查是否块是否全部发送
 * 6、否，读下一块
 * 7、循环直到全部发送
 * 8、签名
 *
 * @example
 * ```ts
 * const uploader = new Uploader(blockProvider, assetCipher);
 * uploader.upload(file, "uid1234").then(asset => {
 *   console.log('Asset uploaded successfully:', asset);
 * }).catch(err => {
 *   console.error('Upload failed:', err);
 * });
 * ```
 */
export class Uploader {
    blockProvider: BlockProvider
    assetProvider: AssetProvider
    assetCipher: AssetCipher
    chunkSize: number

    /**
     * 创建一个上传器实例，用于文件的分块上传。
     *
     * @param option {ProviderOption} 处理区块存储的提供者。
     * @param securityAlgorithm {SecurityAlgorithm} 用于加密资产的加密器。
     * @example
     * ```ts
     * const uploader = new Uploader(blockProvider, assetCipher);
     * ```
     */
    constructor(option: ProviderOption, securityAlgorithm: SecurityAlgorithm) {
        this.blockProvider = new BlockProvider(option)
        this.assetProvider = new AssetProvider(option)
        this.assetCipher = new AssetCipher(option.blockAddress, securityAlgorithm)
        this.chunkSize = 1024 * 1024 // 默认每块大小为1MB
    }

    /**
     * 上传文件并返回文件的资产元数据。
     *
     * @param file - 要上传的文件。
     * @param uid - 文件的唯一标识符。
     * @param version - 文件的版本号，默认值为 0。
     * @param encrypted - 是否对文件进行加密，默认值为 `true`。
     * @param parent - 文件的父哈希，默认为空字符串。
     * @param description - 文件的描述，默认为空字符串。
     * @param extend - 额外的扩展信息，默认为空字符串。
     * @returns 返回一个 Promise，解析为文件上传后生成的资产元数据。
     *
     * @example
     * ```ts
     * uploader.upload(file, "uid1234", 1, true, "", "File description").then(asset => {
     *   console.log('Asset uploaded:', asset);
     * }).catch(err => {
     *   console.error('Upload failed:', err);
     * });
     * ```
     */
    upload(
        file: File,
        uid: string,
        version: number = 0,
        encrypted: boolean = true,
        parent: string = '',
        description: string = '',
        extend: string = ''
    ) {
        return new Promise<AssetMetadata>(async (resolve, reject) => {
            try {
                const asset = create(AssetMetadataSchema, {
                    owner: this.blockProvider.getOwner(), // 设置资产拥有者
                    parentHash: parent,  // 设置父哈希
                    version: version, // 设置版本号
                    uid: uid, // 设置文件唯一标识符
                    name: file.name, // 设置文件名称
                    format: getDigitalFormatByName(file.name), // 获取文件格式
                    createdAt: formatDateTime(convertToUtcDateTime(convertDateToDateTime(new Date(file.lastModified)))),
                    updatedAt: getCurrentUtcString(),
                    description: description,
                    extend: extend,
                    chunkCount: Math.ceil(file.size / this.chunkSize),
                    chunkSize: this.chunkSize,
                    isEncrypted: encrypted,
                })

                console.log(`File last modified time=${file.lastModified}`)

                const assetDigest = new Digest()
                const mergeDigest = new Digest()
                const chunkList = new Array(asset.chunkCount)  // 用于存储每个块的元数据

                // 按顺序上传文件的每一块
                for (let i = 0; i < asset.chunkCount; i++) {
                    const start = i * this.chunkSize
                    const end = Math.min(file.size, start + this.chunkSize)
                    console.log(`Try to read the index=${i} chunk, size=${end - start}`)
                    let data = await readBlock(file, start, end)  // 读取文件块
                    assetDigest.update(data)  // 更新资产的哈希

                    if (encrypted) {
                        // 对数据进行加密（可选）
                        data = await this.assetCipher.encrypt(data)
                    }

                    const block = await this.blockProvider.createBlockMetadata(data)
                    mergeDigest.update(decodeHex(block.hash))  // 更新合并哈希

                    const confirmBody = await this.blockProvider.confirm(block)
                    if (confirmBody.block) {
                        // 已经存在，无需上传这个block
                        console.log(`skip the block=${i}, hash=${block.hash}`)
                        chunkList[i] = convertChunkMetadataFromBlock(i, confirmBody.block as BlockMetadata)
                        continue
                    }

                    // 上传块数据到区块存储
                    const body = await this.blockProvider.put(block, data)
                    if (!isExisted(body?.status)) {
                        return reject(new Error(`Fail to put block=${block}`))
                    }

                    chunkList[i] = convertChunkMetadataFromBlock(i, body.block as BlockMetadata)
                }

                asset.chunks = chunkList  // 设置块的元数据
                asset.contentHash = encodeHex(assetDigest.sum())  // 设置资产哈希
                asset.mergedHash = encodeHex(mergeDigest.sum())  // 设置合并哈希
                await this.assetProvider.signAssetMetadata(asset)
                const body = await this.assetProvider.sign(asset)
                resolve(body.asset as AssetMetadata)  // 上传成功，返回资产元数据
            } catch (err) {
                console.error(`Fail to upload the file=${file.name}`, err)
                return reject(err)  // 上传失败，返回错误
            }
        })
    }
}

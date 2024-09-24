import {convertApiCodeTo, convertServiceCodeTo} from '../../common/common.js'

export class Service {
  constructor(owner, network, did, address, name, code, apis, proxy, grpc, avatar, extend, created, checkpoint) {
    this.owner = owner
    this.network = network
    this.did = did
    this.address = address
    this.name = name
    this.code = code
    this.apis = apis
    this.proxy = proxy
    this.grpc = grpc
    this.avatar = avatar
    this.extend = extend
    this.created = created
    this.checkpoint = checkpoint
  }
}

export function convertServiceTo(metadata) {
  return new Service(
    metadata.getOwner(),
    metadata.getNetwork(),
    metadata.getDid(),
    metadata.getAddress(),
    convertServiceCodeTo(metadata.getCode()),
    metadata.getName(),
    JSON.stringify(metadata.getApisList().map(i => convertApiCodeTo(i))),
    metadata.getProxy(),
    metadata.getGrpc(),
    metadata.getExtend(),
    metadata.getAvatar(),
    metadata.getCreated(),
    metadata.getCheckpoint()
  )
}
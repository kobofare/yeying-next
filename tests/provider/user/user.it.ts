import {UserProvider} from '../../../src/provider/user/user'
import {Authenticate} from "../../../src/provider/common/authenticate";
import {getBlockAddress, getProvider} from "../common/common";
import {ServiceCodeEnum} from "../../../src/yeying/api/common/code_pb";
import {ProviderOption} from "../../../src/provider/common/model";

const blockAddress = getBlockAddress()
const provider: ProviderOption = getProvider(ServiceCodeEnum.SERVICE_CODE_NODE)


describe('User', () => {
    it('del', async () => {
        const userProvider = new UserProvider(new Authenticate(blockAddress), provider)
        await userProvider.del()
        console.log(`Success to del user=${blockAddress.identifier}`)
    })

    it('add', async () => {
        const userProvider = new UserProvider(new Authenticate(blockAddress), provider)
        await userProvider.add('test1', '13584001111', 'yeying.community@gmail.com', "avatar1")
        console.log(`Success to add new user=${blockAddress.identifier}`)
    })

    it('get', async () => {
        const userProvider = new UserProvider(new Authenticate(blockAddress), provider)
        const user = await userProvider.get()
        console.log(`Success to get user=${JSON.stringify(user)}`)
    })

    it('mod', async () => {
        const userProvider = new UserProvider(new Authenticate(blockAddress), provider)
        await userProvider.mod("test2")
        console.log(`Success to mod user=${blockAddress.identifier}`)
    })
})
import {
    IdentityCodeEnum,
    IdentityMetadata,
    IdentityPersonalExtend,
    IdentityTemplate,
    NetworkTypeEnum
} from "@yeying-community/yeying-web3";
import {IdentityManager, LanguageCodeEnum} from "../../src";
import {expect} from "vitest";

describe('Identity', () => {
    // 申请
    it('Create', async () => {
        const template: IdentityTemplate = {
            language: LanguageCodeEnum[LanguageCodeEnum.LANGUAGE_CODE_ZH_CH],
            parent: '',
            network: NetworkTypeEnum.NETWORK_TYPE_YEYING,
            code: IdentityCodeEnum.IDENTITY_CODE_PERSONAL,
            name: 'test',
            description: 'test',
            avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzEgMjMxIj48cGF0aCBkPSJNMzMuODMsMzMuODNhMTE1LjUsMTE1LjUsMCwxLDEsMCwxNjMuMzQsMTE1LjQ5LDExNS40OSwwLDAsMSwwLTE2My4zNFoiIHN0eWxlPSJmaWxsOiMwMGE1OGM7Ii8+PHBhdGggZD0ibTExNS41IDUxLjc1YTYzLjc1IDYzLjc1IDAgMCAwLTEwLjUgMTI2LjYzdjE0LjA5YTExNS41IDExNS41IDAgMCAwLTUzLjcyOSAxOS4wMjcgMTE1LjUgMTE1LjUgMCAwIDAgMTI4LjQ2IDAgMTE1LjUgMTE1LjUgMCAwIDAtNTMuNzI5LTE5LjAyOXYtMTQuMDg0YTYzLjc1IDYzLjc1IDAgMCAwIDUzLjI1LTYyLjg4MSA2My43NSA2My43NSAwIDAgMC02My42NS02My43NSA2My43NSA2My43NSAwIDAgMC0wLjA5OTYxIDB6IiBzdHlsZT0iZmlsbDojZThiYzg2OyIvPjxwYXRoIGQ9Im0xNDEuODkgMTk1YTExNC43OSAxMTQuNzkgMCAwIDEgMzggMTYuNSAxMTUuNTUgMTE1LjU1IDAgMCAxLTEyOC40NyAwIDExNC43OSAxMTQuNzkgMCAwIDEgMzgtMTYuNWwxNS43NSAxNS43NWgyMXoiIHN0eWxlPSJmaWxsOiMwRDIwNEE7Ii8+PHBhdGggZD0ibTE0Ni40IDE5Ni4xNC0xNy40IDE3LjQ0LTEuMTcgMS4xN2gtMjQuMzRsLTEuMTgtMS4xNy0xNy40My0xNy40NGMxLjQ5LTAuNDEgMy0wLjc5IDQuNTEtMS4xNGw0LjY3LTEgMTIuNzQgMTIuNzRoMTcuNjlsMTIuNzMtMTIuNzQgNC42NyAxYzEuNTIgMC4zNSAzIDAuNzMgNC41MSAxLjE0eiIgc3R5bGU9ImZpbGw6IzAwZmZkZjsiLz48cGF0aCBkPSJtNjkuODM0IDMzLjgyNmMtOC4yMDAxLTAuMDYyNi0xNi40NDQgMi42NzUzLTIzLjE1MiA3LjcwMzgtOC41Mjk4IDYuOTg5OS0xMi4xNTkgMTkuNjEtMTIuMzI5IDMyLjY4LTAuMjA0MSAxNS40NzYgMS42MDkyIDM0Ljc1MiAxLjc0NjQgNTEuOTE1IDAuMTA0MTQgMTMuMDQ3IDAuNTM0ODUgMjUuOTg0LTIuOTE5NyAzMy45OTUtMi40OTk0IDUuODEtOS4wOTU1IDkuNjAwNi0xNi4xOTYgMTIuMzExIDcuOTU5OSAyLjgzMDEgMjUuMDA5IDIuODA5NCAzMy41OCAxLjUzOTMgMTAuOC0xLjU5IDE3LjIzOC02LjUyOTQgMTcuMTU5LTIyLjY5OS0wLjA5MTEtMTUuOTMtMS4zODk0LTI5LjIzLTEuNTU5LTQ1LjgzLTAuMzIwOC0xMS45ODMtMS41NjktMjQuMjkxIDQuOTc3NC0zMy45ODcgNC4yMTM5LTYuMTI2NSAxMC40NTItMTAuNTIxIDE3LjExNi0xMy41ODggMy45MjkyLTEuODU3NSA4LjAzODQtMy4zMDgzIDEyLjI2My00LjMyOTctNi44NzE4LTEzLjU3NC0xOC43MzItMTkuNjE4LTMwLjY4Ny0xOS43MDl6IiBzdHlsZT0iZmlsbDpub25lOyIvPjxwYXRoIGQ9Im05MC44IDc2LjI0NmMxMS45MTgtMTcuMTI1IDMxLjk5Ni0yMy4yMTggNDkuNzQzLTE3LjQ4OCAxMS44MSAzLjk0OTYgMjAuNjkyIDEzLjM4OSAyMi4zMTMgMjguMjM3IDAuNTEwNTEgNi4yMDk4IDAuNjM0MTMgMTIuNDQ1IDAuMzcwMDcgMTguNjctMC4yMzk3MyAxMS4yLTAuNzI5NDYgMjMuODItMS4wOTk1IDM0LjA4LTAuODIwMDUgMjIuNDMgMC4wNTkzIDM1LjEgMjQuNTg5IDM2LjMgOC41NjM1IDAuMzIxMjIgMTcuMTM3LTAuMjI4NDUgMjUuNTktMS42NDA1aC0wLjAxOThjLTEwLjc0LTMuMzc5OS0xNy45OC0xNS42MDktMTkuMy0yNi4yODktMS4yOS0xMC40MS0wLjYwOTgtMjMuNDMtMC43ODk4LTM4LjA5MS0wLjE3MDEtMTQuOTYgMS4wMzk4LTI5LjgxOSAwLjI4MDA4LTQyLjA4OS0xLjQxNC0yMi43NzctMTQuOTQ3LTM4LjUwNS0zNC4xMjYtNDUuMTUyLTI3LjgxMy03LjM1LTUxLjA4MyAwLjA5MS02MS42NzIgMTcuMzQzLTUuNDY5OCA4LjkxMTItNy43NDEzIDIwLjA3LTUuODc4OCAzNi4xMjF6IiBzdHlsZT0iZmlsbDojOWMwMDkyOyIvPjxwYXRoIGQ9Im03MC45NTkgOTQuOTg1aDM1LjAzMWMyLjQwODYgMWUtNSA0LjM2MTIgMS45NTIzIDQuMzYxMiA0LjM2MDZsLTIuNTg2NCAxNy41MTFjLTAuMzUxNSAyLjM3OTktMS43MjE4IDQuMzYwNi0zLjg0NTcgNC4zNjA2aC0zMC45Yy0yLjEyMzktMWUtNSAtMy44NDU3LTEuOTUyMy0zLjg0NTctNC4zNjA2bC0yLjU4NjQtMTcuNTExYzFlLTUgLTIuNDA4MiAxLjk1MjYtNC4zNjA2IDQuMzYxMi00LjM2MDZ6IiBzdHlsZT0iZmlsbDojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6My4wMDQ1cHg7c3Ryb2tlOiMwMDA7Ii8+PHBhdGggZD0ibTE2MC4wNSA5NC45ODVoLTM1LjAzMWMtMi40MDg2IDFlLTUgLTQuMzYxMiAxLjk1MjMtNC4zNjEyIDQuMzYwNmwyLjU4NjQgMTcuNTExYzAuMzUxNDkgMi4zNzk5IDEuNzIxOCA0LjM2MDYgMy44NDU3IDQuMzYwNmgzMC45YzIuMTIzOS0xZS01IDMuODQ1Ny0xLjk1MjMgMy44NDU3LTQuMzYwNmwyLjU4NjQtMTcuNTExYy0xZS01IC0yLjQwODItMS45NTI2LTQuMzYwNi00LjM2MTItNC4zNjA2eiIgc3R5bGU9ImZpbGw6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMuMDA0NXB4O3N0cm9rZTojMDAwOyIvPjxwYXRoIGQ9Im05MC42MDcgMTAyLjM1YTQuNjMzNyA0LjYzMzIgMCAxIDAgNC42ODkyIDQuNjMzNyA0LjYzMzcgNC42MzMyIDAgMCAwLTQuNjg5Mi00LjYzMzd6bTQ5LjcyIDBhNC42MzM3IDQuNjMzMiAwIDEgMCA0LjY0NDQgNC42MzM3IDQuNjMzNyA0LjYzMzIgMCAwIDAtNC42NDQ0LTQuNjMzN3oiIHN0eWxlPSJmaWxsOiMwMDA7Ii8+PHBhdGggZD0ibTcwLjY2IDk0Ljk4NWgtMTEuNzc1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6My4wMDQ1cHg7c3Ryb2tlOiMwMDA7Ii8+PHBhdGggZD0ibTE3Mi4xMyA5NC45ODVoLTE5LjQ4NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMuMDA0NXB4O3N0cm9rZTojMDAwOyIvPjxwYXRoIGQ9Im0xMDkuMzIgMTA2LjJjNC4yMDQ1LTIuNDI3IDkuMzAzNi0xLjkxMyAxMi4zNTMtMC4wMjU4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6My4wMDQ1cHg7c3Ryb2tlOiMwMDA7Ii8+PHBhdGggZD0ibTE0OC4zMyAxMDkuNzktNS43NjI2LTguMjMyNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlOiNmZmY7Ii8+PHBhdGggZD0ibTE1Ni4yNyAxMDUtMi40MDMtMy40MzI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6NDtzdHJva2U6I2ZmZjsiLz48cGF0aCBkPSJtODIuNzQ4IDExNC4zNC04Ljk0ODktMTIuNzg0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6NDtzdHJva2U6I2ZmZjsiLz48cGF0aCBkPSJtOTEuNDA4IDEwOS43OS01Ljc2MjYtOC4yMzI0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6NDtzdHJva2U6I2ZmZjsiLz48cGF0aCBkPSJtOTcuMDYgMTQ0LjU5YTIwLjE1IDIwLjE1IDAgMCAwIDM2Ljg4IDQuNTN6IiBzdHlsZT0iZmlsbDojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6Mi45OTk5cHg7c3Ryb2tlOiMwMDA7Ii8+PC9zdmc+","created":"2024-11-25T08:51:00.890Z","checkpoint":"2024-11-25T08:51:00.891Z"},"blockAddress":"xWErLHHms6xP/SVdb9MJRry2VSEbkgu6ZfnLnMjSkt4IyuWeG0oZgupNX6ve90JjxohW0oVGFeI1xos41mUhEDfSM0Xsc3n1VejASQzQeaJyt7pq5I94TyxC829lw0UGlhF74OkXYGeQ66ahmH9N3yiWcATht3CSoebsxzIplt6Shat9oCE65aGYTvIloUBk7+VTMoKvX/vBMZd01LeOeOu9TUFmyOGsRBjReOu0rDg4ffdi335oI+EjHTEjx7zG3cWLCu8ozLbbx16QE+hIEJ6ebDYhMMW8/0YPNHsR+8g2lT+IyF8tnjEocjtBvwjgd5pN0BY6FRFOpHSknA+ovRQ1zk90LAES8MuY6ZlSMKwA98UoLfU+2dSYK5+7SB4iPykTHoVe51DahHaE8LZ5HOkWWtTrUF8lzXERmfo8xyRX6tjcqQG59yzjgBGqGhc2Q3AyEwlqjYARGCS7ZLJEU7ROP/HShOAT7uwttkv9OCa0jhIEkivrf0DkTFCYE12a5sh7ASbTjMiBITAaUe/WN3RvBS91lCe17B1ypnZKgAtypk7CxLQpOEkO8f111yCblasNziQs2V7wbnfFx5Yp+ZpoGMPeEwNpgOWwSGttZEkSA1zR/OmYvXDb/L6IYM1MnIAdjaNpD4siYhUJp0DaI3+GLTsr1keJYyDr',
        }

        template.extend = IdentityPersonalExtend.create({
            email: 'test@gmail.com',
            telephone: '1234567890',
        })

        const manager = new IdentityManager()
        const password = '123456'
        const identity = await manager.createIdentity(password, template)
        const metadata = identity.metadata as IdentityMetadata
        console.log(`Success to create identity=${metadata.did}`)
        const result = await manager.importIdentity(await manager.exportIdentity(metadata.did))
        expect(result).toStrictEqual(identity)
    })

    // 修改
    it('Update', async () => {
        const template: IdentityTemplate = {
            language: LanguageCodeEnum[LanguageCodeEnum.LANGUAGE_CODE_ZH_CH],
            parent: '',
            network: NetworkTypeEnum.NETWORK_TYPE_YEYING,
            code: IdentityCodeEnum.IDENTITY_CODE_PERSONAL,
            name: 'old',
            description: 'old',
            avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzEgMjMxIj48cGF0aCBkPSJNMzMuODMsMzMuODNhMTE1LjUsMTE1LjUsMCwxLDEsMCwxNjMuMzQsMTE1LjQ5LDExNS40OSwwLDAsMSwwLTE2My4zNFoiIHN0eWxlPSJmaWxsOiMwMGE1OGM7Ii8+PHBhdGggZD0ibTExNS41IDUxLjc1YTYzLjc1IDYzLjc1IDAgMCAwLTEwLjUgMTI2LjYzdjE0LjA5YTExNS41IDExNS41IDAgMCAwLTUzLjcyOSAxOS4wMjcgMTE1LjUgMTE1LjUgMCAwIDAgMTI4LjQ2IDAgMTE1LjUgMTE1LjUgMCAwIDAtNTMuNzI5LTE5LjAyOXYtMTQuMDg0YTYzLjc1IDYzLjc1IDAgMCAwIDUzLjI1LTYyLjg4MSA2My43NSA2My43NSAwIDAgMC02My42NS02My43NSA2My43NSA2My43NSAwIDAgMC0wLjA5OTYxIDB6IiBzdHlsZT0iZmlsbDojZThiYzg2OyIvPjxwYXRoIGQ9Im0xNDEuODkgMTk1YTExNC43OSAxMTQuNzkgMCAwIDEgMzggMTYuNSAxMTUuNTUgMTE1LjU1IDAgMCAxLTEyOC40NyAwIDExNC43OSAxMTQuNzkgMCAwIDEgMzgtMTYuNWwxNS43NSAxNS43NWgyMXoiIHN0eWxlPSJmaWxsOiMwRDIwNEE7Ii8+PHBhdGggZD0ibTE0Ni40IDE5Ni4xNC0xNy40IDE3LjQ0LTEuMTcgMS4xN2gtMjQuMzRsLTEuMTgtMS4xNy0xNy40My0xNy40NGMxLjQ5LTAuNDEgMy0wLjc5IDQuNTEtMS4xNGw0LjY3LTEgMTIuNzQgMTIuNzRoMTcuNjlsMTIuNzMtMTIuNzQgNC42NyAxYzEuNTIgMC4zNSAzIDAuNzMgNC41MSAxLjE0eiIgc3R5bGU9ImZpbGw6IzAwZmZkZjsiLz48cGF0aCBkPSJtNjkuODM0IDMzLjgyNmMtOC4yMDAxLTAuMDYyNi0xNi40NDQgMi42NzUzLTIzLjE1MiA3LjcwMzgtOC41Mjk4IDYuOTg5OS0xMi4xNTkgMTkuNjEtMTIuMzI5IDMyLjY4LTAuMjA0MSAxNS40NzYgMS42MDkyIDM0Ljc1MiAxLjc0NjQgNTEuOTE1IDAuMTA0MTQgMTMuMDQ3IDAuNTM0ODUgMjUuOTg0LTIuOTE5NyAzMy45OTUtMi40OTk0IDUuODEtOS4wOTU1IDkuNjAwNi0xNi4xOTYgMTIuMzExIDcuOTU5OSAyLjgzMDEgMjUuMDA5IDIuODA5NCAzMy41OCAxLjUzOTMgMTAuOC0xLjU5IDE3LjIzOC02LjUyOTQgMTcuMTU5LTIyLjY5OS0wLjA5MTEtMTUuOTMtMS4zODk0LTI5LjIzLTEuNTU5LTQ1LjgzLTAuMzIwOC0xMS45ODMtMS41NjktMjQuMjkxIDQuOTc3NC0zMy45ODcgNC4yMTM5LTYuMTI2NSAxMC40NTItMTAuNTIxIDE3LjExNi0xMy41ODggMy45MjkyLTEuODU3NSA4LjAzODQtMy4zMDgzIDEyLjI2My00LjMyOTctNi44NzE4LTEzLjU3NC0xOC43MzItMTkuNjE4LTMwLjY4Ny0xOS43MDl6IiBzdHlsZT0iZmlsbDpub25lOyIvPjxwYXRoIGQ9Im05MC44IDc2LjI0NmMxMS45MTgtMTcuMTI1IDMxLjk5Ni0yMy4yMTggNDkuNzQzLTE3LjQ4OCAxMS44MSAzLjk0OTYgMjAuNjkyIDEzLjM4OSAyMi4zMTMgMjguMjM3IDAuNTEwNTEgNi4yMDk4IDAuNjM0MTMgMTIuNDQ1IDAuMzcwMDcgMTguNjctMC4yMzk3MyAxMS4yLTAuNzI5NDYgMjMuODItMS4wOTk1IDM0LjA4LTAuODIwMDUgMjIuNDMgMC4wNTkzIDM1LjEgMjQuNTg5IDM2LjMgOC41NjM1IDAuMzIxMjIgMTcuMTM3LTAuMjI4NDUgMjUuNTktMS42NDA1aC0wLjAxOThjLTEwLjc0LTMuMzc5OS0xNy45OC0xNS42MDktMTkuMy0yNi4yODktMS4yOS0xMC40MS0wLjYwOTgtMjMuNDMtMC43ODk4LTM4LjA5MS0wLjE3MDEtMTQuOTYgMS4wMzk4LTI5LjgxOSAwLjI4MDA4LTQyLjA4OS0xLjQxNC0yMi43NzctMTQuOTQ3LTM4LjUwNS0zNC4xMjYtNDUuMTUyLTI3LjgxMy03LjM1LTUxLjA4MyAwLjA5MS02MS42NzIgMTcuMzQzLTUuNDY5OCA4LjkxMTItNy43NDEzIDIwLjA3LTUuODc4OCAzNi4xMjF6IiBzdHlsZT0iZmlsbDojOWMwMDkyOyIvPjxwYXRoIGQ9Im03MC45NTkgOTQuOTg1aDM1LjAzMWMyLjQwODYgMWUtNSA0LjM2MTIgMS45NTIzIDQuMzYxMiA0LjM2MDZsLTIuNTg2NCAxNy41MTFjLTAuMzUxNSAyLjM3OTktMS43MjE4IDQuMzYwNi0zLjg0NTcgNC4zNjA2aC0zMC45Yy0yLjEyMzktMWUtNSAtMy44NDU3LTEuOTUyMy0zLjg0NTctNC4zNjA2bC0yLjU4NjQtMTcuNTExYzFlLTUgLTIuNDA4MiAxLjk1MjYtNC4zNjA2IDQuMzYxMi00LjM2MDZ6IiBzdHlsZT0iZmlsbDojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6My4wMDQ1cHg7c3Ryb2tlOiMwMDA7Ii8+PHBhdGggZD0ibTE2MC4wNSA5NC45ODVoLTM1LjAzMWMtMi40MDg2IDFlLTUgLTQuMzYxMiAxLjk1MjMtNC4zNjEyIDQuMzYwNmwyLjU4NjQgMTcuNTExYzAuMzUxNDkgMi4zNzk5IDEuNzIxOCA0LjM2MDYgMy44NDU3IDQuMzYwNmgzMC45YzIuMTIzOS0xZS01IDMuODQ1Ny0xLjk1MjMgMy44NDU3LTQuMzYwNmwyLjU4NjQtMTcuNTExYy0xZS01IC0yLjQwODItMS45NTI2LTQuMzYwNi00LjM2MTItNC4zNjA2eiIgc3R5bGU9ImZpbGw6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMuMDA0NXB4O3N0cm9rZTojMDAwOyIvPjxwYXRoIGQ9Im05MC42MDcgMTAyLjM1YTQuNjMzNyA0LjYzMzIgMCAxIDAgNC42ODkyIDQuNjMzNyA0LjYzMzcgNC42MzMyIDAgMCAwLTQuNjg5Mi00LjYzMzd6bTQ5LjcyIDBhNC42MzM3IDQuNjMzMiAwIDEgMCA0LjY0NDQgNC42MzM3IDQuNjMzNyA0LjYzMzIgMCAwIDAtNC42NDQ0LTQuNjMzN3oiIHN0eWxlPSJmaWxsOiMwMDA7Ii8+PHBhdGggZD0ibTcwLjY2IDk0Ljk4NWgtMTEuNzc1IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6My4wMDQ1cHg7c3Ryb2tlOiMwMDA7Ii8+PHBhdGggZD0ibTE3Mi4xMyA5NC45ODVoLTE5LjQ4NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMuMDA0NXB4O3N0cm9rZTojMDAwOyIvPjxwYXRoIGQ9Im0xMDkuMzIgMTA2LjJjNC4yMDQ1LTIuNDI3IDkuMzAzNi0xLjkxMyAxMi4zNTMtMC4wMjU4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6My4wMDQ1cHg7c3Ryb2tlOiMwMDA7Ii8+PHBhdGggZD0ibTE0OC4zMyAxMDkuNzktNS43NjI2LTguMjMyNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlOiNmZmY7Ii8+PHBhdGggZD0ibTE1Ni4yNyAxMDUtMi40MDMtMy40MzI4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6NDtzdHJva2U6I2ZmZjsiLz48cGF0aCBkPSJtODIuNzQ4IDExNC4zNC04Ljk0ODktMTIuNzg0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6NDtzdHJva2U6I2ZmZjsiLz48cGF0aCBkPSJtOTEuNDA4IDEwOS43OS01Ljc2MjYtOC4yMzI0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6NDtzdHJva2U6I2ZmZjsiLz48cGF0aCBkPSJtOTcuMDYgMTQ0LjU5YTIwLjE1IDIwLjE1IDAgMCAwIDM2Ljg4IDQuNTN6IiBzdHlsZT0iZmlsbDojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6Mi45OTk5cHg7c3Ryb2tlOiMwMDA7Ii8+PC9zdmc+","created":"2024-11-25T08:51:00.890Z","checkpoint":"2024-11-25T08:51:00.891Z"},"blockAddress":"xWErLHHms6xP/SVdb9MJRry2VSEbkgu6ZfnLnMjSkt4IyuWeG0oZgupNX6ve90JjxohW0oVGFeI1xos41mUhEDfSM0Xsc3n1VejASQzQeaJyt7pq5I94TyxC829lw0UGlhF74OkXYGeQ66ahmH9N3yiWcATht3CSoebsxzIplt6Shat9oCE65aGYTvIloUBk7+VTMoKvX/vBMZd01LeOeOu9TUFmyOGsRBjReOu0rDg4ffdi335oI+EjHTEjx7zG3cWLCu8ozLbbx16QE+hIEJ6ebDYhMMW8/0YPNHsR+8g2lT+IyF8tnjEocjtBvwjgd5pN0BY6FRFOpHSknA+ovRQ1zk90LAES8MuY6ZlSMKwA98UoLfU+2dSYK5+7SB4iPykTHoVe51DahHaE8LZ5HOkWWtTrUF8lzXERmfo8xyRX6tjcqQG59yzjgBGqGhc2Q3AyEwlqjYARGCS7ZLJEU7ROP/HShOAT7uwttkv9OCa0jhIEkivrf0DkTFCYE12a5sh7ASbTjMiBITAaUe/WN3RvBS91lCe17B1ypnZKgAtypk7CxLQpOEkO8f111yCblasNziQs2V7wbnfFx5Yp+ZpoGMPeEwNpgOWwSGttZEkSA1zR/OmYvXDb/L6IYM1MnIAdjaNpD4siYhUJp0DaI3+GLTsr1keJYyDr',
        }

        template.extend = IdentityPersonalExtend.create({
            email: 'test@gmail.com',
            telephone: '1234567890',
        })

        const manager = new IdentityManager()
        const password = '123456'
        const identity = await manager.createIdentity(password, template)
        expect(identity.metadata?.name).toEqual("old")
        expect(identity.personalExtend?.email).toEqual('test@gmail.com')

        // 修改名称
        const newTemplate = {
            name: "new",
            extend: {
                telephone: "1234567891",
            }
        }

        const newIdentity = await manager.updateIdentity(newTemplate, password, identity)
        expect(newIdentity.metadata?.name).toStrictEqual("new")
        expect(newIdentity.metadata?.avatar).toStrictEqual(template.avatar)
        expect(newIdentity.personalExtend?.telephone).toStrictEqual("1234567891")

        // 检查是否生效，获取详情
        const existing = await manager.getIdentity(identity.metadata?.did as string)
        expect(existing).toStrictEqual(newIdentity)
    })

})
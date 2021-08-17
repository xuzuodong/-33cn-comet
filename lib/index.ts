import encodeMessage from './encodeMessage'
import Connection from './connection'
import { FzmMessageTypes } from './messageTypes'

export interface AuthMsg {
    appId: string
    token: string
    ext?: Uint8Array
}

export class Comet {
    url: string
    ws?: WebSocket

    constructor(url: string) {
        this.url = url
    }

    authorize(authMsg: AuthMsg): Promise<Connection> {
        return new Promise((resolve, reject) => {
            this.ws = new WebSocket(this.url)
            this.ws.onopen = () => {
                const authMsgEncoded = encodeMessage(authMsg, FzmMessageTypes.Auth)

                // 发送鉴权消息
                this.ws?.send(authMsgEncoded)
            }

            this.ws.onmessage = () => {
                resolve(new Connection(this.ws as WebSocket))
            }

            this.ws.onclose = () => {
                reject(
                    new Error(
                        `WebSocket connection closed by server side. This was caused by invalid authentication in most cases.`
                    )
                )
            }
        })
    }
}

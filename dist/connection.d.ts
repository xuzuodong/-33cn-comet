/// <reference types="node" />
import { FzmMessageTypes } from './messageTypes';
interface IPendingMessage {
    seq: number;
    uuid?: string;
    type: FzmMessageTypes;
    resolve?: () => void;
    reject?: (reason?: string) => void;
    timeout?: NodeJS.Timeout;
}
declare class PendingMessage implements IPendingMessage {
    seq: number;
    uuid?: string;
    type: FzmMessageTypes;
    resolve?: () => void;
    reject?: (reason?: string) => void;
    timeout?: NodeJS.Timeout;
    constructor(seq: number, type: FzmMessageTypes, uuid: string);
}
export interface IConnection {
    url: string;
    readyState: number;
    sendMessage(msg: {
        body: Uint8Array;
        uuid: string;
    }): Promise<void>;
    disconnect(): void;
    onReceiveMessage?: (messageBody: Uint8Array) => void;
    onLoseConnection?: () => void;
}
export default class Connection implements IConnection {
    private webSocket;
    onReceiveMessage?: (messageBody: Uint8Array) => void;
    onLoseConnection?: () => void;
    seq: number;
    private heartBeatInterval;
    private timer;
    private debug;
    queue: PendingMessage[];
    constructor(ws: WebSocket);
    /** WebSocket 状态 */
    get readyState(): number;
    /** WebSocket 连接的 url */
    get url(): string;
    /** 主动断开连接 */
    disconnect(): void;
    /**
     * 发送消息，需将消息内容转换为 protobuf 格式的二进制
     * @param msg 发送的消息，以及制定该条消息的唯一 id
     * @param msg.body 消息对象
     * @param msg.uuid 唯一id
     * @returns promise
     */
    sendMessage(msg: {
        body: Uint8Array;
        uuid: string;
    }): Promise<void>;
    private sendHeartBeat;
}
export {};

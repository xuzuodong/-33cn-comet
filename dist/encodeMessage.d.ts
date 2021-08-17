import { AuthMsg } from '.';
import { FzmMessageTypes } from './messageTypes';
export declare type MessageEncoderPayload = AuthMsg | Uint8Array | null;
declare const _default: (payload: MessageEncoderPayload, messageType: FzmMessageTypes, seq?: number, ack?: number | undefined) => Uint8Array;
/** 对消息进行编码 */
export default _default;

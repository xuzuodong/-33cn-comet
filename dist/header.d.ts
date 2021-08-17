export declare const header: {
    packageLength: number;
    headerLength: number;
    ver: number;
    operation: number;
    seq: number;
    ack: number;
};
export default class FzmMessageProtocolHeader {
    header: {
        [headerProp: string]: {
            value: number;
            length: number;
        };
    };
    constructor(messageType: number, seq: number, ack: number);
    /** 生成 body 后一定要拿着 body 调用一次该方法，否则包长度无法获得！ */
    updatePackageLength(bodyData: Uint8Array): void;
}

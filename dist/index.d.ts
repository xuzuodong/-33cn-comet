import Connection from './connection';
export interface AuthMsg {
    appId: string;
    token: string;
    ext?: Uint8Array;
}
export declare class Comet {
    url: string;
    ws?: WebSocket;
    constructor(url: string);
    authorize(authMsg: AuthMsg): Promise<Connection>;
}

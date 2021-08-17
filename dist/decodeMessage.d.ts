import { header } from './header';
interface Header {
    [headerProp: string]: number;
}
declare const _default: (rawMsg: Blob) => Promise<{
    header: Header;
    body: Uint8Array;
}>;
export default _default;

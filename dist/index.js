'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var encUtils = require('enc-utils');
var $protobuf = require('protobufjs/minimal');

// header 长度，用于解码
var header = {
    packageLength: 4,
    headerLength: 2,
    ver: 2,
    operation: 4,
    seq: 4,
    ack: 4,
};
// 用于编码
var FzmMessageProtocolHeader = /** @class */ (function () {
    function FzmMessageProtocolHeader(messageType, seq, ack) {
        this.header = {
            packageLength: { value: 0, length: 4 },
            headerLength: { value: 0, length: 2 },
            ver: { value: 1, length: 2 },
            operation: { value: messageType, length: 4 },
            seq: { value: seq, length: 4 },
            ack: { value: ack, length: 4 },
        };
        // 重新计算 headerLength
        this.header.headerLength.value = Object.values(this.header).reduce(function (prev, curr) {
            return prev + curr.length;
        }, 0);
    }
    /** 生成 body 后一定要拿着 body 调用一次该方法，否则包长度无法获得！ */
    FzmMessageProtocolHeader.prototype.updatePackageLength = function (bodyData) {
        this.header.packageLength.value = this.header.headerLength.value + bodyData.length;
    };
    return FzmMessageProtocolHeader;
}());

var FzmMessageTypes;
(function (FzmMessageTypes) {
    FzmMessageTypes[FzmMessageTypes["Auth"] = 1] = "Auth";
    FzmMessageTypes[FzmMessageTypes["AuthResponse"] = 2] = "AuthResponse";
    FzmMessageTypes[FzmMessageTypes["HeartBeat"] = 3] = "HeartBeat";
    FzmMessageTypes[FzmMessageTypes["HeartBeatResponse"] = 4] = "HeartBeatResponse";
    FzmMessageTypes[FzmMessageTypes["Disconnect"] = 5] = "Disconnect";
    FzmMessageTypes[FzmMessageTypes["DisconnectResponse"] = 6] = "DisconnectResponse";
    FzmMessageTypes[FzmMessageTypes["SendMessage"] = 7] = "SendMessage";
    FzmMessageTypes[FzmMessageTypes["SendMessageResponse"] = 8] = "SendMessageResponse";
    FzmMessageTypes[FzmMessageTypes["ReceiveMessage"] = 9] = "ReceiveMessage";
    FzmMessageTypes[FzmMessageTypes["ReceiveMessageResponse"] = 10] = "ReceiveMessageResponse";
})(FzmMessageTypes || (FzmMessageTypes = {}));

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

const chat33 = $root.chat33 = (() => {

    /**
     * Namespace chat33.
     * @exports chat33
     * @namespace
     */
    const chat33 = {};

    chat33.comet = (function() {

        /**
         * Namespace comet.
         * @memberof chat33
         * @namespace
         */
        const comet = {};

        comet.AuthMsg = (function() {

            /**
             * Properties of an AuthMsg.
             * @memberof chat33.comet
             * @interface IAuthMsg
             * @property {string|null} [appId] AuthMsg appId
             * @property {string|null} [token] AuthMsg token
             * @property {Uint8Array|null} [ext] AuthMsg ext
             */

            /**
             * Constructs a new AuthMsg.
             * @memberof chat33.comet
             * @classdesc Represents an AuthMsg.
             * @implements IAuthMsg
             * @constructor
             * @param {chat33.comet.IAuthMsg=} [properties] Properties to set
             */
            function AuthMsg(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AuthMsg appId.
             * @member {string} appId
             * @memberof chat33.comet.AuthMsg
             * @instance
             */
            AuthMsg.prototype.appId = "";

            /**
             * AuthMsg token.
             * @member {string} token
             * @memberof chat33.comet.AuthMsg
             * @instance
             */
            AuthMsg.prototype.token = "";

            /**
             * AuthMsg ext.
             * @member {Uint8Array} ext
             * @memberof chat33.comet.AuthMsg
             * @instance
             */
            AuthMsg.prototype.ext = $util.newBuffer([]);

            /**
             * Creates a new AuthMsg instance using the specified properties.
             * @function create
             * @memberof chat33.comet.AuthMsg
             * @static
             * @param {chat33.comet.IAuthMsg=} [properties] Properties to set
             * @returns {chat33.comet.AuthMsg} AuthMsg instance
             */
            AuthMsg.create = function create(properties) {
                return new AuthMsg(properties);
            };

            /**
             * Encodes the specified AuthMsg message. Does not implicitly {@link chat33.comet.AuthMsg.verify|verify} messages.
             * @function encode
             * @memberof chat33.comet.AuthMsg
             * @static
             * @param {chat33.comet.IAuthMsg} message AuthMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthMsg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.appId);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
                if (message.ext != null && Object.hasOwnProperty.call(message, "ext"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ext);
                return writer;
            };

            /**
             * Encodes the specified AuthMsg message, length delimited. Does not implicitly {@link chat33.comet.AuthMsg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat33.comet.AuthMsg
             * @static
             * @param {chat33.comet.IAuthMsg} message AuthMsg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthMsg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AuthMsg message from the specified reader or buffer.
             * @function decode
             * @memberof chat33.comet.AuthMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat33.comet.AuthMsg} AuthMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthMsg.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat33.comet.AuthMsg();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.appId = reader.string();
                        break;
                    case 2:
                        message.token = reader.string();
                        break;
                    case 3:
                        message.ext = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AuthMsg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat33.comet.AuthMsg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat33.comet.AuthMsg} AuthMsg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthMsg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AuthMsg message.
             * @function verify
             * @memberof chat33.comet.AuthMsg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AuthMsg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.appId != null && message.hasOwnProperty("appId"))
                    if (!$util.isString(message.appId))
                        return "appId: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.ext != null && message.hasOwnProperty("ext"))
                    if (!(message.ext && typeof message.ext.length === "number" || $util.isString(message.ext)))
                        return "ext: buffer expected";
                return null;
            };

            /**
             * Creates an AuthMsg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat33.comet.AuthMsg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat33.comet.AuthMsg} AuthMsg
             */
            AuthMsg.fromObject = function fromObject(object) {
                if (object instanceof $root.chat33.comet.AuthMsg)
                    return object;
                let message = new $root.chat33.comet.AuthMsg();
                if (object.appId != null)
                    message.appId = String(object.appId);
                if (object.token != null)
                    message.token = String(object.token);
                if (object.ext != null)
                    if (typeof object.ext === "string")
                        $util.base64.decode(object.ext, message.ext = $util.newBuffer($util.base64.length(object.ext)), 0);
                    else if (object.ext.length)
                        message.ext = object.ext;
                return message;
            };

            /**
             * Creates a plain object from an AuthMsg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat33.comet.AuthMsg
             * @static
             * @param {chat33.comet.AuthMsg} message AuthMsg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AuthMsg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.appId = "";
                    object.token = "";
                    if (options.bytes === String)
                        object.ext = "";
                    else {
                        object.ext = [];
                        if (options.bytes !== Array)
                            object.ext = $util.newBuffer(object.ext);
                    }
                }
                if (message.appId != null && message.hasOwnProperty("appId"))
                    object.appId = message.appId;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.ext != null && message.hasOwnProperty("ext"))
                    object.ext = options.bytes === String ? $util.base64.encode(message.ext, 0, message.ext.length) : options.bytes === Array ? Array.prototype.slice.call(message.ext) : message.ext;
                return object;
            };

            /**
             * Converts this AuthMsg to JSON.
             * @function toJSON
             * @memberof chat33.comet.AuthMsg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AuthMsg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AuthMsg;
        })();

        return comet;
    })();

    return chat33;
})();

/**
 * 将一个数字转换为一定长度的二进制数据
 * @param num 想转换的数字
 * @param byteLength 转换后的二进制数据长度（单位为字节）。
 * `byteLength` 不能小于 `num` 的字节长度。
 * 例如输入的 num 为 256，而 256 用二进制表示为 `00000001 00000000`，因此 `num` 的字节长度为 2，即至少需要 2 个字节来表示。
 * 因此 `byteLength` 不能为 1，只能等于或大于 2。
 * @returns 长度为 `byteLength` 的二进制的 `num`
 */
var encodeNumberWithFixedLength = function (num, byteLength) {
    var uint8arr = encUtils.numberToArray(num);
    if (uint8arr.length > byteLength)
        throw '输入的数字过大！';
    if (uint8arr.length == byteLength)
        return uint8arr;
    var arr = Array.from(uint8arr);
    while (arr.length < byteLength) {
        arr.splice(0, 0, 0); // 在数组的最前面插入一个 0
    }
    return Uint8Array.from(arr);
};
/** 对消息进行编码 */
var encodeMessage = (function (payload, messageType, seq, ack) {
    if (seq === void 0) { seq = 0; }
    // 1. 构造 body
    var bodyData;
    // 判断 `messageType`：
    // 如果是初次连接鉴权, 则内部解析成二进制流;
    // 如果是正常发送消息, 则直接接收二进制流。
    if (payload && messageType === FzmMessageTypes.Auth) {
        bodyData = chat33.comet.AuthMsg.encode(payload).finish();
    }
    else if (payload && messageType !== FzmMessageTypes.Auth) {
        bodyData = payload;
    }
    else {
        bodyData = new Uint8Array();
    }
    // 2. 基于 body 构造对应的 header
    var header = new FzmMessageProtocolHeader(messageType, seq, ack || 0);
    header.updatePackageLength(bodyData);
    // 3. 对 header 编码
    var headerData = Object.values(header.header).reduce(function (prev, curr) {
        return encUtils.concatArrays(prev, encodeNumberWithFixedLength(curr.value, curr.length));
    }, new Uint8Array());
    // 4. 拼接 header 和 body
    var data = encUtils.concatArrays(headerData, bodyData);
    return data;
});

var decode = function (data) {
    // 先解析 header
    var key;
    // 计算 header 中所有字段的开始位置
    var startIndexesMap = [];
    Object.values(header).reduce(function (prev, curr, currIndex, arr) {
        var currValue;
        if (currIndex === 0) {
            currValue = 0;
        }
        else {
            currValue = arr[currIndex - 1];
        }
        startIndexesMap.push(prev + currValue);
        return prev + currValue;
    }, 0);
    // 计算 header 中所有字段的字段名、开始位置、结束位置
    var headerPropsPointer = [];
    var i = 0;
    for (key in header) {
        var length_1 = header[key];
        headerPropsPointer.push({
            propName: key,
            startIndex: startIndexesMap[i],
            endIndex: startIndexesMap[i] + length_1,
        });
        i++;
    }
    // 计算 header 中所有字段的值
    var headerObj = {};
    headerPropsPointer.forEach(function (prop) {
        Object.defineProperty(headerObj, prop.propName, {
            value: encUtils.arrayToNumber(data.slice(prop.startIndex, prop.endIndex)),
            configurable: true,
            enumerable: true,
            writable: true,
        });
    });
    // 拿到 body 部分
    var bodyData = data.slice(headerObj.headerLength);
    var body;
    if (bodyData.length) {
        body = bodyData;
    }
    else {
        body = new Uint8Array();
    }
    return {
        header: headerObj,
        body: body,
    };
};
var decodeMessage = (function (rawMsg) {
    return new Promise(function (resolve) {
        rawMsg.arrayBuffer().then(function (bufferMsg) {
            var msg = decode(new Uint8Array(bufferMsg));
            resolve(msg);
        });
    });
});
(function () {
    File.prototype.arrayBuffer = File.prototype.arrayBuffer || myArrayBuffer;
    Blob.prototype.arrayBuffer = Blob.prototype.arrayBuffer || myArrayBuffer;
    function myArrayBuffer() {
        var _this = this;
        // this: File or Blob
        return new Promise(function (resolve) {
            var fr = new FileReader();
            fr.onload = function () {
                resolve(fr.result);
            };
            fr.readAsArrayBuffer(_this);
        });
    }
})();

var PendingMessage = /** @class */ (function () {
    function PendingMessage(seq, type, uuid) {
        this.seq = seq;
        this.type = type;
        this.uuid = uuid;
    }
    return PendingMessage;
}());
var Connection = /** @class */ (function () {
    function Connection(ws) {
        // console.log('WebSocket: 已连接')
        var _this = this;
        this.queue = [];
        this.seq = 0;
        this.debug = process.env.NODE_ENV !== 'production';
        this.webSocket = ws;
        // 定时发送心跳
        this.heartBeatInterval = 15; // 单位秒；后端目前设置 4 分钟超时
        this.timer = setInterval(function () {
            // 下次将要发送心跳前，队列中尚有未发送成功的心跳，则表明断线
            if (_this.queue.some(function (item) { return item.type === FzmMessageTypes.HeartBeat; })) {
                console.log('Comet: disconnected');
                _this.onLoseConnection && _this.onLoseConnection();
                _this.disconnect();
            }
            else {
                _this.sendHeartBeat();
            }
        }, this.heartBeatInterval * 1000);
        // 监听 webSocket 收到消息
        this.webSocket.onmessage = function (event) {
            decodeMessage(event.data).then(function (response) {
                var responseType = response.header.operation;
                var responseSeq = response.header.seq;
                var responseAck = response.header.ack;
                // 答复类型：心跳答复
                if (responseType === FzmMessageTypes.HeartBeatResponse) {
                    // 从队列中剔除
                    _this.queue.splice(_this.queue.findIndex(function (i) { return i.seq == responseSeq; }), 1);
                }
                // 接收到对方用户发来的消息，回复“收到”
                else if (responseType === FzmMessageTypes.ReceiveMessage) {
                    // 发送确认接收到消息的响应
                    _this.seq++;
                    // console.log('WebSocket: 收到新消息, 对方的 seq: ' + (responseAck == 0 ? '离线消息' : responseAck))
                    console.log('Comet: new message received: ' + _this.url);
                    var msgData = encodeMessage(null, FzmMessageTypes.ReceiveMessageResponse, _this.seq, responseSeq);
                    _this.webSocket.send(msgData);
                    _this.onReceiveMessage && _this.onReceiveMessage(response.body);
                }
                // 接收到本用户发送消息成功的确认
                else if (responseType === FzmMessageTypes.SendMessageResponse) {
                    console.log("Comet: message successfully sended, seq: " + responseSeq);
                    var queueItem = _this.queue.find(function (i) { return i.seq == responseAck; });
                    queueItem.resolve && queueItem.resolve();
                    if (queueItem.timeout)
                        clearTimeout(queueItem.timeout);
                    // 从队列中剔除
                    _this.queue.splice(_this.queue.findIndex(function (i) { return i.seq == responseAck; }), 1);
                }
                else {
                    console.log("Comet: unknown type of message received: \"" + responseType + "\", seq: " + responseSeq);
                }
            });
        };
        this.webSocket.onclose = function () {
            console.log('Comet: connection closed');
            _this.queue.forEach(function (m) { return m.reject && m.reject(); });
        };
        this.webSocket.onerror = function (event) {
            console.log(event);
            _this.queue.forEach(function (m) { return m.reject && m.reject(); });
        };
    }
    Object.defineProperty(Connection.prototype, "readyState", {
        /** WebSocket 状态 */
        get: function () {
            return this.webSocket.readyState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "url", {
        /** WebSocket 连接的 url */
        get: function () {
            return this.webSocket.url;
        },
        enumerable: false,
        configurable: true
    });
    /** 主动断开连接 */
    Connection.prototype.disconnect = function () {
        this.seq++;
        if (this.debug)
            console.log("Comet: disconnected actively, seq: " + this.seq);
        this.webSocket.send(encodeMessage(null, FzmMessageTypes.Disconnect, this.seq));
        this.webSocket.close();
        clearInterval(this.timer);
    };
    /**
     * 发送消息，需将消息内容转换为 protobuf 格式的二进制
     * @param msg 发送的消息，以及制定该条消息的唯一 id
     * @param msg.body 消息对象
     * @param msg.uuid 唯一id
     * @returns promise
     */
    Connection.prototype.sendMessage = function (msg) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.debug)
                console.log("Comet: send message, seq: " + _this.seq);
            var failedMessage = _this.queue.find(function (m) { return m.uuid === msg.uuid; }); // 是否为之前发送失败的消息
            var pendingMessage;
            if (failedMessage) {
                pendingMessage = failedMessage;
            }
            else {
                _this.seq++;
                pendingMessage = new PendingMessage(_this.seq, FzmMessageTypes.SendMessage, msg.uuid);
                _this.queue.push(pendingMessage);
            }
            pendingMessage.resolve = resolve;
            pendingMessage.reject = reject;
            _this.webSocket.send(encodeMessage(msg.body, FzmMessageTypes.SendMessage, pendingMessage.seq));
        });
    };
    Connection.prototype.sendHeartBeat = function () {
        this.seq++;
        if (this.debug)
            console.log("Comet: heart beat, seq: " + this.seq);
        this.queue.push({ seq: this.seq, type: FzmMessageTypes.HeartBeat });
        this.webSocket.send(encodeMessage(null, FzmMessageTypes.HeartBeat, this.seq));
    };
    return Connection;
}());

var Comet = /** @class */ (function () {
    function Comet(url) {
        this.url = url;
    }
    Comet.prototype.authorize = function (authMsg) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ws = new WebSocket(_this.url);
            _this.ws.onopen = function () {
                var _a;
                var authMsgEncoded = encodeMessage(authMsg, FzmMessageTypes.Auth);
                // 发送鉴权消息
                (_a = _this.ws) === null || _a === void 0 ? void 0 : _a.send(authMsgEncoded);
            };
            _this.ws.onmessage = function () {
                resolve(new Connection(_this.ws));
            };
            _this.ws.onclose = function () {
                reject(new Error("WebSocket connection closed by server side. This was caused by invalid authentication in most cases."));
            };
        });
    };
    return Comet;
}());

exports.Comet = Comet;

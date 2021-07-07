"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MessageButton_onClick, _MessageButton_buttonListener, _MessageButton_disposed;
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const stuffs_1 = require("stuffs");
class MessageButton {
    constructor(data) {
        this.type = 2;
        this.disabled = false;
        _MessageButton_onClick.set(this, void 0);
        _MessageButton_buttonListener.set(this, void 0);
        _MessageButton_disposed.set(this, false);
        this.style = data.style || 1;
        this.label = data.label;
        this.disabled = Boolean(data.disabled);
        this.emoji = data.emoji || null;
        this.url = data.url;
        let id = data.id || `ei:b:${stuffs_1.randomString(16)}`;
        this.custom_id = id;
        if (typeof data.onClick == "function") {
            __classPrivateFieldSet(this, _MessageButton_onClick, data.onClick, "f");
            __classPrivateFieldSet(this, _MessageButton_buttonListener, (data) => {
                if (data.id != id)
                    return;
                __classPrivateFieldGet(this, _MessageButton_onClick, "f").call(this, data, this);
            }, "f");
            _1.listeners.clickButton.add(__classPrivateFieldGet(this, _MessageButton_buttonListener, "f"));
        }
    }
    get disposed() {
        return __classPrivateFieldGet(this, _MessageButton_disposed, "f");
    }
    dispose() {
        if (__classPrivateFieldGet(this, _MessageButton_disposed, "f"))
            return false;
        _1.listeners.clickButton.delete(__classPrivateFieldGet(this, _MessageButton_buttonListener, "f"));
        __classPrivateFieldSet(this, _MessageButton_disposed, true, "f");
        return true;
    }
}
exports.default = MessageButton;
_MessageButton_onClick = new WeakMap(), _MessageButton_buttonListener = new WeakMap(), _MessageButton_disposed = new WeakMap();

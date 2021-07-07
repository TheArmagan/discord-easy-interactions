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
var _MessageDropDown_onUpdate, _MessageDropDown_menuListener, _MessageDropDown_disposed;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const stuffs_1 = require("stuffs");
class MessageDropDown {
    constructor(data) {
        var _a, _b, _c, _d;
        this.type = 3;
        this.min_values = 1;
        this.max_values = 1;
        this.options = [];
        _MessageDropDown_onUpdate.set(this, void 0);
        _MessageDropDown_menuListener.set(this, void 0);
        _MessageDropDown_disposed.set(this, false);
        this.placeholder = (_a = data.placeholder) !== null && _a !== void 0 ? _a : "Make a selection";
        this.min_values = (_b = data.minValues) !== null && _b !== void 0 ? _b : 0;
        this.max_values = (_c = data.maxValues) !== null && _c !== void 0 ? _c : 1;
        this.options = ((_d = data.options) !== null && _d !== void 0 ? _d : []).map((opt, index) => {
            opt.value = opt.value || String(index + 1);
            return opt;
        });
        let id = data.id || `ei:dd:${stuffs_1.randomString(16)}`;
        this.custom_id = id;
        __classPrivateFieldSet(this, _MessageDropDown_onUpdate, data.onUpdate, "f");
        if (typeof data.onUpdate == "function" ||
            (this.options.findIndex((opt) => (typeof opt.onSelect == "function")) != -1)) {
            __classPrivateFieldSet(this, _MessageDropDown_menuListener, (data) => {
                var _a;
                if (data.id != id)
                    return;
                if (typeof __classPrivateFieldGet(this, _MessageDropDown_onUpdate, "f") == "function")
                    __classPrivateFieldGet(this, _MessageDropDown_onUpdate, "f").call(this, data, this);
                (_a = data.values) === null || _a === void 0 ? void 0 : _a.forEach(value => {
                    let item = this.options.find(i => i.value == value);
                    if (typeof item.onSelect == "function")
                        item.onSelect(data, this);
                });
            }, "f");
            index_1.listeners.clickMenu.add(__classPrivateFieldGet(this, _MessageDropDown_menuListener, "f"));
        }
    }
    get disposed() {
        return __classPrivateFieldGet(this, _MessageDropDown_disposed, "f");
    }
    dispose() {
        if (__classPrivateFieldGet(this, _MessageDropDown_disposed, "f"))
            return false;
        index_1.listeners.clickMenu.delete(__classPrivateFieldGet(this, _MessageDropDown_menuListener, "f"));
        __classPrivateFieldSet(this, _MessageDropDown_disposed, true, "f");
        return true;
    }
}
exports.default = MessageDropDown;
_MessageDropDown_onUpdate = new WeakMap(), _MessageDropDown_menuListener = new WeakMap(), _MessageDropDown_disposed = new WeakMap();

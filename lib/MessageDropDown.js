"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const index_1 = require("./index");
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
class EasyMessageDropDown extends discord_js_1.MessageSelectMenu {
    constructor(data) {
        var _a, _b, _c, _d;
        super();
        this.disposed = false;
        this.placeholder = (_a = data.placeholder) !== null && _a !== void 0 ? _a : "Make a selection";
        this.minValues = (_b = data.minValues) !== null && _b !== void 0 ? _b : 0;
        this.maxValues = (_c = data.maxValues) !== null && _c !== void 0 ? _c : 1;
        this.options = ((_d = data.options) !== null && _d !== void 0 ? _d : []).map((opt, index) => {
            opt.value = opt.value || String(index + 1);
            return opt;
        });
        let id = data.id || `ei:dd:${makeid(16)}`;
        this.customId = id;
        this.onUpdate = data.onUpdate;
        if (typeof data.onUpdate == "function" ||
            (this.options.findIndex((opt) => (typeof opt.onSelect == "function")) != -1)) {
            this.menuListener = (data) => {
                var _a;
                // console.log("Got")
                //console.log(this)
                if (data.customId != id)
                    return;
                if (typeof this.onUpdate == "function")
                    this.onUpdate(data, this);
                (_a = data.values) === null || _a === void 0 ? void 0 : _a.forEach(value => {
                    let item = this.options.find(i => i.value == value);
                    if (typeof item.onSelect == "function")
                        item.onSelect(data, this);
                });
            };
            index_1.listeners.menus.add(this.menuListener);
        }
    }
    dispose() {
        if (this.disposed)
            return false;
        index_1.listeners.menus.delete(this.menuListener);
        this.disposed = true;
        return true;
    }
}
exports.default = EasyMessageDropDown;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const _1 = require(".");
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
class EasyMessageButton extends discord_js_1.MessageButton {
    constructor(data) {
        super();
        this.setStyle(data.style || "PRIMARY");
        // this.style = data.style || 1;
        this.label = data.label;
        this.disabled = Boolean(data.disabled);
        this.emoji = data.emoji || null;
        this.url = data.url;
        let id = data.id || `ei:b:${makeid(16)}`;
        this.customId = id;
        if (typeof data.onClick == "function") {
            this.onClick = data.onClick;
            this.buttonListener = (data) => {
                if (data.customId != id)
                    return;
                this.onClick(data, this);
            };
            _1.listeners.buttons.add(this.buttonListener);
        }
    }
}
exports.default = EasyMessageButton;

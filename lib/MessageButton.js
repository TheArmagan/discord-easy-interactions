"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const _1 = require(".");
const makeId_1 = __importDefault(require("./makeId"));
class EasyMessageButton extends discord_js_1.MessageButton {
    constructor(data) {
        super();
        this.setStyle(data.style || "PRIMARY");
        // this.style = data.style || 1;
        this.label = data.label;
        this.disabled = Boolean(data.disabled);
        this.emoji = data.emoji || null;
        this.url = data.url;
        let id = data.id || `ei:b:${(0, makeId_1.default)(16)}`;
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

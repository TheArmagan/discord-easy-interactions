"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageButton = exports.MessageDropDown = exports.registerClient = exports.listeners = void 0;
const discord_buttons_1 = require("discord-buttons");
const MessageDropDown_1 = __importDefault(require("./MessageDropDown"));
exports.MessageDropDown = MessageDropDown_1.default;
const MessageButton_1 = __importDefault(require("./MessageButton"));
exports.MessageButton = MessageButton_1.default;
const listeners = {
    clickMenu: new Set(),
    clickButton: new Set()
};
exports.listeners = listeners;
function registerClient(client) {
    if (client._easyInteractions)
        return false;
    client._easyInteractions = true;
    discord_buttons_1.multipleImport(client);
    client.on("clickMenu", (data) => {
        listeners.clickMenu.forEach((cb) => {
            cb(data);
        });
    });
    client.on("clickButton", (data) => {
        listeners.clickButton.forEach((cb) => {
            cb(data);
        });
    });
    return true;
}
exports.registerClient = registerClient;
exports.default = { listeners, registerClient, MessageDropDown: MessageDropDown_1.default, MessageButton: MessageButton_1.default };

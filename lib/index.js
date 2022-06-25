"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyMessageButton = exports.EasyMessageDropDown = exports.registerClient = exports.listeners = void 0;
const MessageButton_1 = __importDefault(require("./MessageButton"));
exports.EasyMessageButton = MessageButton_1.default;
const MessageDropDown_1 = __importDefault(require("./MessageDropDown"));
exports.EasyMessageDropDown = MessageDropDown_1.default;
exports.listeners = {
    buttons: new Set(),
    menus: new Set()
};
function registerClient(client) {
    client.on('interactionCreate', (interaction) => {
        if (interaction.isButton()) {
            exports.listeners.buttons.forEach((cb) => {
                cb(interaction);
            });
        }
        if (interaction.isSelectMenu()) {
            exports.listeners.menus.forEach((cb) => {
                cb(interaction);
            });
        }
    });
    return true;
}
exports.registerClient = registerClient;
exports.default = { listeners: exports.listeners };

import { MessageComponent } from "discord-buttons";
import { Client } from "discord.js";
import MessageDropDown from "./MessageDropDown";
import MessageButton from "./MessageButton";
declare const listeners: {
    clickMenu: Set<(data: MessageComponent) => any>;
    clickButton: Set<(data: MessageComponent) => any>;
};
declare function registerClient(client: Client): boolean;
export { listeners, registerClient, MessageDropDown, MessageButton };
declare const _default: {
    listeners: {
        clickMenu: Set<(data: MessageComponent) => any>;
        clickButton: Set<(data: MessageComponent) => any>;
    };
    registerClient: typeof registerClient;
    MessageDropDown: typeof MessageDropDown;
    MessageButton: typeof MessageButton;
};
export default _default;

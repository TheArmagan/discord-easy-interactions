import { ButtonInteraction, Client, SelectMenuInteraction } from "discord.js";
import EasyMessageButton from "./MessageButton";
import EasyMessageDropDown from "./MessageDropDown";
declare type MenuCallback = (data: SelectMenuInteraction) => void;
declare type ButtonCallback = (data: ButtonInteraction) => void;
export declare const listeners: {
    buttons: Set<ButtonCallback>;
    menus: Set<MenuCallback>;
};
declare function registerClient(client: Client): boolean;
declare const _default: {
    listeners: {
        buttons: Set<ButtonCallback>;
        menus: Set<MenuCallback>;
    };
};
export default _default;
export { registerClient, EasyMessageDropDown, EasyMessageButton };

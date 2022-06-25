import { APIPartialEmoji } from "discord-api-types/v10";
import { ButtonInteraction, MessageButton } from "discord.js";
interface MessageButtonConstructor {
    style?: "PRIMARY" | "SECONDARY" | "SUCCESS" | "DANGER" | "LINK";
    label: string;
    disabled?: boolean;
    emoji?: APIPartialEmoji;
    url?: string;
    id?: string;
    onClick?: (data: ButtonInteraction, menu: EasyMessageButton) => void;
}
export default class EasyMessageButton extends MessageButton {
    onClick?: (data: ButtonInteraction, menu: EasyMessageButton) => void;
    buttonListener?: (data: ButtonInteraction) => void;
    constructor(data: MessageButtonConstructor);
}
export {};

import { GuildButtonEmoji, MessageComponent, MessageButtonStyles } from "discord-buttons";
interface MessageButtonConstructor {
    style?: MessageButtonStyles;
    label: string;
    disabled?: boolean;
    emoji?: GuildButtonEmoji;
    url?: string;
    id?: string;
    onClick?: (data: MessageComponent, button: MessageButton) => any;
}
export default class MessageButton {
    #private;
    type: number;
    style: MessageButtonStyles;
    label: string;
    disabled: boolean;
    emoji?: GuildButtonEmoji;
    url?: string;
    custom_id: string;
    constructor(data: MessageButtonConstructor);
    get disposed(): boolean;
    dispose(): boolean;
}
export {};

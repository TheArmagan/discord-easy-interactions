import { GuildButtonEmoji, MessageComponent } from "discord-buttons";
interface MessageDropDownOption {
    description?: string;
    label: string;
    emoji?: string | GuildButtonEmoji;
    value?: string;
    onSelect?: (data: MessageComponent, dropdown: MessageDropDown) => void;
}
interface MessageDropDownConstructor {
    placeholder?: string;
    options?: MessageDropDownOption[];
    minValues?: number;
    maxValues?: number;
    onUpdate?: (data: MessageComponent, dropdown: MessageDropDown) => void;
    id?: string;
}
export default class MessageDropDown {
    #private;
    type: number;
    placeholder: string;
    min_values: number;
    max_values: number;
    custom_id: string;
    options: MessageDropDownOption[];
    constructor(data: MessageDropDownConstructor);
    get disposed(): boolean;
    dispose(): boolean;
}
export {};

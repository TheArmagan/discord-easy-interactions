import { MessageSelectMenu, MessageSelectOption, SelectMenuInteraction } from "discord.js";
interface SelectOption extends MessageSelectOption {
    onSelect?: (data: SelectMenuInteraction, menu: EasyMessageDropDown) => void;
}
interface EasyMessageDropDownConstructor {
    placeholder?: string;
    options?: SelectOption[];
    minValues?: number;
    maxValues?: number;
    onUpdate?: (data: SelectMenuInteraction, menu: EasyMessageDropDown) => void;
    id?: string;
}
export default class EasyMessageDropDown extends MessageSelectMenu {
    onUpdate?: (data: SelectMenuInteraction, menu: EasyMessageDropDown) => void;
    menuListener?: (data: SelectMenuInteraction) => void;
    disposed: boolean;
    constructor(data: EasyMessageDropDownConstructor);
    dispose(): boolean;
}
export {};

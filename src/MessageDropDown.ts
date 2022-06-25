import { Serializable } from "child_process";
import { MessageSelectMenu, MessageSelectOption, SelectMenuInteraction } from "discord.js";
import { MessageButtonStyles } from "discord.js/typings/enums";
import { listeners } from "./index";
import makeId from "./makeId";


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
  disposed: boolean = false;
  constructor(data: EasyMessageDropDownConstructor) {
    super();
    this.placeholder = data.placeholder ?? "Make a selection"
    this.minValues = data.minValues ?? 0;
    this.maxValues = data.maxValues ?? 1;
    this.options = (data.options ?? []).map((opt, index) => {
      opt.value = opt.value || String(index + 1);
      return opt;
    });

    let id = data.id || `ei:dd:${makeId(16)}`;
    this.customId = id;
    this.onUpdate = data.onUpdate;

    if (
      typeof data.onUpdate == "function" ||
      (this.options.findIndex((opt: SelectOption) => (typeof opt.onSelect == "function")) != -1)
    ) {
      this.menuListener = (data: SelectMenuInteraction) => {
        // console.log("Got")
        //console.log(this)
        if (data.customId != id) return;
        if (typeof this.onUpdate == "function") this.onUpdate(data, this);

        data.values?.forEach(value => {

          let item: SelectOption = this.options.find(i => i.value == value);
          if (typeof item.onSelect == "function") item.onSelect(data, this);
        });
      };
      listeners.menus.add(this.menuListener);
    }

  }

  dispose() {
    if (this.disposed) return false;
    listeners.menus.delete(this.menuListener);
    this.disposed = true;
    return true;
  }
}
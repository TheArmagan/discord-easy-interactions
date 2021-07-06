import { GuildButtonEmoji, MessageComponent } from "discord-buttons";
import { listeners } from "./index";

interface MessageDropDownOption {
  description?: string;
  label: string;
  emoji?: string | GuildButtonEmoji;
  value: string;
  onClick?: (data: MessageComponent) => void;
}

interface MessageDropDownConstructor {
  placeholder?: string;
  items?: MessageDropDownOption[];
  minValues?: number;
  maxValues?: number;
  onUpdate?: (data: MessageComponent) => void;
  id?: string;
}


export class MessageDropDown {
  public type = 3;
  public placeholder = "";
  public min_values = 1;
  public max_values = 1;
  public custom_id = "";
  public options: MessageDropDownOption[] = [];
  #onUpdate: (data: MessageComponent) => any;
  #menuListener: (data: MessageComponent) => any;
  #disposed = false;

  constructor(data: MessageDropDownConstructor) {
    this.placeholder = data.placeholder ?? "Make a selection"
    this.min_values = data.minValues ?? 0;
    this.max_values = data.maxValues ?? 1;
    this.options = data.items ?? []

    let id = data.id || `ei:${Math.round((Math.random() * 281474976710655)).toString(36)}`;
    this.custom_id = id;
    this.#onUpdate = data.onUpdate;

    this.#menuListener = (data) => {
      if (data.id != id) return;

      if (typeof this.#onUpdate == "function") this.#onUpdate(data);
      data.values?.forEach(value => {
        let item = this.options.find(i => i.value == value);
        if (typeof item.onClick == "function") item.onClick(data);
      });
    };
    listeners.clickMenu.add(this.#menuListener);
  }

  get disposed() {
    return this.#disposed;
  }

  dispose() {
    if (this.#disposed) return false;
    listeners.clickMenu.delete(this.#menuListener);
    this.#disposed = true;
    return true;
  }
}
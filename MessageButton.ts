import { GuildButtonEmoji, MessageComponent, MessageButtonStyles } from "discord-buttons";
import { listeners } from ".";

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

  public type = 2;
  public style: MessageButtonStyles;
  public label: string;
  public disabled: boolean = false;
  public emoji?: GuildButtonEmoji;
  public url?: string;
  public custom_id: string;
  #onClick: (data: MessageComponent, button: MessageButton) => any;
  #buttonListener: (data: MessageComponent) => any;
  #disposed = false;
  constructor(data: MessageButtonConstructor) {
    this.style = data.style || 1;
    this.label = data.label;
    this.disabled = Boolean(data.disabled);
    this.emoji = data.emoji || null;
    this.url = data.url;
    
    let id = data.id || `ei:b:${Math.round((Math.random() * 281474976710655)).toString(36)}`;
    this.custom_id = id;

    this.#onClick = data.onClick;
    this.#buttonListener = (data) => {
      if (data.id != id) return;
      if (typeof this.#onClick == "function") this.#onClick(data, this);
    }
    listeners.clickButton.add(this.#buttonListener);
  }

  get disposed() {
    return this.#disposed;
  }

  dispose() {
    if (this.#disposed) return false;
    listeners.clickButton.delete(this.#buttonListener);
    this.#disposed = true;
    return true;
  }
}
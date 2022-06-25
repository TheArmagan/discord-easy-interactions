import { APIPartialEmoji } from "discord-api-types/v10";
import { ButtonInteraction, GuildEmoji, MessageButton } from "discord.js";
import { MessageButtonStyles } from "discord.js/typings/enums";
import { listeners } from ".";
import makeId from "./makeId";

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
   constructor(data: MessageButtonConstructor) {
      super();
      this.setStyle(data.style || "PRIMARY")
     // this.style = data.style || 1;
      this.label = data.label;
      this.disabled = Boolean(data.disabled);
      this.emoji = data.emoji || null;
      this.url = data.url;
      
      let id = data.id || `ei:b:${makeId(16)}`;
      this.customId = id;
  
      if (typeof data.onClick == "function") {
        this.onClick = data.onClick;
        this.buttonListener = (data) => {
          if (data.customId != id) return;
          this.onClick(data, this);
        }
        listeners.buttons.add(this.buttonListener);
      }
   }
}
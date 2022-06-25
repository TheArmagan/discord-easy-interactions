import { ButtonInteraction, Client, SelectMenuInteraction } from "discord.js"
import EasyMessageButton from "./MessageButton";
import EasyMessageDropDown from "./MessageDropDown";
type MenuCallback = (data: SelectMenuInteraction) => void;
type ButtonCallback = (data: ButtonInteraction) => void;
export const listeners = {
  buttons: new Set<ButtonCallback>(),
  menus: new Set<MenuCallback>()
}
function registerClient(client: Client) {
  client.on('interactionCreate', (interaction) => {
    if (interaction.isButton()) {
      listeners.buttons.forEach((cb) => {
        cb(interaction);
      });
    }
    if (interaction.isSelectMenu()) {
      listeners.menus.forEach((cb) => {
        cb(interaction);
      });
    }
  })
  return true;
}

export default { listeners }
export { registerClient, EasyMessageDropDown, EasyMessageButton }
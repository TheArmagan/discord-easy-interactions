import { MessageComponent, multipleImport } from "discord-buttons";
import { Client } from "discord.js";

export const listeners = {
  clickMenu: new Set<(data: MessageComponent) => any>(),
  clickButton: new Set<(data: MessageComponent) => any>()
};
export function registerClient(client: Client) {
  if ((client as any)._easyInteractions) return false;

  (client as any)._easyInteractions = true;
  multipleImport(client);

  client.on("clickMenu", (data) => {
    listeners.clickMenu.forEach((cb) => {
      cb(data);
    });
  });

  client.on("clickButton", (data) => {
    listeners.clickButton.forEach((cb) => {
      cb(data);
    });
  });

  return true;
}
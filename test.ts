import { registerClient } from ".";
import * as Discord from "discord.js";
import { MessageDropDown } from "./MessageDropDown";


const client = new Discord.Client();
registerClient(client);

client.on("message", (msg) => {
  if (msg.cleanContent == "eiyarr") {
    let inter = new MessageDropDown({
      onUpdate(data) {
        data.reply.defer(false);
      },
      placeholder: "Yarrawq",
      items: [
        {
          label: "WOW",
          value: "wow",
          description: "WOOOooOoOoOoOoOOoOoOoOOOoOO",
          emoji: "😍",
          onClick(data) {
            console.log("woo")
          }
        }
      ]
    });
    msg.reply("hıoi", inter as any);
    console.log(inter)
  }
})
console.log("woooooooooooo")
client.login("-")
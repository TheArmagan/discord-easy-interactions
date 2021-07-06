import EasyInteractions from "./src";
import * as Discord from "discord.js";


const client = new Discord.Client();
EasyInteractions.registerClient(client);



client.on("message", (msg) => {
  if (msg.cleanContent == "eiyarr") {
    let inter = new EasyInteractions.MessageDropDown({
      onUpdate(data) {
        data.reply.defer(false);
      },
      placeholder: "WOOO",
      options: [
        {
          label: "1",
          value: "1",
          emoji: "😍",
          onSelect(data, dd) {
            console.log("1")
            data.message.edit("😍");
          }
        },
        {
          label: "2",
          value: "2",
          emoji: "😂",
          onSelect(data, dd) {
            console.log("1");
            data.message.edit("😂");
          }
        },
        {
          label: "3",
          value: "3",
          emoji: "💥",
          onSelect(data, dd) {
            data.message.edit("💥 disposed");
            dd.dispose();
          }
        }
      ]
    });
    msg.reply("hıoi", inter as any);
    console.log(inter)
  } else if (msg.cleanContent == "eiyarr2") {
    let i = 0;
    let inter = new EasyInteractions.MessageButton({
      label: "Yarr2",
      onClick(data, dd) {
        dd.label = String(++i);
        console.log("aaaa");
        if (i > 10) {
          data.message.edit("woowee", null);
        } else {
          data.message.edit("woo", dd as any);
        }
        data.reply.defer(true);
      }
    })
    msg.reply("hıoi2", inter as any);
    console.log(inter)
  }
})
console.log("woooooooooooo")
client.login("ODI0MjEwMTMyMzUwMDA5MzY2.YFsDgA.2ypNsOU_un0dt6YIbaAcX52WhyA")
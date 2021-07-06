const Discord = require("discord.js");
const EasyInteractions = require(".");

const client = new Discord.Client();
EasyInteractions.registerClient(client);

client.on("ready", () => {
  new EasyInteractions.MessageButton({
    id: "yarrak",
    onClick(data) {
      data.reply.defer(true);
      console.log("yarrak");
    }
  })
})

client.on("message", (msg) => {
  if (msg.cleanContent == "eiyarr") {
    let inter = new EasyInteractions.MessageDropDown({
      onUpdate(data) {
        data.reply.defer(true);
      },
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
            data.message.edit("💥 disposed", null);
            dd.dispose();
          }
        }
      ]
    });
    msg.reply("hıoi", inter);
    console.log(inter)
  } else if (msg.cleanContent == "eiyarr2") {
    let inter = new EasyInteractions.MessageButton({
      label: "0",
      id: "yarrak"
    })
    msg.reply("hıoi2", inter);
    console.log(inter)
  }
})
console.log("woooooooooooo")
client.login("ODI0MjEwMTMyMzUwMDA5MzY2.YFsDgA.2ypNsOU_un0dt6YIbaAcX52WhyA")
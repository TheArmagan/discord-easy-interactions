const Discord = require("discord.js");
const EasyInteractions = require(".");

const client = new Discord.Client();
EasyInteractions.registerClient(client);

client.on("message", (msg) => {
  if (msg.cleanContent == "eiyarr") {
    let inter = new EasyInteractions.MessageDropDown({
      onUpdate(data) {
        data.reply.defer(true);
      },
      options: [
        {
          label: "Wow",
          value: "1",
          emoji: "😍",
          onSelect(data, dd) {
            console.log("1")
            data.message.edit("😍");
          }
        },
        {
          label: "Cringe",
          value: "2",
          emoji: "😂",
          onSelect(data, dd) {
            console.log("1");
            data.message.edit("😂");
          }
        },
        {
          label: "Dispose",
          value: "3",
          emoji: "💥",
          onSelect(data, dd) {
            data.message.edit("💥 disposed", null);
            dd.dispose();
          }
        }
      ]
    });
    channel.send("HI!", inter);
    console.log(inter)
  } else if (msg.cleanContent == "eiyarr2") {
    let num = 0;
    let inter = new EasyInteractions.MessageButton({
      label: `${++num}+1`,
      onClick(data, b) {
        b.label = `${++num}+1`;
        data.message.edit("Hello!", b);
        data.reply.defer(true);
      }
    });
    msg.reply("Hello!", inter);
    console.log(inter)
  }
})
console.log("woooooooooooo")
client.login("")
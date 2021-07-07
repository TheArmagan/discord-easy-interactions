const Discord = require("discord.js");
const EasyInteractions = require(".");

const client = new Discord.Client();
EasyInteractions.registerClient(client);

client.on("message", (msg) => {
  if (msg.cleanContent == "eiyarr") {
    let inter = new EasyInteractions.MessageDropDown({
      onUpdate(data) {
        data.reply.defer(true);
        data.values[0] 
      },
      options: [
        {
          label: "Wow",
          emoji: "😍",
          onSelect(data, dd) {
            console.log("1")
            data.message.edit("😍");
          }
        },
        {
          label: "Cringe",
          emoji: "😂",
          onSelect(data, dd) {
            console.log("1");
            data.message.edit("😂");
          }
        },
        {
          label: "Dispose",
          emoji: "💥",
          onSelect(data, dd) {
            data.message.edit("💥 disposed", null);
            dd.dispose();
          }
        }
      ]
    });
    msg.channel.send("HI!", inter);
    console.log(inter)
  } else if (msg.cleanContent == "eiyarr2") {
    let num = 0;
    let inter = new EasyInteractions.MessageButton({
      style: 1, // 
      emoji: "❤", // Optional
      label: `${++num}+1`, // Required
      onClick(data, b) {
        data.clicker.user.tag
      }
    });
    msg.channel.send("Hello!", inter);
    console.log(inter)
  }
})
console.log("woooooooooooo")
client.login("")
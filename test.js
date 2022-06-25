const Discord = require("discord.js");
const EasyInteractions = require(".");
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({ intents:allIntents });
EasyInteractions.registerClient(client);

client.on("message", (msg) => {
  if (msg.cleanContent == "eiyarr") {
    let inter = new EasyInteractions.EasyMessageDropDown({
      onUpdate(data) {
        //console.log(data.deferReply())
        data.deferReply(true);
       // data.values[0] 
      },
      options: [
        {
          label: "Wow",
          emoji: null,
          onSelect(data, dd) {
            console.log("1")
            data.editReply("😍");
          }
        },
        {
          label: "Cringe",
          emoji: {
            name: "😂"
          },
          onSelect(data, dd) {
            console.log("1");
            data.editReply("😂");
          }
        },
        {
          label: "Dispose",
          emoji: null,
          onSelect(data, dd) {
            //data.editReply("💥 disposed", null);
            dd.dispose();
          }
        }
      ]
    });
    console.log(inter)
    
    const row = new Discord.MessageActionRow().addComponents(inter)
    msg.channel.send({ content: 'Pong!', components: [row] });
    console.log(inter)
  } else if (msg.cleanContent == "eiyarr2") {
    let num = 0;
    let inter = new EasyInteractions.EasyMessageButton({
      style: 1, // 
      emoji: {
        name: "❤"
      }, // Optional
      label: `${++num}+1`, // Required
      onClick(data, b) {
        console.log(data.clicker.user.tag)
      }
    });
    const row = new Discord.MessageActionRow().addComponents(inter)
    msg.channel.send({ content: 'Pong!', components: [row] });
    console.log(inter)
  }
})

console.log("woooooooooooo")
client.login()

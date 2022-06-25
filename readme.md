# Discord Easy Interactions (1.0.4)
> 💥 Easy to use discord interactions with callback system. onClick, onSelect etc.

## Install

```js
npm install discord-easy-interactions
// OR
yarn add discord-easy-interactions
```

## Examples

> First things first you need to add listeners for the events so you do like this.
```js
const EasyInteractions = require("discord-easy-interactions");
// Client is your discord.js client.
EasyInteractions.registerClient(client);
```

### Button Example
```js
const EasyInteractions = require("discord-easy-interactions");

let inter = new EasyInteractions.EasyMessageButton({
      style: 1, // 
      emoji: {
        name: "❤"
      }, // Optional
      label: `1+1`, // Required
      onClick(data, b) {
        console.log(data)
      }
    });
    const row = new Discord.MessageActionRow().addComponents(inter)
    msg.channel.send({ content: 'Pong!', components: [row] });
```

### DropDown Example
```js
const EasyInteractions = require("discord-easy-interactions");
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
    const row = new Discord.MessageActionRow().addComponents(inter)
    msg.channel.send({ content: 'Pong!', components: [row] });
```

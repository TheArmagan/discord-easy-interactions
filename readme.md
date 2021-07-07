# Discord Easy Interactions (1.0.1)
> 💥 Easy to use discord interactions with callback system. onClick, onSelect etc.

## Install

```js
npm install discord-easy-interactions
// OR
yarn add discord-easy-interactions
```

## Exaples

> First things first you need to add listeners for the events so you do like this.
```js
const EasyInteractions = require("discord-easy-interactions");
// Client is your discord.js client.
EasyInteractions.registerClient(client);
```

### Button Example
```js
const EasyInteractions = require("discord-easy-interactions");

let num = 0;
let inter = new EasyInteractions.MessageButton({
  label: `${++num}+1`,
  onClick(data, b) {
    b.label = `${++num}+1`;
    data.message.edit("Hello, make it 10!", b);
    data.reply.defer(true);
    if (num > 10) {
      b.dispose();
      data.message.edit("You made it!", null);
    }
  }
});
channel.send("Hello!", inter);
```

### DropDown Example
```js
const EasyInteractions = require("discord-easy-interactions");

let inter = new EasyInteractions.MessageDropDown({
  placeholder: "Love or cringe!",
  onUpdate(data) {
    // I am deferring the event so its do not says actions failed.
    data.reply.defer(true);
  },
  options: [
    {
      label: "Love",
      value: "1",
      emoji: "😍",
      onSelect(data, dd) {
        data.message.edit("😍");
      }
    },
    {
      label: "Cringe",
      value: "2",
      emoji: "😂",
      onSelect(data, dd) {
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
```
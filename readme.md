# Discord Easy Interactions (1.0.2)
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

let inter = new EasyInteractions.MessageButton({
  style: 1, // Optional, Options; 1 = Blurple, 2 = Gray, 3 = Green, 4 = Red, 5 = URL
  // url: "https://discord.com", // Required when type set to 5! Otherwise don't put it!
  emoji: "❤", // Optional
  disabled: false, // Optional
  label: `Click me!`, // Required
  // onClick function called every time someone click to button
  // First argument is data you can look everything on it using intellisense.
  // Second argument is Button itself.
  onClick(data, b) {
    console.log(`${data.clicker.user.tag} clicked to button!`);
  }
});
channel.send("Hello!", inter);
```

### DropDown Example
```js
const EasyInteractions = require("discord-easy-interactions");

let inter = new EasyInteractions.MessageDropDown({
  placeholder: "Love or cringe!", // Optional
  // onUpdate function called every time someone change selection on dropdown
  // First argument is data you can look everything on it using intellisense.
  // Second argument is DropDown itself.
  onUpdate(data, dd) {
    // I am deferring the event so its do not says actions failed.
    data.reply.defer(true);

    // List of all selected option values..
    console.log(data.values);
  },
  minValues: 0, // Optional - Minimum options to select.
  maxValues: 1, // Optional - Maximum options to select.
  options: [
    {
      label: "Love",
      value: "1", // Optional
      emoji: "😍", // Optional
      onSelect(data, dd) { // Optional - Arguments are same as onUpdate method.
        data.message.edit("😍");
      },
      description: "Love is cooler than cringe!" // // Optional
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
        // Don't forget the disposing teh listener.
        // It can create memory leaks later time..
        dd.dispose(); 
      }
    }
  ]
});
channel.send("HI!", inter);
```
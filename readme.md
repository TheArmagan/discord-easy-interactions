# Discord Easy Interactions
> 💥 Easy to use discord interactions with callback system. onClick etc.

> Gonna update the readme later.

## Exaples

### DropDown Example
```js
let inter = new EasyInteractions.MessageDropDown({
  placeholder: "Love or cringe!",
  onUpdate(data) {
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

### Button Example
```js
let num = 0;
let inter = new EasyInteractions.MessageButton({
  label: `${++num}+1`,
  onClick(data, b) {
    b.label = `${++num}+1`;
    data.message.edit("Hello, make it 10!", b);
    if (num > 10) {
      d.dispose();
      data.message.edit("You made it!", null);
    }
    data.reply.defer(true);
  }
});
channel.send("Hello!", inter);
```
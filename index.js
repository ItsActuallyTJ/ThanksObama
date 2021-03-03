const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;
const channel = bot.channels.cache.get(config.channel)
const prefix = config.prefix
const keep_alive = require('./keep_alive.js')

//Bot Initialization
bot.on('ready', () => {
  console.log('Bot Online')
})
bot.login(token)

//Get Args & Prefix
bot.on('message', async (msg) => {
  //if our message doesnt start with our defined prefix, dont go any further into function
  if(!msg.content.startsWith(prefix)) {
    return
  }
  //slices off prefix from our message, then trims extra whitespace, then returns our array of words from the message
  const args = msg.content.slice(prefix.length).trim().split(' ')
  const command = args.shift().toLowerCase()
  const args2 = msg.content.slice(prefix.length+command.length)

  //Thanks Obama
  if (command === "thanks" && msg.channel.id == config.channel) {
    if (msg.author.id == 739696338295586926) {
      const thanksObama = new Discord.MessageEmbed()
          .setAuthor(msg.author.username,msg.author.displayAvatarURL())
          .setDescription(`_no u._`+', ***Thanks Obama***')
          .setColor(0xffd000)
          .setTimestamp()

      msg.channel.send(thanksObama);
      msg.delete();
    } else {
    const thanksObama = new Discord.MessageEmbed()
        .setAuthor(msg.author.username,msg.author.displayAvatarURL())
        .setDescription(`_${args2}_`+', ***Thanks Obama***')
        .setColor(0xffd000)
        .setTimestamp()

    msg.channel.send(thanksObama);
    console.log(args2+', Thanks Obama');
    msg.delete();
    }
  }
})

const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "ping",
  category: "basic",
  description: "",
  run: async (client, message, args) => {
    const msg = await message.channel.send(`🏓 Pinging....`);


    const embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Pong !")
    .addField("Temps de reaction :", `${msg.createdTimestamp - message.createdTimestamp}ms`)
    .addField("API latence est de :", `${Math.round(bot.ping)}ms`)
    .setTimestamp()

    msg.edit(embed);
  }
};
const Discord = require('discord.js')
module.exports = {
  name: "github",
  category: "bot",
  description: "",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setAuthor("lolgame854#3470")
    .setColor("PURPLE")
    .setTitle("GitHub")
    .setURL('https://github.com/lolgame854/SourceCode')
    .setDescription("Voici le github d'un bot que j'ai créé. ^^")
    .setFooter("Eternity © 2019 Un problème ? Demandes à lolgame854#3470 !")
    message.channel.send(embed)
  }
};
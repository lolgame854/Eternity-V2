const Discord = require('discord.js')
module.exports = {
  name: "discord",
  category: "bot",
  description: "",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Serveur Discord")
    .setTitle("Rejoindre")
    .setURL('https://discord.gg/msF3hKk')
    .setDescription("Click sur rejoindre pour rejoindre le serveur discord !\n \nMarci si tu le fait.")
    .setFooter("Eternity © 2019 Un problème ? Demandes à lolgame854#3470 !")
    message.channel.send(embed)
  }
};
const Discord = require('discord.js')
module.exports = {
  name: "discord",
  category: "bot",
  description: "",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setAuthor("Serveur Discord")
    .setTitle("Rejoindre")
    .setDescription("Click sur rejoindre pour rejoindre le serveur discord !\n \nMarci si tu le fait.")
    .setFooter("Eternity © 2019 Un problème ? Demandes à lolgame854#3470 !")
  }
};
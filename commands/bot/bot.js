const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "bot",
  category: "bot",
  description: "",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .addField(":upside_down: Nom :", bot.user.username)
    .addField(":gear: Commandes :", config.commande)
    .addField(":sunglasses: Nombre de serveur ou je suis :", bot.guilds.size)
    .addField(":tools: Mon createur :", "lolgame854#3470")
    .addField(":page_facing_up: Version du bot :", config.version)
    .setFooter("Eternity © 2019 Un problème ? Demandes à lolgame854#3470 !")
    message.channel.send(embed)
  }
};
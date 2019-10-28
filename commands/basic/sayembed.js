const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "sayembed",
  category: "basic",
  description: "",
  run: async (client, message, args) => {
    const args1 = message.content.trim().split(/ +/g)
    const repons = args1.slice(1).join(" ")

    const help = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("Help commande")
    .setDescription("Commande : ``[prefix + sayembed]`` + ``[message]``")
    .setFooter("Eternity © 2019 | by lolgame854")

    if(!args[0])
    return message.channel.send(help)

    const embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(repons)
    .setTimestamp()
    message.delete()
    message.channel.send(embed)
  }
};
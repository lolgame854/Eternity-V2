const Discord = require('discord.js')
const bot = new Discord.Client()

module.exports = {
    name: "serverinfo",
    category: "info",
    description: "",
    run: async (client, message, args) => {
        const embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setAuthor(`Serveur info - ${message.guild.name}`)
        .addField("Nom :", message.guild.name)
        .addField("ID du serveur :", message.guild.id)
        .addField("Propriétaire :", message.guild.owner)
        .addField("Nombre de joueur :", message.guild.memberCount)
        .addField("Nombre de role :", message.guild.roles.size)
        .setFooter("Eternity © 2019 | by lolgame854")
        message.channel.send(embed)
    }
  };
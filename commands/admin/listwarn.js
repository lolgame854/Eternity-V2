const Discord = require('discord.js')
const fs = require("fs")
const warns = JSON.parse(fs.readFileSync('../../warns.json'))
module.exports = {
  name: "listwarn",
  category: "admin",
  description: "",
  run: async (client, message, args) => {
    const noperm = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("No permission")
    .setDescription("Vous n'avez pas la permission.")
    .setFooter("Eternity © 2019 | by lolgame854")
      const embed = new Discord.RichEmbed()
      .setColor("PURPLE")
      .setAuthor("Warn")
      .setDescription("Veuillez mentionner un membre")
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(noperm)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(embed)
        let embed2 = new Discord.RichEmbed()
        .setColor("PURPLE")
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .addField('10 derniers warns', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
            .setTimestamp()
        message.channel.send(embed2)
  }
};
const Discord = require('discord.js')
const fs = require("fs")
module.exports = {
  name: "warn",
  category: "admin",
  description: "",
  run: async (client, message, args) => {
    const warns = JSON.parse(fs.readFileSync('../../warns.json'))
    const noperm = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("No permission")
    .setDescription("Vous n'avez pas la permission.")
    .setFooter("Eternity © 2019 | by lolgame854")
      const embed = new Discord.RichEmbed()
      .setColor("PURPLE")
      .setAuthor("Warn")
      .setDescription("Veuillez mentionner un membre")

      const embed2 = new Discord.RichEmbed()
      .setColor("PURPLE")
      .setAuthor("Warn")
      .setDescription("Veuillez indiquer une raison")
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(noperm)
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(embed)
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send(embed2)
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        const ewar = new Discord.RichEmbed()
      .setColor("PURPLE")
      .setAuthor("Warn")
      .setDescription(member + " a été warn pour " + reason + " :white_check_mark:")
      .setTimestamp()
        message.channel.send(ewar)
  }
};
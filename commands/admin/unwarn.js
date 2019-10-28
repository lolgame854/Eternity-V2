const Discord = require('discord.js')
const fs = require("fs")
module.exports = {
  name: "unwarn",
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
      .setDescription("Vous ne pouvez pas unwarn ce membre.")

      const embed2 = new Discord.RichEmbed()
      .setColor("PURPLE")
      .setAuthor("Warn")
      .setDescription("Ce membre n'a actuellement aucun warns.")

      const embed3 = new Discord.RichEmbed()
      .setColor("PURPLE")
      .setAuthor("Warn")
      .setDescription("Je ne pas unwarn ce membre.")

      let warns = JSON.parse(fs.readFileSync('./warns.json'))
    let member = message.mentions.members.first()
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(noperm)
    if(!member) return message.channel.send("Membre introuvable")
    if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(embed)
    if(!member.manageable) return message.channel.send(embed3)
    if(!warns[member.id] || !warns[member.id].length) return message.channel.send(embed2)
    warns[member.id].shift()
    fs.writeFileSync('./warns.json', JSON.stringify(warns))
    const embed4 = new Discord.RichEmbed()
      .setColor("PURPLE")
      .setAuthor("Warn")
      .setDescription("Le dernier warn de " + member + " a été retiré :white_check_mark:")
      .setTimestamp()
    message.channel.send(embed4)
  }
};
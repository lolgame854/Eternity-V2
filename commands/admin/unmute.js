const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "mute",
  category: "admin",
  description: "",
  run: async (client, message, args) => {
    const noperm = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("No permission")
    .setDescription("Vous n'avez pas la permission.")
    .setFooter("Eternity © 2019 | by lolgame854")

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(noperm).then(m => m.delete(3000))

    let member = message.mentions.members.first();

    const embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Unmute")
    .setDescription("L'utilisateur n'existe pas.")

    const embeb2 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Unmute")
    .setDescription("Vous ne pouvez pas unmute ce membre.")

    const embed3 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Unmute")
    .setDescription("Je ne peux pas unmute ce membre.")

    if (!member) return message.channel.send(embed).then(m => m.delete(3000))

    const embed4 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("Unmute")
    .setDescription(`${member} à bien été unmute ! :white_check_mark:`)
    .setFooter("Eternity © 2019 | by lolgame854")

    if (
      member.highestRole.calculatedPosition >=
        message.member.highestRole.calculatedPosition &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(embed2).then(m => m.delete(3000))
    if (!member.manageable)
      return message.channel.send(embed3).then(m => m.delete(3000))
    let muterole = message.guild.roles.find(role => role.name === "Muted");
    if (muterole && member.roles.has(muterole.id)) member.removeRole(muterole);
    message.channel.send(embed4);
  }
};
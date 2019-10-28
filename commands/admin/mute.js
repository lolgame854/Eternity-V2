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
    .setAuthor("Mute")
    .setColor("PURPLE")
    .setDescription("L'utilisateur n'existe pas.")

    const embeb2 = new Discord.RichEmbed()
    .setAuthor("Mute")
    .setColor("PURPLE")
    .setDescription("Vous ne pouvez pas mute ce membre.")

    const embed3 = new Discord.RichEmbed()
    .setAuthor("Mute")
    .setColor("PURPLE")
    .setDescription("Je ne peux pas mute ce membre.")


    if (!member) return message.channel.send(embed).then(m => m.delete(3000))

    const muted1 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("Muted")
    .setDescription(`${member} à bien été muté ! :white_check_mark:`)
    .setFooter("Eternity © 2019 | by lolgame854")

    if (
      member.highestRole.calculatedPosition >=
        message.member.highestRole.calculatedPosition &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(embeb2).then(m => m.delete(3000))
    if (!member.manageable)
      return message.channel.send(embed3).then(m => m.delete(3000))
    let muterole = message.guild.roles.find(role => role.name === "Muted");
    if (muterole) {
      member.addRole(muterole);
      message.channel.send(muted1);
    } else {
      message.guild
        .createRole({ name: "Muted", permissions: 0 })
        .then(function(role) {
          message.guild.channels
            .filter(channel => channel.type === "text")
            .forEach(function(channel) {
              channel.overwritePermissions(role, {
                SEND_MESSAGES: false
              });
            });
          member.addRole(role);
          message.channel.send(muted1);
        });
      }
  }
};
const Discord = require('discord.js')
module.exports = {
  name: "annonce",
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
    .setTitle("Annonce")
    .setDescription("Veuillez mettre un message a la suite")
    const args1 = message.content.trim().split(/ +/g)
    const saymsg = args1.slice(1).join(" ")

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(noperm);
  if(!args[0]) return message.channel.send(embed);
  message.guild.members.forEach(member => {
    member.send(`Annonce envoyer par : ${message.author.tag} Message : ${saymsg}`).catch(e => {});
  })
  }
};
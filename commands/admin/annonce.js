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
    const embed2 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("Annonce")
    .setDescription("Votre message a bien été envoyer !")
    const args1 = message.content.trim().split(/ +/g)
    const saymsg = args1.slice(1).join(" ")

    message.delete()
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(noperm).then(m => m.delete(2000));
  if(!args[0]) return message.channel.send(embed);
  message.chanel.send(embed2).then(m => m.delte(2000))
  message.guild.members.forEach(member => {
    member.send(`Annonce envoyer par : ${message.author.tag}\n \n${saymsg}`).catch(e => {});
  })
  }
};
const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "clear",
  category: "admin",
  description: "",
  run: async (client, message, args) => {
    const noperm = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("No permission")
    .setDescription("Vous n'avez pas la permission.")
    .setFooter("Eternity © 2019 | by lolgame854")

    const help = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("Help commande")
    .setDescription("Commande : ``[prefix + clear]`` + ``[Nombre de messages a supprimé.\n(Min 1) (Max 99) ]``")
    .setFooter("Eternity © 2019 | by lolgame854")

    if (!message.guild) return;
    let args1 = message.content.trim().split(/ +/g);
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(noperm)

    let count = parseInt(args1[1]);
    if (!count)
      return message.channel.send(help)
    if (isNaN(count))
      return message.channel.send(help);
    if (count < 1 || count > 99)
      return message.channel.send(help)
    message.channel.bulkDelete(count + 1, true);
    const cl = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("Clear message")
    .setDescription(`Vous avez supprimé **${args1[1]}** messages !`)
    message.channel.send(cl).then(m => m.delete(2000))
  }
};
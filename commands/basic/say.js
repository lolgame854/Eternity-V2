const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "say",
  category: "basic",
  description: "",
  run: async (client, message, args) => {
    const args1 = message.content.trim().split(/ +/g)
    const repons = args1.slice(1).join(" ")
    
    const help = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("Help commande")
    .setDescription("Commande : ``[prefix + say]`` + ``[message]``")
    .setFooter("Eternity © 2019 | by lolgame854")

    if(!args[0])
    return message.channel.send(help)

    message.delete();

    const roleColor = message.guild.me.highestRole.hexColor;

    if (args[0].toLowerCase() === "embed") {
      const embed = new RichEmbed()
        .setDescription(args.slice(1).join(" "))
        .setColor(roleColor === "#000000" ? "#ffffff" : roleColorv);

      message.channel.send(embed);
    } else {
      message.channel.send(args.join(" "));
    }
  }
};
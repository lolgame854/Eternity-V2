const Discord = require('discord.js')
module.exports = {
  name: "avatar",
  category: "fun",
  description: "",
  run: async (client, message, args) => {
    const member = getMember(message, args.join(" "));

    const embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor(`Avatar de ${member.user.username}`)
    .setImage(member.user.displayAvatarURL)
    .setTimestamp()
    message.channel.send(embed)
  }
};
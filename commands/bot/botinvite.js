const Discord = require('discord.js')
module.exports = {
  name: "botinvite",
  category: "bot",
  description: "",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setAuthor(client.user.username)
    .setTitle("Inviter Eternity")
    .setDescription("Pour inviter le bot click sur ``Inviter Eternity``")
    .setColor("PURPLE")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=635152279997251586&scope=bot&permissions=8")
    .setThumbnail(client.user.displayAvatarURL)
    .setTimestamp()
    .setFooter("Eternity © 2019 Un problème ? Demandes à lolgame854#3470 !")
    let msg = await message.channel.send(embed)
      await msg.react('👍')
  }
};
const Discord = require('discord.js')
module.exports = {
  name: "stop",
  category: "music",
  description: "",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setAuthor("Music")
    .setColor("PURPLE")
    .setDescription(`Vous devez vous connecter a un salon vocal !`)
    const embed2 = new Discord.RichEmbed()
    .setAuthor("Music")
    .setColor("PURPLE")
    .setDescription(`Le bot n'est pas connecter a un salon vocal !`)
    const embed3 = new Discord.RichEmbed()
    .setAuthor("Music")
    .setColor("PURPLE")
    .setDescription(`Vous n'êtes pas dans le même salon !`)

    if(!message.member.voiceChannel)
        return message.channel.send(embed)
        if(!message.guild.me.voiceChannel)
        return message.channel.send(embed2)
        if(message.guild.me.voiceChannelID !== message.member.voiceChannelID)
        return message.channel.send(embed3)
        message.guild.me.voiceChannel.leave();
        message.delete();    
  }
};
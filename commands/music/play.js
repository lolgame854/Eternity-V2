const Discord = require('discord.js')
const ytdl = require('ytdl-core')
module.exports = {
  name: "play",
  category: "music",
  description: "",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setAuthor("Music")
    .setColor("PURPLE")
    .setDescription("Vous devez vous connecter a un salon vocal !")

    const embed2 = new Discord.RichEmbed()
    .setAuthor("Music")
    .setColor("PURPLE")
    .setDescription("Je suis déjà connecter a un salon vocal !")

    const embed3 = new Discord.RichEmbed()
    .setAuthor("Music")
    .setColor("PURPLE")
    .setDescription("Merci de mettre un lien youtube !")

    const embed4 = new Discord.RichEmbed()
    .setAuthor("Music")
    .setColor("PURPLE")
    .setDescription("Lien youtube invalide !")


    if(!message.member.voiceChannel)
    return message.channel.send(embed)
    if(message.guild.me.voiceChannel)
    return message.channel.send(embed2)
    if(!args[0])
    return message.channel.send(embed3)
    const validate = await ytdl.validateURL(args[0])
    if(!validate)return message.channel.send(embed4)
    const info = await ytdl.getInfo(args[0]);
    const connection = await message.member.voiceChannel.join()
    const dispacher = await connection.playStream(
        ytdl(args[0], { filter: 'audioonly'})
        );
        const embed5 = new Discord.RichEmbed()
    .setAuthor("Music")
    .setColor("PURPLE")
    .setDescription(`**Musique ajoutée :** ${info.title}`)
        message.channel.send(embed5)
  }
};
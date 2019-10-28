const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "math",
  category: "fun",
  description: "",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Math")
    .setDescription("Veuillez entrez des chiffres.")

    const embed2 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Math")
    .setDescription("Vous devez entrez des chiffres valides.")
     
    if(!args[0]) return message.channel.send(embed)
    let cacul;

    try{
        cacul = math.eval(args.join(' '));
    }catch (e) {
        return message.channel.send(embed2)
    }

    const mathlol = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Math")
    .addField("Chiffres", args.join(' '))
    .addField("Résultat", cacul)

    message.channel.send(mathlol)
  }
};
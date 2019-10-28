const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "chien",
  category: "fun",
  description: "",
  run: async (client, message, args) => {
    let msg = await message.channel.send("Génération...");

  let { body } = await superagent.get(
    "https://dog.ceo/api/breeds/image/random"
  );
  if (!{ body }) return message.channel.send("test");

  let cEmbed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Eternity - Photo de chien")
    .setImage(body.message)
    .setFooter("Eternity © 2019 Un problème ? Demandes à lolgame854#3470 !")

  message.channel.send({ embed: cEmbed });

  msg.delete();
  }
};
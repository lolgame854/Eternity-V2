const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "chat",
  category: "fun",
  description: "",
  run: async (client, message, args) => {
    let msg = await message.channel.send("Génération...");

  let { body } = await superagent.get("http://aws.random.cat/meow");
  if (!{ body }) return message.channel.send("Bruh");

  let cEmbed = new Discord.RichEmbed()
  .setColor("PURPLE")
  .setAuthor("Eternity - Photo de chat")
  .setImage(body.file)
  .setFooter("Eternity © 2019 Un problème ? Demandes à lolgame854#3470 !")

  message.channel.send({ embed: cEmbed });

  msg.delete();
  }
};
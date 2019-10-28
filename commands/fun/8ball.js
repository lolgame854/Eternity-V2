const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "8ball",
  category: "fun",
  description: "",
  run: async (client, message, args) => {
    const embed1 = new Discord.RichEmbed()
  .setColor("PURPLE")
  .setDescription("Veuillez poser une question.")
    
  if (!message.guild) return;
  let args1 = message.content.trim().split(/ +/g);

  if (!args1[1])
    return message.channel.send(embed1);
  let answers = [
    "Non ❌",
    "Je sais pas... 🤷",
    "Bien sur ❗",
    "Pas du tout...🤦",
    "Bien sur que non ❌",
    "Bien sur que oui ✅"
  ];
  let question = args1.slice(1).join(" ");
  let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor("PURPLE")
    .addField("Question :", question)
    .addField(
      "Réponse :",
      answers[Math.floor(Math.random() * answers.length)]
    );
  message.channel.send(embed);
  }
};

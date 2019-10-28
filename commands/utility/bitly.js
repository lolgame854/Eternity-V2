const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "bitly",
  category: "utility",
  description: "",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Bitly")
    .setDescription("Veulliez mettre un lien.")
    if (!args.length) {
		return message.channel.send(embed);
	}
const url = args.join(" ");
message.delete().catch(O_o=>{}); 
const chauncey = require('chauncey');
chauncey({
  url: url,
  token: 'ed9696a1b80115f5748c8e61986f36572660affa',
  done: (error, result) => {
    if (error){
return console.log(error.message);
}
    console.log(result);
    const embed2 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Bitly")
    .addField("Votre lien original :", url)
    .addField("Votre lien racourci :", result)
    .setFooter("Eternity © 2019 | by lolgame854")
    message.channel.send(embed2);
  }
});
  }
};
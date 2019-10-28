const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "checkweb",
  category: "utility",
  description: "",
  run: async (client, message, args) => {
    message.delete()
    const embed3 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("CheckWeb")
    .setDescription("Veuillez indiquer l'url du site.")

    const embed4 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("CheckWeb")
    .setDescription("Veuillez indiquer le nom du site.")

    const embed5 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("CheckWeb")
    .setDescription("Veuillez attendre....")

    const achecksi = args.join(" ");
const namec = args[0];
const namec2 = args[1]
message.delete().catch(O_o=>{}); 
if (!args[0]) {
		return message.channel.send(embed3);
    }
if(!args[1])
return message.channel.send(embed4)
const info2 = await message.channel.send(embed5);
var moment2 = require('moment');
moment2.locale('fr'); 
const timesiw = moment2().format('LTS')
var Request = require("request");
const before1 = Date.now();
Request.get(achecksi, (error, response, body) => {
    if(error) {
       const embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .addField("Nom du site :", namec2)
        .addField("Url du site :", namec)
        .addField("Status :", "Offline :red_circle:")
        .addField("MS :", "``-/-``")
        .addField("Mise a jour a :", timesiw)
        .setTimestamp()
        .setFooter("Eternity © 2019 | by lolgame854")
        return info2.edit(embed)
   }
const after1 = Date.now() - before1
const embed2 = new Discord.RichEmbed()
        .setColor("PURPLE")
        .addField("Nom du site :", namec2)
        .addField("Url du site :", namec)
        .addField("Status :", "Online :white_check_mark:")
        .addField("MS :", `${after1}`)
        .addField("Mise a jour a :", timesiw)
        .setTimestamp()
        .setFooter("Eternity © 2019 | by lolgame854")
        return info2.edit(embed2)
});
  }
};
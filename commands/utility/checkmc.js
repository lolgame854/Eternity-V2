const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "checkmc",
  category: "fun",
  description: "",
  run: async (client, message, args) => {
    message.delete()
    const embed3 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("CheckMC")
    .setDescription("Veuillez attendre....")

    const embed4 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("CheckMC")
    .setDescription("Merci d'indiquer l'adresse et le port du serveur minecraft en question.")

    const embed5 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("CheckMC")
    .setDescription("Une erreur c'est produite...")
    const pinger = require('minecraft-pinger')

    var moment = require('moment');
    
    moment.locale('fr'); 
    
    const timeswm = moment().format('LTS')
    
    const checkmc = args[0];
    
    const namemc = args[2];
    
    const portmc = args[1];
    message.delete().catch(O_o=>{}); 
if (!args.length) {
return message.channel.send(embed4);
}
if(!args[3]){
    return message.channel.send(embed5)
}
const info3 = await message.channel.send(embed3);
const before2 = Date.now();
pinger.ping(checkmc, portmc, (error, result) => {
const after2 = Date.now() - before2
if (error) {
const embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .addField("Nom du serveur :", checkmc)
        .addField("Port du serveur :", portmc)
        .addField("Status :", "Offline :red_circle:")
        .addField("MS :", "``-/-``")
        .addField("Mise a jour a :", timeswm)
        .setTimestamp()
        .setFooter("Eternity © 2019 | by lolgame854")
        return info3.edit(embed)
}
const embed2 = new Discord.RichEmbed()
        .setColor("PURPLE")
        .addField("Nom du serveur :", checkmc)
        .addField("Port du serveur :", portmc)
        .addField("Status :", "Online :white_check_mark:")
        .addField("MS :", `${after2}`)
        .addField("Mise a jour a :", timeswm)
        .setTimestamp()
        .setFooter("Eternity © 2019 | by lolgame854")
        return info3.edit(embed2)
});
  }
};
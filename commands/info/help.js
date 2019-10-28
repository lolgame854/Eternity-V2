const Discord = require('discord.js')
const bot = new Discord.Client()
const { promptMessage } = require("../functions.js");
module.exports = {
    name: "help",
    category: "info",
    description: "",
    run: async (client, message, args) => {
        const embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setAuthor("Commande de Eternity 😎")
        .setDescription("Les commandes avec [] sont en création ou en maintenance.")
        .addField(":page_with_curl: Commandes information", "e!help | e!sondage | [giveaway] | e!userinfo | e!serverinfo")
        .addField(":computer:  Commandes basic", "e!ping | e!say | e!sayembed")
        .addField(":robot:  Commmdes pour le bot", "e!bot | [modifstatus] | [modifactivity]")
        .addField(":tada: Commandes fun", "e!chien | e!chat | e!avatar | e!8ball | e!math")
        .addField(":hammer_pick: Utility", "e!checkweb | e!checkmc | e!bitly")
        .addField(":oncoming_police_car: Admin", "e!ban | [kick] | e!mute | e!unmute | e!clear | [report]\n[raidmode] | [warn]")
        .addField(":tools:  Createur", "e!maintenance")
        .setFooter("Eternity © 2019 Un problème ? Demandes à lolgame854#3470 !")
        
        const embed2 = new Discord.RichEmbed()
        .setAuthor(bot.user.username)
        .setColor("PURPLE")
        .setDescription(":page_facing_up: Voulez vous que je vous envoie les commande en ``MP`` ?\n \nAction invalide dans 10seconds !")
        .setFooter("Eternity © 2019 | by lolgame854")
    
        const enoie = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setAuthor(message.author.username)
        .setDescription(":arrow_right: Je viens de t'envoyer les commandes en ``MP`` ^^")
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL)
    
        await message.channel.send(embed2).then(async msg => {
            const emoji = await promptMessage(msg, message.author, 10, ["✅", "❌"]);
            if(emoji === "✅"){
                msg.delete()
                message.channel
                .send("Envoie en cours...")
                .then(m => m.edit(enoie))
                .then(m => m.delete(3000))
                message.author.send(embed)
            }
            if(emoji === "❌"){
                msg.delete();
                msg.channel.send(embed)
            }
        })
    }
  };
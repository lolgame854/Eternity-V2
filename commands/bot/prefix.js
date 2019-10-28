const Discord = require('discord.js')
const fs = require('fs')
module.exports = {
    name: "prefix",
    category: "bot",
    description: "",
    run: async (client, message, args) => {
        const noperm = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setTitle("No permission")
        .setDescription("Vous n'avez pas la permission.")
        .setFooter("Eternity © 2019 | by lolgame854")
    
        const help = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setTitle("Help commande")
        .setDescription("Commande : ``[prefix + sayembed]`` + ``[message]``")
        .setFooter("Eternity © 2019 | by lolgame854")
    
        if(!message.member.hasPermission("ADMINISTRATOR"))
        return message.channel.send(noperm)
        
       if(!args[0] || args[0 == "help"])
       return message.channel.send(help)
    
       let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    
       prefixes[message.guild.id] = {
           prefixes: args[0]
       }
    
       fs.writeFile("./prefixes.json", JSON.stringify(prefixes), err => {
           if(err) console.log(err);
       })
    
    
       const embed = new Discord.RichEmbed()
       .setAuthor("Prefix")
       .setColor("PURPLE")
       .setDescription(`Nouveau prefix : ${args[0]}`)
       .setTimestamp()
       .setFooter("Eternity © 2019 | by lolgame854")
       message.channel.send(embed)
    }
  };
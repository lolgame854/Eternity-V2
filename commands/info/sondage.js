const Discord = require('discord.js')
const bot = new Discord.Client()

module.exports = {
    name: "sondage",
    category: "info",
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
        .setDescription("Commande : ``[prefix + sondage]`` + ``[message]``")
        .setFooter("Eternity © 2019 | by lolgame854")
    
        const embed = new Discord.RichEmbed()
      .setColor("PURPLE")
      .setTitle(":page_with_curl: **Sondage**")
      .setDescription(args.join(' '))
      .setFooter(`Ce sondage est proposé par ${message.author.username}.`)
    
        if(!message.member.hasPermission('MANAGE_MESSAGES')){
            return message.channel.send(noperm)
        }
    
        if(!args[0]) return message.channel.send(help)
    
      message.delete()
      let msg = await message.channel.send(embed)
      await msg.react('✅')
      await msg.react('❌')
    }
  };
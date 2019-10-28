const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = {
  name: "ban",
  category: "admin",
  description: "",
  run: async (client, message, args) => {
    const logChannel =
      message.guild.channels.find(c => c.name === "logs") || message.channel;

    if (message.deletable) message.delete();
    const embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Ban")
    .setDescription("S'il vous plaît fournir une personne à bannir.")
    // No args
    if (!args[0]) {
      return message.channel
        .send(embed)
        .then(m => m.delete(5000));
    }

    // No reason
    const embed2 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Ban")
    .setDescription("S'il vous plaît fournir une raison pour bannir l'utilisateur.")
    if (!args[1]) {
      return message.channel
        .send(embed2)
        .then(m => m.delete(5000));
    }


    const noperm = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("No permission")
    .setDescription("Vous n'avez pas la permission.")
    .setFooter("Eternity © 2019 | by lolgame854")
    // No author permissions
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel
        .send(noperm)
        .then(m => m.delete(5000));
    }
    const embed3 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Ban")
    .setDescription("Je n'ai pas l'autorisation de bannir des membres. Veuillez contacter un membre du personnel.")
    // No bot permissions
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel
        .send(embed3)
        .then(m => m.delete(5000));
    }

    const toBan =
      message.mentions.members.first() || message.guild.members.get(args[0]);

      const embed4 = new Discord.RichEmbed()
      .setColor("PURPLE")
    .setAuthor("Ban")
    .setDescription("Impossible de trouver ce membre, essayez à nouveau.")
    // No member found
    if (!toBan) {
      return message.channel
        .send(embed4)
        .then(m => m.delete(5000));
    }

    const embed5 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Ban")
    .setDescription("Vous ne pouvez pas vous bannir ...")
    // Can't ban urself
    if (toBan.id === message.author.id) {
      return message.channel
        .send(embed5)
        .then(m => m.delete(5000));
    }

    const embed6 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Ban")
    .setDescription("Je ne peux pas bannir cette personne à cause de la hiérarchie des rôles, je suppose.")
    // Check if the user's banable
    if (!toBan.bannable) {
      return message.channel
        .send(embed6)
        .then(m => m.delete(5000));
    }

    const embed7 = new Discord.RichEmbed()
    .setColor("PURPLE")
      .setThumbnail(toBan.user.displayAvatarURL)
      .setFooter(message.member.displayName, message.author.displayAvatarURL)
      .setTimestamp()
      .setDescription(stripIndents`**> Membre banni:** ${toBan} (${toBan.id})
            **> Banni par:** ${message.member} (${message.member.id})
            **> Raison:** ${args.slice(1).join(" ")}`);

    const promptEmbed = new Discord.RichEmbed()
    .setColor("PURPLE")
      .setAuthor(`Cette vérification devient invalide après 10s`)
      .setDescription(`Voulez-vous bannir ${toBan}?`);

    // Send the message
    await message.channel.send(promptEmbed).then(async msg => {
      // Await the reactions and the reactioncollector
      const emoji = await promptMessage(msg, message.author, 10, ["✅", "❌"]);

      // Verification stuffs
      if (emoji === "✅") {
        msg.delete();

        toBan.ban(args.slice(1).join(" ")).catch(err => {
          if (err)
            return message.channel.send(`Eh bien ... le bannissement n'a pas fonctionné. Voici l'erreur ${err}.`);
        });

        logChannel.send(embed7);
      } else if (emoji === "❌") {
        msg.delete();

        const embed9 = new Discord.RichEmbed()
        .setColor("PURPLE")
    .setAuthor("Ban")
    .setDescription(`bannissement annulée.`)
        message.channel
          .send(embed9)
          .then(m => m.delete(10000));
      }
    });
  }
};
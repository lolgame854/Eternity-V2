const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
  name: "kick",
  category: "admin",
  description: "Kicks the member",
  usage: "<id | mention>",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Kick")
    .setDescription("S'il vous plaît fournisé une personne à kick.")

    const embed2 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Kick")
    .setDescription("S'il vous plaît fournisé une raison pour kick la personne.")

    const embed3 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Kick")
    .setDescription("Vous n'avez pas le droit de kick des membres. Veuillez contacter un membre du personnel.")

    const embed4 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Kick")
    .setDescription("Je n'ai pas la permission de kick les membres. Veuillez contacter un membre du personnel.")

    const embed5 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Kick")
    .setDescription("Impossible de trouver ce membre, essayez à nouveau.")

    const embed6 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Kick")
    .setDescription("Tu ne peux pas te kick ...")

    const embed7 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Kick")
    .setDescription("Je ne peux kick cette personne à cause de la hiérarchie des rôles, je suppose.")

    const logChannel =
      message.guild.channels.find(c => c.name === "logs") || message.channel;

    if (message.deletable) message.delete();

    // No args
    if (!args[0]) {
      return message.channel
        .send(embed)
        .then(m => m.delete(5000));
    }

    // No reason
    if (!args[1]) {
      return message.channel
        .send(embed2)
        .then(m => m.delete(5000));
    }

    // No author permissions
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel
        .send(embed3)
        .then(m => m.delete(5000));
    }

    // No bot permissions
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel
        .send(
          embed4
        )
        .then(m => m.delete(5000));
    }

    const toKick =
      message.mentions.members.first() || message.guild.members.get(args[0]);

    // No member found
    if (!toKick) {
      return message.channel
        .send(embed5)
        .then(m => m.delete(5000));
    }

    // Can't kick urself
    if (toKick.id === message.author.id) {
      return message.channel
        .send(embed6)
        .then(m => m.delete(5000));
    }

    // Check if the user's kickable
    if (!toKick.kickable) {
      return message.channel
        .send(embed7)
        .then(m => m.delete(5000));
    }

    const embed9 = new RichEmbed()
      .setColor("PURPLE")
      .setThumbnail(toKick.user.displayAvatarURL)
      .setFooter(message.member.displayName, message.author.displayAvatarURL)
      .setTimestamp()
      .setDescription(stripIndents`**> Kicked membre:** ${toKick} (${toKick.id})
            **> Kické par:** ${message.member} (${message.member.id})
            **> Raison:** ${args.slice(1).join(" ")}`);

    const promptEmbed = new RichEmbed()
      .setColor("GREEN")
      .setAuthor(`Cette vérification devient invalide après 10s.`)
      .setDescription(`Voulez-vous kick ${toKick}?`);

    // Send the message
    await message.channel.send(promptEmbed).then(async msg => {
      // Await the reactions and the reaction collector
      const emoji = await promptMessage(msg, message.author, 10, ["✅", "❌"]);

      // The verification stuffs
      if (emoji === "✅") {
        msg.delete();

        toKick.kick(args.slice(1).join(" ")).catch(err => {
          if (err)
            return message.channel.send(
              `❌ |Eh bien ... le kick n'a pas fonctionné. Voici l'erreur ${err}.`
            );
        });

        logChannel.send(embed9);
        
      } else if (emoji === "❌") {
        msg.delete();
        const embed8 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Kick")
    .setDescription("Kick ennulé")

        message.channel.send(embed8).then(m => m.delete(10000));
      }
    });
  }
};

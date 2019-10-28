const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "report",
  category: "admin",
  description: "Reports a member",
  usage: "<mention, id>",
  run: async (client, message, args) => {
    if (message.deletable) message.delete();
    const embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Report")
    .setDescription("Impossible de trouver cette personne.")

    const embed2 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Report")
    .setDescription("Impossible de signaler ce membre.")

    const embed3 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Report")
    .setDescription("S'il vous plaît fournir une raison pour le repporter.")

    const embed4 = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor("Report")
    .setDescription("Impossible de trouver le channel ``#reports``.")

    let rMember =
      message.mentions.members.first() || message.guild.members.get(args[0]);

    if (!rMember)
      return message.channel
        .send(embed)
        .then(m => m.delete(5000));

    if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
      return message.channel
        .send(embed2)
        .then(m => m.delete(5000));

    if (!args[1])
      return message.channel
        .send(embed3)
        .then(m => m.delete(5000));
    const channel = message.guild.channels.find(c => c.name === "reports");

    if (!channel)
      return message.channel
        .send(embed4)
        .then(m => m.delete(5000));

    const embed10 = new RichEmbed()
      .setColor("PURPLE")
      .setTimestamp()
      .setFooter(message.guild.name, message.guild.iconURL)
      .setAuthor("Membre signalé", rMember.user.displayAvatarURL)
      .setDescription(stripIndents`**> Membre:** ${rMember} (${rMember.user.id})
            **> Reporté par:** ${message.member}
            **> Reporté dans:** ${message.channel}
            **> Raison:** ${args.slice(1).join(" ")}`);

    return channel.send(embed10);
  }
};

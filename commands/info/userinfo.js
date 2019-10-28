const Discord = require('discord.js')
const bot = new Discord.Client()
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "userinfo",
    category: "info",
    description: "",
    run: async (client, message, args) => {
        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles =
          member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r)
            .join(", ") || "none";
    
        // User variables
        const created = formatDate(member.user.createdAt);
    
        const embed = new Discord.RichEmbed()
          .setFooter(member.displayName, member.user.displayAvatarURL)
          .setThumbnail(member.user.displayAvatarURL)
          .setColor(
            member.displayHexColor === "#000000"
              ? "#ffffff"
              : member.displayHexColor
          )
    
          .addField(
            "Information du membre:",
            stripIndents`**> Nom du joueur:** ${member.displayName}
                **> Inscrit le:** ${joined}
                **> Roles:** ${roles}`,
            true
          )
    
          .addField(
            "Informations de l utilisateur:",
            stripIndents`**> ID:** ${member.user.id}
                **> Nom d'utilisateur**: ${member.user.username}
                **> Tag**: ${member.user.tag}
                **> Créé le**: ${created}`
          )
    
          .setTimestamp();
    
        if (member.user.presence.game)
          embed.addField(
            "En train de jouer",
            stripIndents`**> Nom:** ${member.user.presence.game.name}`
          );
    
        message.channel.send(embed);
    }
  };
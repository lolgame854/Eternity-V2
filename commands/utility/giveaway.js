const discord = require('discord.js')
module.exports = {
  name: "giveaway",
  category: "utility",
  description: "",
  run: async (client, message, args) => {
    var item = "";
    var time;
    var winnerCount;
    const noperm = new discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("No permission")
    .setDescription("Vous n'avez pas la permission.")
    .setFooter("Eternity © 2019 | by lolgame854")

    const embed2 = new discord.RichEmbed()
    .setAuthor("GiveAway")
    .setColor("PURPLE")
    .setDescription("Veuillez mettre combien de personnes vont gagne.")

    const embed3 = new discord.RichEmbed()
    .setAuthor("GiveAway")
    .setColor("PURPLE")
    .setDescription("Veuillez mettre combien de temp avant que le giveaway se finis.")

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noperm);
    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(' ');
    message.delete();
    if(!args[0])
    return message.channel.send(embed2).then(m => m.delete(3000))
    if(!args[1])
    return message.channel.send(embed3).then(m => m.delete(3000))
    var date = new Date().getTime();
    var dateTime = new Date(date + (time * 1000));
    var giveawayEmbed = new discord.RichEmbed()
        .setTitle(":tada: **GIVEAWAY** :tada:")
        .setColor("PURPLE")
        .setFooter(`Expire: ${dateTime}`)
        .setDescription(item);
    var embedSend = await message.channel.send(giveawayEmbed);
    embedSend.react("🎉");
    setTimeout(function () {
        var random = 0;
        var winners = [];
        var inList = false;
        var peopleReacted = embedSend.reactions.get("🎉").users.array();
        for (var i = 0; i < peopleReacted.length; i++) {
            if (peopleReacted[i].id == client.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }
        }
        if (peopleReacted.length == 0) {
            const botwin = new discord.RichEmbed()
    .setAuthor("GiveAway")
    .setColor("PURPLE")
    .setDescription("Personne n'a gagné si le bot gagne.")
            return message.channel.send(botwin);
        }
        if (peopleReacted.length < winnerCount) {
            const botwin2 = new discord.RichEmbed()
    .setAuthor("GiveAway")
    .setColor("PURPLE")
    .setDescription("Il ya trop peu de gens qui ont participé donc le bot a gagné.")
            return message.channel.send(botwin2);
        }
 
        // Voor het aantal winnaars dat we eerder hebben opgegeven gaan we een random nummer aanmaken en de user in een array zetten. 
        for (var i = 0; i < winnerCount; i++) {
 
            inList = false;
 
            // Aanmaken van een random getal zodat we een user kunnen kiezen.
            random = Math.floor(Math.random() * peopleReacted.length);
 
            // Als een winnaar al voorkomt in de winnaars lijst dan moeten we opnieuw gaan zoeken naar een andere winnaar.
            for (var y = 0; y < winners.length; y++) {
                // Nakijken als de geslecteerde winnaar al in de lijst zit.
                if (winners[y] == peopleReacted[random]) {
                    // We zetten i 1 minder zodat we opnieuw kunnen doorgaan in de lijst.
                    i--;
                    // We zetten dit op true zodat we weten dat deze al in de lijst zit.
                    inList = true;
                    break;
                }
            }
 
            // Zit deze niet in de lijst gaan we deze toevoegen.
            if (!inList) {
                winners.push(peopleReacted[random]);
            }
 
        }
 
        // Voor iedere winnaar gaan we een bericht sturen.
        for (var i = 0; i < winners.length; i++) {
            const winembed = new discord.RichEmbed()
            .setTitle(":tada: **GIVEAWAY** :tada:")
            .setColor("PURPLE")
            .setDescription(`La / Les personne(s) qui a / ont gagne(s) : \n \n${winners[i]}\n \nIl(s) a / ont gagne(s) \n \n**${item}**`)
            .setTimestamp()
            message.channel.send(winembed);
        }
 
    }, 1000 * time);
  }
};
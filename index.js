const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs")
const Discord = require('discord.js')

const client = new Client({
  disableEveryone: false
});

var maintenance = false // Si on redemarre le bot, il n'y a plus de maintenance
var list_commandes = ["checkmec", "checkxeb", "help", "serverinfo", "sondage", "userinfo", "bitly", "math", "8ball", "bot", "avatar", "chat", "ban", "clear", "mute", "unmute", "chien", "ping", "say", "sayembed"] // Liste de toute les commandes du bot
var messageAuthorIsSTAFF = false // Si l'auteur de la commande est un membre du staff

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
  path: __dirname + "/.env"
});

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  console.log(`Salut, ${client.user.username} est en ligne !`);

  client.user.setPresence({
    status: "online",
    game: {
      name: `Prefix => w!| ${client.guilds.size} serveurs`,
      type: "WATCHING"
    }
  });
});

client.on("message", async message => {
  const prefixe = "e!"

  const prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: prefixe
        }
    }

  const prefix = prefixes[message.guild.id].prefixes;

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);

  const embed = new Discord.RichEmbed()
  .setColor("PURPLE")
  .setAuthor(client.user.username)
  .setDescription("Maintenance activé")

  const embed2 = new Discord.RichEmbed()
  .setColor("PURPLE")
  .setAuthor(client.user.username)
  .setDescription("Maintenance désactivé")

  const embed3 = new Discord.RichEmbed()
  .setColor("PURPLE")
  .setAuthor(client.user.username)
  .setDescription("Le bot est actuellement en maintenance !")

  const embed4 = new Discord.RichEmbed()
  .setColor("PURPLE")
  .setAuthor(client.user.username)
  .setDescription("Seul le createur peut mettre le bot en maintenance")
  
  if (message.author.id === "411817236332806165") messageAuthorIsSTAFF = true // ID du staff du bot

    if (maintenance){
        list_commandes.forEach(function(item, index, array) {
            if (message.content.startsWith(prefix + item)){
                if (!messageAuthorIsSTAFF) {
                    message.channel.send(embed3)
                    maintenance = true
                } 
            }
        });
    }

    if (!messageAuthorIsSTAFF && maintenance) return

    if(message.content === prefix + "maintenance"){
        if (message.author.id === "411817236332806165") {
            if (maintenance){
                maintenance = false
                message.channel.send(embed2)
            } else {
                maintenance = true
                message.channel.send(embed)
            } 
        } else {
            message.channel.send(embed4)
        }
    }

});

client.login(process.env.TOKEN);
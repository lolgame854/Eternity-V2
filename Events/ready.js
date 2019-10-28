const Discord = require('discord.js')

module.exports = (client) => {
    console.log(`${client.user.username} est connecté !`)

    let status = [
        `${client.guils.size} serveur`,
        `${client.user.size} membre`,
        `${client.channel.size} channel`,
        `e! => e!help`
    ]
    setInterval(function() {
        let statu = status[Math.floor(Math.random() * status.length)];
        client.user.setActivity(status, {type: "WATCHING"})
    }, interval);
};

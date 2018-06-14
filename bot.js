const botconf = require("./botconf.json");
const discord = require("discord.js");

const bot = new discord.Client()

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("zzzzz mano dejen dormir")
});

bot.on("message", message => {
    if(message.author.bot) return;

    let prefix = botconf.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}hola` || cmd === `${prefix}hello`) {
        return message.channel.send("Quiubo mano!");
    }
})

bot.on("guildMemberAdd", member => {  
    const channel = member.guild.channels.find("name", "general");
    const guild = member.guild;
    guild.defaultChannel.send(`Hola ${member.user.username} bienvenido al servidor :)`);
})

bot.login(botconf.token);
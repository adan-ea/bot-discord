const Discord = require("discord.js");

const Client = new Discord.Client({intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
]});

const prefix = "!";

Client.on("ready", () => {
    console.log("Hello there");
});

Client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === "tu marches ?"){
    message.channel.send("Non je cours, il est con lui.");
    }
    

    if(message.content === prefix + "pingsansRythm"){
        const embed = new Discord.MessageEmbed()
        .setColor("#B22222")
        .setTitle("Pong !");
        message.channel.send({embed: [embed]});
        
    }
});

Client.login("ODg1NjA5MzAzOTAwMzIzOTEy.YTph7w.oh0BqOFojCu5baIxP1IVEmDbHSM");
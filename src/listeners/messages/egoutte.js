const {Listener} = require("discord-akairo");
const {Channel} = require("discord.js");

class egoutteListener extends Listener {
    constructor() {
        super('egoutte', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    exec(message) {
        if (!message.author.bot) {
            if (message.content.match(/Allo/gmi)) {
                message.reply('https://cdn.discordapp.com/attachments/771934231647223848/914455579563548712/D62gh0wWwAAfbIC.jpg')
            }
        }


    }
}

module.exports = egoutteListener;


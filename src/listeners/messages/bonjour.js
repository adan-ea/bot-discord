const { Listener } = require("discord-akairo");
const { Channel } = require("discord.js");

class BonjourListener extends Listener {
    constructor() {
        super('bonjour', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    exec(message) {

        if (!message.author.bot) {
            if (message.content.match('Hello there')) {
                message.reply('https://tenor.com/view/hello-there-general-kenobi-star-wars-grevious-gif-17774326');
            }

        }


    }
}

module.exports = BonjourListener;
const {Listener} = require('discord-akairo');
const {Channel} = require('discord.js');

class helloThereListener extends Listener {
    constructor() {
        super('helloThere', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    exec(message) {
        if (!message.author.bot) {
            if (message.content.match(/hello there/gmi)) {
                message.reply('https://tenor.com/view/hello-there-general-kenobi-star-wars-grevious-gif-17774326');
            }
        }
    }
}

module.exports = helloThereListener;


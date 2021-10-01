const { Listener } = require("discord-akairo");
const { Channel } = require("discord.js");

class DisCeciListener extends Listener {
    constructor() {
        super('disCeci', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    exec(message) {
        console.log('Un nouveau message !');

        if (!message.author.bot) {
            if (message.content.match('di')) {
                message.reply('Fous leur la paix avec tes vieux tests là.')
            }

        }


    }
}

module.exports = DisCeciListener;
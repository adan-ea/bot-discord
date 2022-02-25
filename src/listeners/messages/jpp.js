const {Listener} = require("discord-akairo");

class jppListener extends Listener {
    constructor() {
        super('Jpp', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    exec(message) {
        let random = Math.random();

        if (!message.author.bot) {
            if (random > 0.95) {
                if (message.content.match(/jpp/gmi)) {
                    message.reply('https://cdn.discordapp.com/attachments/771934231647223848/938389858802606160/jpp_jean-pierre.png');
                }
            }
        }
    }
}

module.exports = jppListener;

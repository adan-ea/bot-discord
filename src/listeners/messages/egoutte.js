const {Listener} = require('discord-akairo');

class egoutteListener extends Listener {
    constructor() {
        super('egoutte', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    exec(message) {
        if (!message.author.bot && message.content.match(/Allo/gmi)) {
            message.reply('https://cdn.discordapp.com/attachments/771934231647223848/932926764253052949/oui_allo_jegoutte.jpg');
        }
    }
}

module.exports = egoutteListener;


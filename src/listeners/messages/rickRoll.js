const {Listener} = require('discord-akairo');

class rickRollListener extends Listener {
    constructor() {
        super('rickRoll', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    exec(message) {
        //Commande avec 1% de chances de Rick roll un message ne venant pas du propriétaire du bot ou 10% pour Nalhak
        let random = Math.random();

        if (random > 0.9 && message.author.id === '264026835493322753') {
            return message.reply(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`);
        } else if (random > 0.99 && message.channel.id !== '816189987295854632') {
            return message.reply(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`);

        }
    }
}

module.exports = rickRollListener;

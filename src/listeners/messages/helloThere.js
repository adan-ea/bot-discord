const {Listener} = require('discord-akairo');

class helloThereListener extends Listener {
    constructor() {
        super('helloThere', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    exec(message) {
        if (!message.author.bot && message.content.match(/hello there/gmi)) {
            message.reply('https://tenor.com/view/hello-there-general-kenobi-star-wars-grevious-gif-17774326');
        }
    }
}

module.exports = helloThereListener;


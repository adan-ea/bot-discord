const {Listener} = require('discord-akairo');

class jeSuisListener extends Listener {
    constructor() {
        super('jeSuis', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    exec(message) {
        let random = Math.random();
        const englishDadRegex = /\bi(?:(?:\s+a|')?m|\s+be)\s+(?=\S)/i;
        const frenchDadRegex = /j(?:e+\s|')?suis/i;
        const englishMatch = message.content.match(englishDadRegex);
        const frenchMatch = message.content.match(frenchDadRegex);
        if (!message.author.bot && random > 0.9) {
            if (englishMatch) {
                const name = message.content.slice(englishMatch.index + englishMatch[0].length).trim();
                if (!name || name.length > 100) return false;
                return message.reply(`Hi ${name}, I'm dad!`);
            }

            if (frenchMatch) {
                const name = message.content.slice(frenchMatch.index + frenchMatch[0].length).trim();
                if (!name || name.length > 100) return false;
                return message.reply(`Salut ${name}, Je suis ton père !`);
            }
        }
    }
}

module.exports = jeSuisListener;

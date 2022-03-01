const {Command} = require('discord-akairo');

class PFCCommand extends Command {
    constructor() {
        super('pierrefeuilleciseaux', {
            aliases: ['pfc', 'pierrefeuilleciseaux', 'shifumi'],
            description: {
                content: 'Lance un pierre feuille ciseaux contre le bot.',
                usage: 'pfc',
                exemples: ['pfc', 'shifumi']
            },
            category: 'Games',
            ignoredCooldown: '294916386072035328',
            args: [{
                id: 'choice',
                type: 'string'
            }]
        });
    }

    async exec(message, {choice}) {
        if (message.channelId === '930473543014178856') {
            let botChoice = Math.floor(Math.random() * 3);
            let possibleChoices = ['p', 'f', 'c'];
            let possibleEmoteChoices = ['🗿', '🍁', '✂'];

            message.react(possibleEmoteChoices[botChoice]);
            if (choice === possibleChoices[botChoice]) {
                message.reply('C\'est une égalité ! On réessaie ?');
            } else if ((choice === 'p' && possibleChoices[botChoice] === 'f') || (choice === 'f' && possibleChoices[botChoice] === 'c') || (choice === 'c' && possibleChoices[botChoice] === 'p')) {
                message.reply('Ah dommage pour toi ! On réessaie ?');
            } else if ((choice === 'p' && possibleChoices[botChoice] === 'c') || (choice === 'f' && possibleChoices[botChoice] === 'p') || (choice === 'c' && possibleChoices[botChoice] === 'f')) {
                message.reply('Bravo à toi ! On réessaie ?');
            } else {
                message.reply('Tu dois choisir entre 🗿 (p), 🍁 (f) ou ✂ (c) !');
            }
        }
    }
}

module.exports = PFCCommand;

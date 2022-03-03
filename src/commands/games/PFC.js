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

    isPlayerOneWinner(playerOneChoice, playerTwoChoice) {
        return (playerOneChoice === 'p' && playerTwoChoice === 'c') || (playerOneChoice === 'f' && playerTwoChoice === 'p') || (playerOneChoice === 'c' && playerTwoChoice === 'f');
    }

    async exec(message, {choice}) {

        let botChoice = Math.floor(Math.random() * 3);
        let possibleChoices = ['p', 'f', 'c'];
        let possibleEmoteChoices = ['🗿', '🍁', '✂'];

        await message.react(possibleEmoteChoices[botChoice]);

        if (!choice) {
            await message.reply('Tu dois choisir entre 🗿 (p), 🍁 (f) ou ✂ (c) !').catch(error => message.reply('une erreur c\'est produite.'));
        } else if (choice === possibleChoices[botChoice]) {
            await message.reply('C\'est une égalité ! On réessaie ?').catch(error => message.reply('une erreur c\'est produite.'));
        } else if (!this.isPlayerOneWinner(choice, possibleChoices[botChoice])) {
            await message.reply('Ah dommage pour toi ! On réessaie ?').catch(error => message.reply('une erreur c\'est produite.'));
        } else if (this.isPlayerOneWinner(choice, possibleChoices[botChoice])) {
            await message.reply('Bravo à toi ! On réessaie ?').catch(error => message.reply('une erreur c\'est produite.'));
        } else {
            await message.reply('Tu dois choisir entre 🗿 (p), 🍁 (f) ou ✂ (c) !').catch(error => message.reply('une erreur c\'est produite.'));
        }
    }

}

module.exports = PFCCommand;

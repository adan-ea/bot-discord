const TicTacToe = require('discord-tictactoe');
const {Command} = require('discord-akairo');

class TicTacToeCommand extends Command {
    constructor() {
        super('tictactoe', {
            aliases: ['ttt', 'tictactoe'],
            description: {
                content: 'Lance un Tic Tac Toe contre le bot ou un joueur.',
                usage: 'tictactoe <@utilisateur',
                exemples: ['tictactoe', 'ttt @adanne.ea#3945']
            },
            ignoredCooldown: '294916386072035328',
            category: 'Games'
        });
    }


    async exec(message) {
        if (message.channelId === '930473543014178856') {
            const game = new TicTacToe({language: 'fr'});
            game.handleMessage(message);
        }
    }
}

module.exports = TicTacToeCommand;

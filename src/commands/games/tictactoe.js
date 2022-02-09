const {Command} = require('discord-akairo');
const TicTacToe = require('discord-tictactoe');


class TicTacToeCommand extends Command {
    constructor() {
        super('tictactoe', {
            aliases: ['ttt', 'tictactoe'],
            description: 'Lance un Tic Tac Toe',
            category: 'Games',
        });
    }

    async exec(message) {
        const game = new TicTacToe({ language: 'fr' })
        game.handleMessage(message);
        message.reply('Non.');
    }
}


module.exports = TicTacToeCommand;

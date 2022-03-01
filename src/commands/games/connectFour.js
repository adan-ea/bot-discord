/*const connectfour = require("connectfour-discord");
const {Command} = require('discord-akairo');


class ConnectFourCommand extends Command {
    constructor() {
        super('puissance4', {
            aliases: ['p4', 'puissance4', 'c4', 'connect4'],
            description: {
                content: 'Lance un Puissance 4 contre le bot.',
                usage:  'p4',
                exemples:  ['p4', 'puissance4', 'c4', 'connect4']
            },
            ignoredCooldown: '294916386072035328',
            category: 'Games'
        });
    }


    async exec(message) {
        if(message.channelId === '930473543014178856'){
            const game = new connectfour(message.author.id, '609758025888038938', '816172869339185163');
            game.game();
        }
    }
}

module.exports = ConnectFourCommand;
*/

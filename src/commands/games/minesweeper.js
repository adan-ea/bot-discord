const {Command} = require('discord-akairo');
const Minesweeper = require('discord.js-minesweeper');


class MinesweeperCommand extends Command {
    constructor() {
        super('demineur', {
            aliases: ['demineur'],
            description: {
                content: 'Lance un démineur.',
                usage: 'demineur <lignes> <colonnes> <bombes>',
                exemples: ['demineur 10 10 25', 'demineur']
            },
            ignoredCooldown: '294916386072035328',
            category: 'Games',
            args: [{
                id: 'rows',
                type: 'number'
            },
                {
                    id: 'columns',
                    type: 'number'
                },
                {
                    id: 'mines',
                    type: 'number'
                }
            ]

        });
    }


    async exec(message, {rows, columns, mines}) {
        await message.delete();
        if (message.channelId === '930473543014178856') {
            if (!rows) {
                return message.reply(':warning: Merci de fournir un nombre correct de lignes.');
            }

            if (!columns) {
                return message.reply(':warning: Merci de fournir un nombre correct de colonnes.');
            }

            if (!mines) {
                return message.reply(':warning: Merci de fournir un nombre correct de mines.');
            }
            const minesweeper = new Minesweeper({
                rows: rows,
                columns: columns,
                mines: mines,
                emote: 'boom'
            });
            const matrix = minesweeper.start();

            return matrix
                ? message.channel.send(matrix)
                : message.channel.send(':warning: You have provided invalid data.');
        }
    }
}


module.exports = MinesweeperCommand;

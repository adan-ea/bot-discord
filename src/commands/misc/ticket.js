const {Command} = require('discord-akairo');


class TicketCommand extends Command {
    constructor() {
        super('ticket', {
            aliases: ['ticket', 'support'],
            description: 'Affiche les informations de l\'utilisateur',
            ignoredCooldown: '294916386072035328',
            category: 'Misc',
            args: [{
                id: 'titreTicket',
                type: 'string'
            },
                {
                    id: 'contenuTicket',
                    type: 'string'
                }
            ],
            separator: ','
        });
    }


    async exec(message, {titreTicket, contenuTicket}) {
        if (message.channel.id === '816204474371538974') {
            await message.startThread({
                name: `Ticket : ${message.author.username}`,
                reason: contenuTicket
            });
        } else {
            return message.channel.send(`<@${message.author.id}> merci de faire ceci dans le channel <#816204474371538974> qui est le channel approprié.`);
        }
    }
}


module.exports = TicketCommand;

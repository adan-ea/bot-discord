const { Command } = require('discord-akairo');



class TicketCommand extends Command {
    constructor() {
        super('ticket', {
            aliases: ['ticket', 'support'],
            description: 'Affiche les informations de l\'utilisateur',
            ignoredCooldown: '294916386072035328',
            args: [{
                    id: 'titreTicket',
                    type: 'string',
                },
                {
                    id: 'contenuTicket',
                    type: 'string'
                }

            ],
            separator: ','
        });
    }


    exec(message, args) {
        if (message.channel.id === "887680265806311434") {
            if (args.titreTicket === null || args.contenuTicket === null) {
                return message.channel.send("il te manque un truc");
            } else {
                return message.channel.send({
                    embeds: [
                        this.client.functions.embed()
                        .setAuthor(`${message.author.username}`, message.author.avatarURL())
                        .setTitle(`Ticket de ${message.author.username} créé : ${args.titreTicket}`)
                        .setThumbnail("https://cdn.discordapp.com/attachments/763373898779197481/887604870578843668/Zw.png")
                        //node .\src\index.js
                        .setDescription(`${args.contenuTicket}`)
                        .setFooter(`ID : ${message.author.id}`)
                        .setTimestamp()
                    ]
                })
            }
        } else {
            return message.channel.send(`<@${message.author.id}> merci de faire ceci dans le channel <#887680265806311434> qui est le channel approprié.`);
        }
    }
}


module.exports = TicketCommand;
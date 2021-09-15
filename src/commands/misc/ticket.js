const { Command } = require('discord-akairo');



class TicketCommand extends Command {
    constructor() {
        super('ticket', {
            aliases: ['ticket', 'support'],
            description: 'Affiche les informations de l\'utilisateur',
            ignoredCooldown: '294916386072035328',
            args: [{
                id: 'member',
                type: 'member',
                default: message => message.member
            }]
        });
    }

    exec(message, args) {
        return message.channel.send({
            embeds: [
                this.client.functions.embed()
                .setAuthor(`${args.member.displayName}`, args.member.user.displayAvatarURL())
                .setTitle(`Ticket de ${args.member.displayName} créé`)
                .setThumbnail("https://cdn.discordapp.com/attachments/763373898779197481/887604870578843668/Zw.png")
                //.addField(`Rejoint le :`, `${args.member.guild.joinedAt.getDate()}/${args.member.guild.joinedAt.getMonth()}/${args.member.guild.joinedAt.getFullYear()} à ${args.member.guild.joinedAt.getHours()}:${args.member.guild.joinedAt.getMinutes()}`, true)
                //node .\src\index.js
                .setFooter(`ID : ${args.member.id}`)
                .setTimestamp()
            ]
        })
    }
}

module.exports = TicketCommand;
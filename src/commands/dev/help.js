const { Command } = require('discord-akairo');



class AideCommand extends Command {
    constructor() {
        super('aide', {
            aliases: ['aide', 'commandes'],
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
                .setTitle(`Commandes de ce bot`)
                .setThumbnail("https://cdn.discordapp.com/attachments/763373898779197481/887604870578843668/Zw.png")
                .addField(`!ticket [titre ticket]*,* [raison ticket]`, `Vous permet de créer un ticket si vous avez un soucis, je m'occuperai du ticket lorsque j'ai le temps`, true)
                .addField(`!userInfo (@user)`, `Donne des informations concernant l'utilisateur en question`, true)

                //node .\src\index.js
                .setFooter(`() = optionnel | [] = requis`)
                .setTimestamp()
            ]
        })
    }
}

module.exports = AideCommand;
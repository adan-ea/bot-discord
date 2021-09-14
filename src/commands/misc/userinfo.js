const { Command } = require('discord-akairo');



class UserInfoCommand extends Command {
    constructor() {
        super('userInfo', {
            aliases: ['userInfo', 'info'],
            description: 'Affiche les informations de l\'utilisateur',
            ignoredCooldown: '294916386072035328',
            args: [
                {
                    id: 'member', type: 'member', default: message => message.member
                }
            ]
        });
    }

    exec(message, args) {
        return message.channel.send({
            embeds: [
                this.client.functions.embed()
                    .setAuthor(`${args.member.displayName}`, args.member.user.displayAvatarURL())
                    .setTitle(`${args.member.displayName}`)
                    .setThumbnail(args.member.user.displayAvatarURL())
                    .addField(`Création le :`, `${args.member.user.createdAt.getDate()}/${args.member.user.createdAt.getMonth()}/${args.member.user.createdAt.getFullYear()} à ${args.member.user.createdAt.getHours()}:${args.member.user.createdAt.getMinutes()}`, true)
                    .addField(`Rejoint le :`, `${args.member.guild.joinedAt.getDate()}/${args.member.guild.joinedAt.getMonth()}/${args.member.guild.joinedAt.getFullYear()} à ${args.member.guild.joinedAt.getHours()}:${args.member.guild.joinedAt.getMinutes()}`,true)
                    //.addField('Roles', `${args.member.roles}`)
                    //node .\src\index.js
                    .setFooter(`ID : ${args.member.id}`)
                    .setTimestamp()

            ]
        })
    }
}

module.exports = UserInfoCommand;

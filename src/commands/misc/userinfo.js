/*const {Command} = require('discord-akairo');


class UserInfoCommand extends Command {
    constructor() {
        super('userInfo', {
            aliases: ['userInfo', 'info'],
            description: {
                content: 'Affiche les informations de l\'utilisateur',
                usage: 'user(info) <member>',
                exemples: ['userinfo', 'info @user']
            },
            ignoredCooldown: '294916386072035328',
            category: 'Misc',
            args: [{
                id: 'member',
                type: 'member',
                default: message => message.member
            }]
        });
    }

    exec(message, {member}) {
        return message.channel.send({
            embeds: [
                this.client.functions.embed()
                    .setAuthor(`${member.displayName}`, member.user.displayAvatarURL())
                    .setTitle(`${member.displayName}`)
                    .setThumbnail(member.user.displayAvatarURL())
                    .addField(`Création le :`, `${member.user.createdAt.getDate()}/${member.user.createdAt.getMonth()}/${member.user.createdAt.getFullYear()} à ${member.user.createdAt.getHours()}:${member.user.createdAt.getMinutes()}`, true)
                    .addField(`Rejoint le :`, `${member.guild.joinedAt.getDate()}/${member.guild.joinedAt.getMonth()}/${member.guild.joinedAt.getFullYear()} à ${member.guild.joinedAt.getHours()}:${member.guild.joinedAt.getMinutes()}`, true)
                    .addField('Roles', `${member.roles.cache}`)
                    .setFooter(`ID : ${member.id}`)
                    .setTimestamp()

            ]
        })
    }
}

module.exports = UserInfoCommand;
*/

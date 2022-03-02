const {Listener} = require('discord-akairo');
const {PUBLIC_LOG_CHANNEL} = require('../../../util/config');
const getDate = require('../sharedFunctions');

class GuildMemberRemoveListener extends Listener {
    constructor() {
        super('guildMemberRemove', {
            emitter: 'client',
            event: 'guildMemberRemove'
        });
    }

    async exec(member) {
        const logChannel = this.client.channels.cache.get(PUBLIC_LOG_CHANNEL);

        const embed = this.client.functions.embed()
            .setAuthor({
                name: `${member.user.id}`, iconURL: member.user.avatarURL()
            })
            .setThumbnail('https://cdn.discordapp.com/attachments/779901444408606730/918202331743539200/unknown.png')
            .setTitle(`${member.user.tag} nous a quitté!`)
            .setDescription(`Weaklings Die. Big Deal.`)
            .addFields(
                {name: `Création le :`, value: getDate(member.user.createdAt), inline: true},
                {name: `Rejoint le :`, value: getDate(member.joinedAt), inline: true},
                {name: `Nombre de membres :`, value: `${member.guild.memberCount}`, inline: false}
            )
            .setFooter({text: 'So long partner.', iconURL: member.user.avatarURL()})
            .setTimestamp();
        await logChannel.send({embeds: [embed]});
    }
}


module.exports = GuildMemberRemoveListener;


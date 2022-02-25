const {Listener} = require('discord-akairo');
const {PUBLIC_LOG_CHANNEL} = require("../../../util/config");
const getDate = require("../sharedFunctions");

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
            .setAuthor(`${member.user.id}`, member.user.avatarURL())
            .setThumbnail("https://cdn.discordapp.com/attachments/779901444408606730/918202331743539200/unknown.png")
            .setTitle(`${member.user.tag} nous a quitté!`)
            .setDescription(`Weaklings Die. Big Deal.`)
            .addField(`Création le :`, getDate(member.user.createdAt), true)
            .addField(`Rejoint le :`, getDate(member.joinedAt), true)
            .addField(`Nombre de membres :`, `${member.guild.memberCount}`, false)
            .setFooter('So long partner.', member.user.avatarURL())
            .setTimestamp();
        await logChannel.send({embeds: [embed]})
    }
}


module.exports = GuildMemberRemoveListener;


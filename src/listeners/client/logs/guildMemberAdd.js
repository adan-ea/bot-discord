const {Listener} = require('discord-akairo');
const {PUBLIC_LOG_CHANNEL} = require('../../../util/config');
const getDate = require('../sharedFunctions');

class GuildMemberAddListener extends Listener {
    constructor() {
        super('guildMemberAdd', {
            emitter: 'client',
            event: 'guildMemberAdd'
        });
    }

    async exec(member) {
        const logChannel = this.client.channels.cache.get(PUBLIC_LOG_CHANNEL);
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = this.client.functions.embed()
            .setAuthor(`${member.user.id}`, member.user.avatarURL())
            .setThumbnail(member.user.avatarURL())
            .setTitle(`Bienvenue sur le serveur ${member.user.tag} !`)
            .setDescription(`Bonjour à toi ! Surtout n'oublie pas, le bon sens est une règle, veille à respecter ce qui devrait être évident !
             Nous souhaitons que ton expérience parmi nous soit aussi plaisante que possible, et nous nous y emploierons constamment.`)
            .addField(`Création le :`, getDate(member.user.createdAt), true)
            .addField(`Nombre de membres :`, `${member.guild.memberCount}`, true)
            .setFooter('T\'es vraiment bg tu sais ?', member.user.avatarURL())
            .setColor(randomColor);
        await logChannel.send({embeds: [embed]});
    }
}

module.exports = GuildMemberAddListener;


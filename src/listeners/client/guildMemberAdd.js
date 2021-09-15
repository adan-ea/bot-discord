const { Listener } = require('discord-akairo');

class GuildMemberAddListener extends Listener {
    constructor() {
        super('guildMemberAdd', {
            emitter: 'client',
            event: 'guildMemberAdd'
        });
    }

    exec(member) {
        console.log(`Bonjour à tous, je suis <@${member.user.id}>`);
        /*
        .setAuthor(`${args.member.displayName}`,"image nouvel arrivant")
        .setThumbnail("image nouvel arrivant")
        .setTitle(`Bienvenue sur le serveur @nomPersonne !`)
        .setDescription(`Bonjour à toi nouveau bg ! Pense à passer dans le salon <#816170263653253132> pour obtenir le rôle Viewer et nous rejoindre officiellement ! )
        .setFooter('T\'es vraiment bg tu sais ?', "image serveur")
        .setTimestamp()        
        */
    }
}

module.exports = GuildMemberAddListener;
const { Listener } = require('discord-akairo');
const { Message } = require('discord.js');

class GuildMemberRemoveListener extends Listener {
    constructor() {
        super('guildMemberRemove', {
            emitter: 'client',
            event: 'guildMemberRemove'
        });
    }

    exec(member, client) {
        //id à garder 885604310036123708
        console.log(`Au revoir :( , je suis <@${member.user.id}> et je suis triste. `);

        client.channels.get("885604310036123708").send("Personne n'est parti, l'autre con fait juste des tests sur moi.")

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

module.exports = GuildMemberRemoveListener;
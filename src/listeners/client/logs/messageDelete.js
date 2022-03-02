const {Listener} = require('discord-akairo');
const {PRIVATE_LOG_CHANNEL} = require('../../../util/config');


class messageDeleteListener extends Listener {
    constructor() {
        super('messageDelete', {
            emitter: 'client',
            event: 'messageDelete'
        });
    }

    async exec(message) {
        const logChannel = this.client.channels.cache.get(PRIVATE_LOG_CHANNEL);
        if (message.content !== null) {
            if (!message.author.bot) {
                const embed = this.client.functions.embed()
                    .setAuthor(
                        {name: `${message.author.id}`, iconURL: message.author.avatarURL()}
                    )
                    .setDescription(`Message supprimé dans <#${message.channelId}>, [voir le salon](${message.url})`)
                    .addField(`Message supprimé :`, message.content, false)
                    .setFooter({text: `Message supprimé.`});
                await logChannel.send({embeds: [embed]});
            }
        }
    }
}

module.exports = messageDeleteListener;

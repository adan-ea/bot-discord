const {Listener} = require('discord-akairo');
const {PRIVATE_LOG_CHANNEL, OWNER_ID} = require('../../../util/config');


class messageEditListener extends Listener {
    constructor() {
        super('messageEdit', {
            emitter: 'client',
            event: 'messageUpdate'
        });
    }

    async exec(oldMessage, newMessage) {
        const logChannel = this.client.channels.cache.get(PRIVATE_LOG_CHANNEL);

        if (oldMessage.content !== null && newMessage.content !== null) {
            if (!newMessage.author.bot) {

                const embed = this.client.functions.embed()
                    .setAuthor({name: `<@${newMessage.author.id}>`, iconURL: newMessage.author.avatarURL()})
                    .setDescription(`Message edité dans <#${oldMessage.channelId}>, [voir le message](${oldMessage.url})`)
                    .addFields(
                        {name:`Ancien message :`, value:oldMessage.content, inline: false},
                        {name:`Nouveau message :`, value:newMessage.content, inline: false}
                    )
                    .setFooter({text:`Message modifié.`});
                await logChannel.send({embeds: [embed]});
            }
        }
    }
}

module.exports = messageEditListener;


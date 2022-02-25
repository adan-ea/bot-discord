const {Listener} = require("discord-akairo");
const {PRIVATE_LOG_CHANNEL, OWNER_ID} = require("../../../util/config");


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
                    .setAuthor(`<@${newMessage.author.id}>`, newMessage.author.avatarURL())
                    .setDescription(`Message supprimé dans <#${oldMessage.channelId}>, [voir le message](${oldMessage.url})`)
                    .addField(`Ancien message :`, oldMessage.content, false)
                    .addField(`Nouveau message :`, newMessage.content, false)
                    .setFooter(`Message modifié.`)
                await logChannel.send({embeds: [embed]})
            }
        }
    }
}

module.exports = messageEditListener;


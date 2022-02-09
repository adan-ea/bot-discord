/*const {Listener} = require("discord-akairo");
const {PRIVATE_LOG_CHANNEL, OWNER_ID} = require("../../../util/config");


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
            if (!message.author.bot && message.author.id !== OWNER_ID) {
                const embed = this.client.functions.embed()
                    .setAuthor(`${message.author.id}`, message.author.avatarURL())
                    .setDescription(`Que peux bien cacher <@${message.author.id}> ?`)
                    .addField(`Message supprimé :`, message.content, false)
                    .setFooter(`Message supprimé.`)
                await logChannel.send({embeds: [embed]})
            }
        }
    }
}

module.exports = messageDeleteListener;
*/

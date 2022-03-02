const {Command} = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('pingea', {
            aliases: ['pingea'],
            description: {
                content: 'La commande ping renvoie la latence du bot !',
                usage: 'pingea',
                exemples: ['pingea']
            },
            category: 'Misc'
        });
    }

    async exec(message) {
        const sentMessage = await message.channel.send('Pong !');
        const timeStamp = message.editedTimestamp ? message.editedTimestamp : message.createdTimestamp;
        const botLatency = `${'```'}\n${Math.round(sentMessage.createdTimestamp - timeStamp)}ms ${'```'}`;
        const apiLatency = `${'```'}\n${Math.round(message.client.ws.ping)}ms ${'```'}`;

        const embed = this.client.functions.embed()
            .setTitle('🏓 Pong !')
            .addField('Latence bot', botLatency, true)
            .addField('Latence api', apiLatency, true);

        await sentMessage.edit({
            content: null,
            embeds: [embed]
        });
    }
}

module.exports = PingCommand;


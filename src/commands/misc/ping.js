const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
            description: {
                content: 'La commande ping renvoie la latence du bot !',
                usage: 'ping',
                exemples: ['ping']
            },
            category: 'Misc'
        });
    }
    exec(message) {
        return message.channelId("885604310036123708").send("salut");
    }
}

module.exports = PingCommand;
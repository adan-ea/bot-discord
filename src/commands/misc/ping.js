const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping']
        });
    }
    exec(message) {
        return message.channelId("885604310036123708").send("salut");
    }
}

module.exports = PingCommand;
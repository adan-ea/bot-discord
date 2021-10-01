const { Command } = require('discord-akairo');

class restartCommand extends Command {
    constructor() {
        super('restart', {
            aliases: ['restart', 'rs'],
            category: 'Dev',
            ownerOnly: true
        });
    }
    exec(message) {
        require('child_process').execSync('pm2 restart 0');
    }
}

module.exports = restartCommand;
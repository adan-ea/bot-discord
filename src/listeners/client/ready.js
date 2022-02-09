const {Listener} = require('discord-akairo');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        console.log(`bot ${this.client.user.tag} oprérationnel !`);

    }
}

module.exports = ReadyListener;

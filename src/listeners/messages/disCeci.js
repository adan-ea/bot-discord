const { Listener } = require("discord-akairo");
const { Channel } = require("discord.js");

class DisCeciListener extends Listener {
    constructor() {
        super('disCeci', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    exec() {
        console.log('Un nouveau message !');



    }
}

module.exports = DisCeciListener;
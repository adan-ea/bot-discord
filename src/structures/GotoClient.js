const { embed } = require('../util/functions');
const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');

module.exports = class GotoClient extends AkairoClient {
    constructor(config = {}) {
        super({ ownerID: '294916386072035328' }, {
            allowedMentions: {
                parse: ['everyone', 'roles', 'users']
            },
            partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
            presence: {
                status: 'dnd',
                activities: [{
                    name: "m_w0rldwide",
                    type: "STREAMING",
                    url: "https://twitch.tv/m_w0rldwide"
                }]
            },
            intents: 32767
        });

        this.CommandHandler = new CommandHandler(this, {
            allowMention: true,
            prefix: config.prefix,
            defaultCooldown: 2000,
            directory: './src/commands/'
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: './src/listeners/'
        })

        this.functions = {
            embed: embed
        }

        this.CommandHandler.loadAll();
        this.CommandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();
    }
}
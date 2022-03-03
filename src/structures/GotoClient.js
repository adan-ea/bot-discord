const {embed} = require('../util/functions');
const {AkairoClient, CommandHandler, ListenerHandler} = require('discord-akairo');
const {OWNER_ID} = require('../util/config');

module.exports = class GotoClient extends AkairoClient {
    constructor(config = {}) {
        super({ownerID: OWNER_ID}, {
            allowedMentions: {
                parse: ['everyone', 'roles', 'users']
            },
            partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
            presence: {
                status: 'dnd',
                activities: [{
                    name: 'adan_ea',
                    type: 'STREAMING',
                    url: 'https://twitch.tv/adan_ea'
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
        });

        this.functions = {
            embed: embed
        };
    }

    async init() {
        this.CommandHandler.useListenerHandler(this.listenerHandler);
        //this.listenerHandler.setEmitters({commandHandler: this.commandHandler});
        this.CommandHandler.loadAll();
        console.log(`Commandes -> ${this.CommandHandler.modules.size}`);
        this.listenerHandler.loadAll();
        console.log(`Listeners -> ${this.listenerHandler.modules.size}`);
    }

    async start() {
        await this.init();
        return this.login(process.env.DISCORD_TOKEN);
    }
};

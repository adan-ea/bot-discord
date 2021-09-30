const { Command } = require('discord-akairo');


class helpV2Command extends Command {
    constructor() {
        super('helpV2', {
            aliases: ['helpV2', 'aideV2', 'commandesV2'],
            args: [{ id: 'command', type: 'commandAlias' }]
        });
    }

    exec(message, args) {
            const command = args.command;
            const prefix = this.handler.prefix;

            if (!command) {
                let embed = this.client.functions.embed()
                    .setAuthor(`${this.client.user.username}`, this.client.user.displayAvatarURL())
                    .setDescription(`❄ Voici la liste de toutes les commandes textuelles ci dessous !
                    **----------------------**`)

                for (const category of this.handler.categories.values()) {
                    embed.addField(
                            `- ${category.id}`,
                            `${category
                        .filter(cmd => cmd.aliases.length > 0)
                        .map(cmd => `\`${cmd.aliases[0]}\``)
                        .join(', ')
                    }`
                )
                .addField('----------------------',
                `**\`${prefix}help <commande>\` pour plus d'informations spécifiques.**
                `
                )
            }

            return message.channel.send({ embeds: [embed] });
        }
    }
}

module.exports = helpV2Command;
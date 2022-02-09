/*const {stripIndents} = require('common-tags');
const {Command} = require('discord-akairo');

//pm2 start .\src\index.js --watch
class helpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help', 'commandes'],
            description: {
                content: 'La commande help renvoie des informations sur les commandes !',
                usage: 'help',
                exemples: ['commandes', 'help userinfo']
            },
            category: 'Dev',
            args: [{id: 'command', type: 'commandAlias'}]
        });
    }

    exec(message, args) {
        const command = args.command;
        const prefix = this.handler.prefix;

        if (!command) {
            let embed = this.client.functions.embed()
                .setAuthor(`${this.client.user.username}`, this.client.user.displayAvatarURL())
                .setThumbnail("https://cdn.discordapp.com/attachments/763373898779197481/887604870578843668/Zw.png")
                .setTitle(`❄ Voici la liste de toutes les commandes textuelles ci dessous !`)
                .setDescription('----------------------')

            for (const category of this.handler.categories.values()) {
                embed.addField(
                    `❄ ${category.id}`,
                    `${category
                        .filter(cmd => cmd.aliases.length > 0)
                        .map(cmd => `\`${cmd.aliases[0]}\``)
                        .join(' | ')
                    }`
                )

            }

            embed.addField('----------------------',
                `**\`${prefix}help <commande>\` pour plus d'informations spécifiques.**
            `
            )
                .setFooter(`( ) = alias | < > = optionnel | [ ] = requis | (Il ne faut pas les inclure dans vos commandes)`)

            return message.channel.send({embeds: [embed]});
        }

        return message.channel.send(stripIndents`
        \`\`\`
        [Help : Command -> ${command.aliases[0]}] ${command.ownerOnly ? '/!\\ Uniquement autorisé pour les admin ! /!\\' : ''}
        ${command.description.content}

        Utilisation : ${prefix}${command.description.usage}
        Exemples : ${prefix}${command.description.exemples.join(` | ${prefix}`)}
        ---
        () = alias | <> = optionnel | [] = requis | (Il ne faut pas les inclure dans vos commandes)
        \`\`\`
        `);
    }
}

module.exports = helpCommand;
*/

/*const { Listener } = require('discord-akairo');

class MissingPermissionsListener extends Listener {
    constructor() {
        super('missingPermissions', {
            emitter: 'commandHandler',
            event: 'missingPermissions'
        });
    }

    async exec(message, command, type, missing) {
        if (type === 'client'){
            return await message.reply(`je n'ai pas les permissions ${missing} pour ${command.id} `);
        } else {
            return await message.reply(`https://cdn.discordapp.com/attachments/771934231647223848/920103030186188811/a1rL3vY_460s.png`);
        }
    }
}

module.exports = MissingPermissionsListener;
*/

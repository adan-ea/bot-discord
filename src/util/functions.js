const {MessageEmbed} = require('discord.js');

module.exports = {
    embed: function () {
        return new MessageEmbed().setColor('#B22222').setTimestamp();
    }
};

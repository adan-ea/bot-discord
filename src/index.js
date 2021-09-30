const { TOKEN } = require('./util/config');
const GotoClient = require('./structures/GotoClient');

let client = new GotoClient({
    prefix: '!'
})

client.on('guildMemberAdd', member => {
    member.guild.channels.get('885604310036123708').send('**' + member.user.username + '**, has joined the server!');
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('816172869339185163').send('**' + member.user.username + '**, has left the server');

});

client.login(TOKEN);
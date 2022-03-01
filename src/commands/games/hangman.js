/*
//The repo https://github.com/SimonLeclere/discord-hangman to see if it has been updated.
const hangman = require('discord-hangman');
const {Command} = require('discord-akairo');


class HangmanCommand extends Command {
    constructor() {
        super('pendu', {
            aliases: ['pendu'],
            description: {
                content: 'Lance un pendu',
                usage: 'pendu',
                exemples: ['pendu']
            },
            ignoredCooldown: '294916386072035328',
            category: 'Games'
        });
    }


    async exec(message) {
        if (message.channelId === '816172869339185163') {
            await hangman.create(message.channel, 'random',
                {

                    createNoPlayers: 'Peut être à un autre moment... Personne n\'a rejoint !',
                    customNotEnoughPlayers: 'Il faut au moins deux joueurs pour une partie personnalisée...',
                    customInitMessage: '{players} a rejoint la partie. Séléction du joueur qui choisira le mot. En attente d\'une de vos réponse. Regardez vos MP!!',
                    customNoMoreWords: 'We ran out of players... try again, I\'m sure you can do it better.',

                    gatherPlayersMsg: 'Ecrivez "join" ou réagissez avec 📒 pour participer à la partie ! Vous avez 10 secondes.',

                    getWordFromPlayersDm: 'Tu es l\'élu ! Ecris le mot de ton choix ici. Tu as 30 secondes. Et n\'oublie pas, tu ne peux pas participer !',
                    timesUpDm: 'Temps écoulé, Tu es disqualifié.',
                    timesUpMsg: 'L\'élu n\'a pas eu la décence de répondre... Séléction du nouvel élu !',
                    wordSuccess: `Sympa ce mot ! Aller on retourne au serveur maintenant ! : ${message.reference}.`,
                    invalidWord: 'Mot incorrect. Il faut au moins trois lettres sans espace.',
                    tooManyInvalidsWords: 'Trop de tentatives pour toi ! Tu es disqualifié.',

                    misses: 'C\'est non !',
                    won: 'OUI, OUI, OUI, OUI, C\'EST GAGNEEE!',
                    noplayersleft: 'Tous les participants ont été disqualifés',
                    gameOver: 'Partie terminée !',
                    gameOverMsg: 'Le mot à trouver était : {word}'
                }
            );
        }
    }
}

module.exports = HangmanCommand;
*/

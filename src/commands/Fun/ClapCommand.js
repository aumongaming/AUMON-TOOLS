const Command = require("../../structures/command")
module.exports = class ClapCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'clap',
            category: 'fun',
            aliases: ['palmas'],
            UserPermission: null,
            ClientPermission: null,
            OnlyDevs: false,
            hidden: false
        })
    }
    run({message, args, server}, t) {
        let clap = args.join(" ").split(" ").join(this.client.emotes.clap)
        
        if (!clap) return message.chinoReply('error', t('commands:clap.args-null'))

        if (message.member.hasPermission('MENTION_EVERYONE')) {
            message.channel.send(clap, {
                disableEveryone: false
            })
        } else {
            message.channel.send(clap, {
                disableEveryone: true
            })
        }
    }
}

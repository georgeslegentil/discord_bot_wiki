const discord = require('discord.js');
const url = require('url');
const client = new discord.Client();
const token = ""//token_bot;
const channel_id = '' //channel id;

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.guilds.forEach((guild) => {
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })

    // let gen = client.channels.get(channel_id) // client id
})

client.on('message', (data) => {
    if (data.author == client.user)
        return
    if (data.content.startsWith("wiki")) {
        var fr = "fr"
        var en = "en"
        if (data.content.match(fr)) {
            const frParse = Parse(data, 7)
            const frApiWiki = url.resolve('https://fr.wikipedia.org/wiki/', frParse)
            data.channel.send(frApiWiki)
            data.channel.send("Page wiki envoyé")
            return
        }
        if (data.content.match(en)) {
            const enparse = Parse(data, 7)
            const enapiWiki = url.resolve('https://en.wikipedia.org/wiki/', enparse)
            data.channel.send(enapiWiki)
            return
        }
        const parsedata = Parse(data, 4)
        const apiWiki = url.resolve('https://fr.wikipedia.org/wiki/', parsedata)
        data.channel.send(apiWiki)
        console.log(apiWiki)
    }
})

function Parse(data, num) {
    let cmd = data.content.substr(num)
    return cmd
}

client.login(token) //tokken app

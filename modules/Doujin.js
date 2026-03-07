const { Colors } = require("discord.js");
const { EmbedBuilder } = require("discord.js")
const nhentai = require("nhentai");
const api = new nhentai.API();

module.exports = {
    async thegreatflood(channel) {
        const tag = "*";
        const page = Math.floor((await api.search(tag).finally().catch(console.error())).numPages * Math.random());
        const page_chosen = (await api.search(tag, {page:page}).finally()).doujins
        const doujin_chosen = page_chosen[Math.floor(Math.random() * page_chosen.length)]

        const m_Embed = new EmbedBuilder()
            .setColor(Colors.Red)
            .setTitle(doujin_chosen.titles.english)
            .setURL(doujin_chosen.url)
            .setAuthor({ name: doujin_chosen.tags.artists.map(value => `${value.name}`).join(", "), iconURL: 'https://nhentai.net/static/favicon-32x32.png', url: 'https://nhentai.net/' })
            .setDescription(doujin_chosen.tags.tags.map(value => `${value.name}`).join(", "))
            .setThumbnail('https://nhentai.net/static/favicon-32x32.png')
            .setImage(doujin_chosen.cover.url)
            .setTimestamp(doujin_chosen.uploadTimestamp)
            .setFooter({ text: "Likes:"+doujin_chosen.favorites, iconURL: 'https://nhentai.net/static/favicon-32x32.png' });
        await channel.send({embeds: [m_Embed]});
    }
}
const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data : new SlashCommandBuilder()
            .setName('addChannel')
            .setDescription('adiciona um canal ')
            .addChannelOption((option) => option
                            .setName("channel")
                            .setDescription("canal de texto que vai receber os doujins")
                            .setRequired(true)
            )
            .addIntegerOption((option) => option
                            .setName("time")
                            .setDescription("tempo, em segundos, entre o envio de cada doujin (min: 10 segundos)")
            )
            ,
    async execute(interaction) {

    }
}
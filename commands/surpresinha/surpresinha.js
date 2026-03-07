const { SlashCommandBuilder } = require("discord.js")
module.exports = {
    data : new SlashCommandBuilder().setName('surpresinha').setDescription('coisa basica'),
    async execute(interaction) {
        await interaction.reply(`aHR0cHM6Ly9pbWd1ci5jb20vYS9maWx0cmFkby16dmpPczVO`)
    }
}
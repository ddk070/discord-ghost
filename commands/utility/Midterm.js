const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('期中提報')
        .setDescription('有關期中的地點時間、注意事項、相關連結'),

    async execute(interaction) {
        console.log('使用者:', interaction.user.tag);
        console.log('指令名稱:', interaction.commandName);

        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('time')
                    .setLabel('時間地點')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('notice')
                    .setLabel('雲端收檔時間')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setLabel('提報公告說明連結')
                    .setURL('https://docs.google.com/presentation/d/1LVWo9CUjKbHHjKb37zuuId40HW0OVvsx/edit?usp=drivesdk&ouid=110506090136793788586&rtpof=true&sd=true')
                    .setStyle(ButtonStyle.Link)
            );

        await interaction.reply({ content: '# 期中提報', components: [row1], ephemeral: true });
    },
};

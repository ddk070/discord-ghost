const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('參考圖連結')
        .setDescription('顯示所有參考圖連結'),

    async execute(interaction) {
	    // 在後台輸出使用者的資訊和指令參數
            console.log('使用者:', interaction.user.tag); // 使用者名稱
            console.log('指令名稱:', interaction.commandName);     // 指令名稱

        // 創建第一列按鈕
        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('logo參考圖連結')
                    .setURL('https://pin.it/3TcQnKcVo')
                    .setStyle(ButtonStyle.Link),
                new ButtonBuilder()
                    .setLabel('人物比例連結')
                    .setURL('https://pin.it/4NhHLl6uD')
                    .setStyle(ButtonStyle.Link),
                new ButtonBuilder()
                    .setLabel('場景連結')
                    .setURL('https://pin.it/5vKEVDU1s')
                    .setStyle(ButtonStyle.Link)
            );


        // 發送訊息，包含兩行按鈕和字
        await interaction.reply({ content: '# 參考圖連結', components: [row1], ephemeral: true });
    },
};

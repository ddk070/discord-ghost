const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('重要連結')
        .setDescription('顯示所有畢製資料夾或文件連結'),

    async execute(interaction) {
	    // 在後台輸出使用者的資訊和指令參數
	    console.log('使用者:', interaction.user.tag); // 使用者名稱
            console.log('指令名稱:', interaction.commandName);     // 指令名稱

        // 創建第一列按鈕
        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('統整專題（二）')
                    .setURL('https://drive.google.com/drive/folders/1bMCA2RmCPeI6VSRwGVK4JVjqMHw504YH')
                    .setStyle(ButtonStyle.Link),
		new ButtonBuilder()                                                                 .setLabel('本組資料夾')
		    .setURL('https://drive.google.com/drive/folders/1LLH25cDVahujszzOwqiwPwTHjsT8A5GJ')
		   .setStyle(ButtonStyle.Link),
                new ButtonBuilder()
                    .setLabel('每組專題組別excel')
		    .setURL('https://docs.google.com/spreadsheets/d/1qBG1hbJ4nj1mPkRiqwOmTSsGmB7obGMI/edit?usp=drive_link')
                    .setStyle(ButtonStyle.Link)
            );

        // 創建第二列按鈕
        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('PPT')
                    .setURL('https://www.canva.com/design/DAGQnKO7hiY/pZUc7DTuAyHraXLawl17Bg/edit?utm_content=DAGQnKO7hiY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')
		    .setStyle(ButtonStyle.Link),

		new ButtonBuilder()                                                                  .setLabel('設定集')                                                                 .setURL('https://www.canva.com/design/DAGRrfW8p5Q/eXwSZeRnDRlkptGJLD5R3Q/edit?utm_content=DAGRrfW8p5Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')
                    .setStyle(ButtonStyle.Link),

                new ButtonBuilder()
                    .setLabel('企劃書')
                    .setURL('https://dyuschool-my.sharepoint.com/:w:/g/personal/f1119030_cloud_dyu_edu_tw/EUXCOlOpXf5NqLvT6fSF9ZgBdhBb1U36W774j2U_6iBYpg?e=Sj1qcK')
                    .setStyle(ButtonStyle.Link),
		new ButtonBuilder()
                    .setLabel('動態分鏡')
                    .setURL('https://drive.google.com/drive/folders/1BB4ADO6Ram1o0a96_gdaxuDabCBTE0gp')
                    .setStyle(ButtonStyle.Link)
            );

        // 發送訊息，包含兩行按鈕和字
        await interaction.reply({ content: '# 各種連結', components: [row1], ephemeral: true });
        await interaction.followUp({ content: '# 偶們的東東', components: [row2], ephemeral: true });
    },
};

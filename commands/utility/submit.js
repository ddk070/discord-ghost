const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()                                                                                           
	.setName('期中繳交位置')
        .setDescription('顯示期中ppt、企劃書、進度表繳交連結'),

    async execute(interaction) {
            // 在後台輸出使用者的資訊和指令參數
            console.log('使用者:', interaction.user.tag); // 使用者名稱          
	    console.log('指令名稱:', interaction.commandName);// 指令名稱

        // 創建第一列按鈕
        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('繳交PPT')
                    .setURL('https://drive.google.com/drive/folders/1hckxCAVhQ2by21CtSGanYi0vpYiaCJAS')
                    .setStyle(ButtonStyle.Link),                                                                                      
		new ButtonBuilder()
                    .setLabel('繳交企劃書')                               
		    .setURL('https://drive.google.com/drive/folders/1c8u4fszc2QhgqUJRX_o7b5dm4MnSw0h3')
                    .setStyle(ButtonStyle.Link),                                                                                      
		new ButtonBuilder()
                    .setLabel('填寫進度表')
                    .setURL('https://docs.google.com/spreadsheets/d/10VVcdOAvU1njTSXB__W-UXMja-Db7yiC/edit?usp=drivesdk&ouid=110506090136793788586&rtpof=true&sd=true')
                    .setStyle(ButtonStyle.Link)
            );// 發送訊息，包含兩行按鈕和字

        await interaction.reply({ content: '# 期中繳交連結 \n * PPT：繳交pdf、pptx檔\n* 企劃書：繳交word、pdf檔\n* 進度表完成寫越少，分數越低', components: [row1], ephemeral: true });
    },
};

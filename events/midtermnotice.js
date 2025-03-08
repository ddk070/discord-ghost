module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (interaction.isButton()) {
            if (interaction.customId === 'time') {
                await interaction.reply({ content: '# 期末提報時間 \n > 時間：01/08 (三)\n > 地點：h613\n > 入場時間：8:10~8~30 ', ephemeral: true });
            } else if (interaction.customId === 'notice') {
                await interaction.reply({ content: '# 雲端收檔時間 \n> 繳交：PPT、企劃書\n> * 各兩種檔案\n> **01/04 (一) 20:00**', ephemeral: true });
            }
        }
    },
};

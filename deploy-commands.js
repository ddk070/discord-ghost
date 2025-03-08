const { REST, Routes } = require('discord.js');                                                                       const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');                                                                                    
const commands = [];
// 指定命令的檔案位置
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {                                                                                        // 取得命令資料夾中的所有指令
        const commandsPath = path.join(foldersPath, folder);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
        // 取得每個命令資料的 SlashCommandBuilder#toJSON() 輸出以進行部署
        for (const file of commandFiles) {
                const filePath = path.join(commandsPath, file);
                const command = require(filePath);
                if ('data' in command && 'execute' in command) {
                        commands.push(command.data.toJSON());                                                                         } else {                                                                                                                      console.log(`[警告] The command at ${filePath} is missing a required "data" or "execute" prope
rty.`);
                }
        }
}

// 建置並準備 REST 模組的實例
const rest = new REST().setToken(token);

// 重新上傳指令
(async () => {
        try {
                console.log(`Started refreshing ${commands.length} application (/) commands.`);

                // put方法用於將行會中的所有命令全部刷新為當前設置
                const data = await rest.put(
                        Routes.applicationGuildCommands(clientId,guildId),
                        { body: commands },
                );

                console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
                // 確認指向並輸出任何錯誤回報
                console.error(error);
        }
})();

import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('更新日誌')
 .setDescription('來看看多了什麼新東西')

export const action = async (ctx) =>{
    ctx.reply(`指令又更新啦~旅行者快來一起看看更新了什麼
1.為溫迪新增了幾張貼圖
2.幫神子更新了活動列表
3.為神子新增了前瞻直播的指令`)
}
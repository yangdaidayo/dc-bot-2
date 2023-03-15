import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('更新日誌')
 .setDescription('來看看多了什麼新東西')

export const action = async (ctx) =>{
    ctx.reply(`指令又更新啦~旅行者快來一起看看更新了什麼
1.新增部分角色的素材查詢
2.稍微挑整了派蒙的頭像
3.為神子新增了'活動'指令`)
}
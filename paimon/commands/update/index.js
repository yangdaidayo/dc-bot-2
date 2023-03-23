import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('更新日誌')
 .setDescription('來看看多了什麼新東西')

export const action = async (ctx) =>{
    ctx.reply(`指令又更新啦~旅行者快來一起看看更新了什麼
1.新增了溫迪
2.全角色素材皆已完成撰寫(有漏再提醒我)`)
}
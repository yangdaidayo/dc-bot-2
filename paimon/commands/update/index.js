import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('更新日誌')
 .setDescription('來看看多了什麼新東西')

export const action = async (ctx) =>{
    ctx.reply(`指令又更新啦~旅行者快來一起看看更新了什麼
1.新增了派蒙
2.新增了'/help'指令
3.新增了'/更新日誌'指令
4.新增了查詢角色素材的指令(詳情請輸入/help查看)
5.稍微調整了'凶'、'平'、'吉'，三種籤抽到的機率(詳情請輸入/present查看)`)
}
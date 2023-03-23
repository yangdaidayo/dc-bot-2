import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('瑤瑤')
 .setDescription('瑤瑤的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:絕雲辣椒、史萊姆凝液、滅諍草蔓(無相草)
天賦素材:勤勞(禮拜二、禮拜五)、史萊姆凝液、空行的虛鈴(散兵)
聖遺物:千岩、草套、少女
聖遺物有效詞條:生命、充能
武器:西風、貫月矢、黑纓槍、護摩`)
}
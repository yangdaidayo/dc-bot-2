import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('坎蒂斯')
 .setDescription('坎蒂絲的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:赤念果、紅綢(鍍金旅團)、導光四面體(半永恆統轄矩陣)
天賦素材:諍言(禮拜一、禮拜四)、紅綢(鍍金旅團)、禍神之楔淚(雷神)
聖遺物:宗室
聖遺物有效詞條:充能、生命
武器:西風、黑纓槍、護摩、喜多院十文字`)
}
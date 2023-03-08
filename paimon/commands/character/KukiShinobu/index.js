import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('久岐忍')
 .setDescription('久岐忍的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:鳴草、浮游乾核(漂浮靈)、符紋之齒(遺跡巨蛇)
天賦素材:風雅(禮拜二、禮拜五)、浮游乾核(漂浮靈)、禍神之楔淚(雷神)
聖遺物:飾金、樂園
聖遺物有效詞條:精通、生命
武器:聖顯之鑰、蒼古、西弗斯月光、鐵蜂刺、紙傘`)
}
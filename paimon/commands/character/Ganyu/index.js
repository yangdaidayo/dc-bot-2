import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('甘雨')
 .setDescription('甘雨的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:清心、騙騙花蜜、極寒之核(急凍樹)
天賦素材:勤勞(禮拜二、禮拜五)、騙騙花蜜、武煉之魂(公子)
聖遺物:冰套、流浪
聖遺物有效詞條:攻擊、精通、雙爆、充能
武器:阿莫斯、冬極白星、試作澹月、破魔`)
}
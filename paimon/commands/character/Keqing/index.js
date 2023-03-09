import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('刻晴')
 .setDescription('刻晴的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:石珀、騙騙花蜜、雷光稜鏡(無相雷)
天賦素材:繁榮(禮拜一、禮拜四)、騙騙花蜜、北風之環(北風狼)
聖遺物:如雷、平雷、飾金
聖遺物有效詞條:攻擊、雙爆、精通、充能
武器:霧切、綠劍、匣裡、黎明`)
}
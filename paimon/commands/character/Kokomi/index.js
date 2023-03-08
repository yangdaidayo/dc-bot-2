import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('珊瑚宮心海')
 .setDescription('珊瑚宮心海的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:珊瑚珍珠、浮游乾核(漂浮靈)、排異之露(無相水)
天賦素材:浮世(禮拜一、禮拜四)、浮游乾核(漂浮靈)、獄火之蝶(女士)
聖遺物:海染
聖遺物有效詞條:生命、充能、"精通、攻擊"(感電隊才需要堆)
武器:不滅月華、金箔、討龍`)
}
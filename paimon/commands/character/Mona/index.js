import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('莫娜')
 .setDescription('莫娜的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:慕風蘑菇、騙騙花蜜、淨水之心(純水精靈)
天賦素材:抗爭(禮拜二、禮拜五)、騙騙花蜜、北風之環(北風狼)
聖遺物:宗室、絕緣、千岩
聖遺物有效詞條:攻擊、雙爆、充能
武器:討龍、金珀`)
}

import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('砂糖')
 .setDescription('砂糖的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:風車菊、騙騙花蜜、颶風之種(無相風)
天賦素材:自由(禮拜一、禮拜四)、騙騙花蜜、北風的魂匣(北風狼)
聖遺物:風套、教官
聖遺物有效詞條:精通、充能
武器:祭禮、討龍、金珀`)
}

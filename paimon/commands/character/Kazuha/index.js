import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('楓原萬葉')
 .setDescription('楓原萬葉的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:海靈芝、鴉印(盜寶團)、魔偶機心(魔偶劍鬼)
天賦素材:勤勞(禮拜二、禮拜五)、鴉印(盜寶團)、鎏金之鱗(若陀龍王)
聖遺物:風套
聖遺物有效詞條:充能、精通
武器:蒼古、西福斯的月光、鐵蜂刺、紙傘`)
}
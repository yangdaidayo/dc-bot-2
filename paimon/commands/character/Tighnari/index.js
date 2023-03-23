import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('提納里')
 .setDescription('提納里的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:月蓮、蕈獸孢子、蕈王喙勾(草雞)
天賦素材:諍言(禮拜一、禮拜四)、蕈獸孢子、萬劫之真意(雷神)
聖遺物:流浪、草套、飾金
聖遺物有效詞條:攻擊、精通、充能、雙爆
武器:獵人之徑、若水、天空、阿莫斯、冬極白星、蒼翠獵弓、破魔、王下近侍、彈弓`)
}
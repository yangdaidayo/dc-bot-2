import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('鹿野院平藏')
 .setDescription('鹿野院平藏的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:鬼兜蟲、鴉印(盜寶團)、符文之齒(遺跡巨蛇)
天賦素材:浮世(禮拜一、禮拜四)、鴉印(盜寶團)、萬劫之真意(雷神)
聖遺物:2風套/2樓閣/2攻擊(3選2)
聖遺物有效詞條:攻擊、精通、充能、雙爆
武器:神樂、四風、天空、流浪、匣裡`)
}
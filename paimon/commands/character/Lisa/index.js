import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('麗莎')
 .setDescription('麗莎的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:落落梅、史萊姆凝液、雷光稜鏡(無相雷)
天賦素材:詩文(禮拜三、禮拜六)、箭簇(丘丘弓手)、東風之爪(風魔龍)
聖遺物:如雷、平雷、飾金
聖遺物有效詞條:攻擊、雙爆、精通、充能
武器:神樂、四風、流浪、匣裡日月`)
}

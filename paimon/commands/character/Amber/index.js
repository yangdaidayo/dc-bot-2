import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('安柏')
 .setDescription('安柏的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:小燈草、牢固的箭簇(丘丘弓手)、常燃火種(爆炎樹)
天賦素材:自由(禮拜一、禮拜四)、牢固的箭簇(丘丘弓手)、東風的吐息(風魔龍)
聖遺物:流浪、追憶
聖遺物有效詞條:攻擊、雙爆、精通
武器:阿莫斯、天空、試作澹月、破魔`)
}

import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('重雲')
 .setDescription('重雲的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:石珀、破損的面具(丘丘人)、極寒之核(急凍樹)
天賦素材:勤勞(禮拜二、禮拜五)、破損的面具(丘丘人)、東風的吐息(風魔龍)
聖遺物:渡火、飾金、宗室、絕緣、2冰套2宗室2角鬥2流浪(4套挑2套混搭)
聖遺物有效詞條:攻擊、充能、雙爆、精通
武器:赤角、狼末、螭骨、惡王丸`)
}

import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('可莉')
 .setDescription('可莉的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:慕風蘑菇、繪卷(丘丘薩滿)、常燃火種(爆炎樹)
天賦素材:自由(禮拜一、禮拜四)、繪卷(丘丘薩滿)、北風之環(北風狼)
聖遺物:魔女、追憶
聖遺物有效詞條:雙爆、攻擊
武器:四風、天空、流浪、嘟嘟可`)
}

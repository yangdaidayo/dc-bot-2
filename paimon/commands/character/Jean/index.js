import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('琴')
 .setDescription('琴的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:蒲公英籽、破損的面具(丘丘人)、颶風之種(無相風)
天賦素材:抗爭(禮拜二、禮拜五)、破損的面具(丘丘人)、東風之翎(風魔龍)
聖遺物:風套
聖遺物有效詞條:攻擊、雙爆、充能
武器:綠劍、天空、霧切、風鷹、蒼古、風鷹`)
}

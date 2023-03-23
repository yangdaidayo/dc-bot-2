import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('九條裟羅')
 .setDescription('九條裟羅的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:血斛、破損的面具(丘丘人)、雷霆數株(雷音權限)
天賦素材:風雅(禮拜二、禮拜五)、破損的面具(丘丘人)、灰燼之心(女士)
聖遺物:絕緣、宗室
聖遺物有效詞條:攻擊、雙爆、充能
武器:終末、落霞、祭禮、天空`)
}
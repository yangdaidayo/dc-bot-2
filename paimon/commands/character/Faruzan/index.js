import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('琺露珊')
 .setDescription('琺露珊的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:赤念果、紅綢(鍍金旅團)、導光四面體(半永恆統轄矩陣)
天賦素材:諍言(禮拜一、禮拜四)、紅綢(鍍金旅團)、傀儡的懸絲(散兵)
聖遺物:宗室、千岩(6命)
聖遺物有效詞條:攻擊、充能、雙爆
武器:終末、落霞、西風、祭禮`)
}
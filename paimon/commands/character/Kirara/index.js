import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('綺良良')
 .setDescription('綺良良的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:天雲草實、浮游乾核(漂浮靈)、常暗圓環(深罪浸禮者)
天賦素材:浮世(禮拜一、禮拜六四)、浮游乾核(漂浮靈)、亙古樹海之一瞬(草龍)
聖遺物:千岩、草套、宗室、2千岩2花神
聖遺物有效詞條:生命、充能
武器:聖顯之鑰、原木刀、西風、祭禮、綠劍(給其他人更好)`)
}

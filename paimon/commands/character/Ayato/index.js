import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('神里綾人')
 .setDescription('神里綾人的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:緋櫻繡球、刀鐔(野伏眾)、排異之露(無相水)
天賦素材:風雅(禮拜二、禮拜五)、刀鐔(野伏眾)、凶將之手眼(雷神)
聖遺物:餘響、水套、樓閣
聖遺物有效詞條:攻擊、生命、雙爆、充能、雙爆、
武器:波波劍、霧切、綠劍、黑劍、黎明神劍`)
}
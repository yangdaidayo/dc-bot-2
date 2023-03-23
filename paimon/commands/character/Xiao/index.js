import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('魈')
 .setDescription('魈的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:清心、史萊姆凝液、未熟之玉(古岩龍蜥)
天賦素材:繁榮(禮拜一、禮拜四)、史萊姆凝液、武煉之魂(公子)
聖遺物:辰砂、樓閣
聖遺物有效詞條:攻擊、雙爆、充能
武器:鳥槍、護摩、決鬥槍、白纓槍`)
}
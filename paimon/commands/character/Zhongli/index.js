import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('鐘離')
 .setDescription('鐘離的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:石珀、史萊姆凝液、玄岩之塔(無相岩)
天賦素材:黃金(禮拜三、禮拜六)、史萊姆凝液、吞天之鯨(公子)
聖遺物:千岩、磐岩、草套
聖遺物有效詞條:生命、雙爆、充能
武器:護摩、黑纓、西風`)
}
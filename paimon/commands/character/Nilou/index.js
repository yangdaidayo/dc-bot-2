import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('妮露')
 .setDescription('妮露的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:帕蒂沙蘭、蕈獸孢子、永續機芯(龍獸)
天賦素材:篤行(禮拜三、禮拜六)、蕈獸孢子、禍神之楔淚(雷神)
聖遺物:2千岩2流浪
聖遺物有效詞條:生命、精通、充能
武器:聖顯之鑰、原木刀`)
}
import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('萊依拉')
 .setDescription('萊依拉的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:月蓮、繪卷(丘丘薩滿)、永續機芯(龍獸)
天賦素材:巧思(禮拜二、禮拜五)、繪卷(丘丘薩滿)、無心的淵鏡(散兵)
聖遺物:千岩
聖遺物有效詞條:生命、充能
武器:聖顯之鑰、蒼古、綠劍、祭禮、西風`)
}
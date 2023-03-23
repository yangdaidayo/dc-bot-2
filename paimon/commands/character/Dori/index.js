import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('多莉')
 .setDescription('多莉的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:劫波蓮、紅綢(鍍金旅團)、藏雷野實(掣電樹)
天賦素材:巧思(禮拜二、禮拜五)、紅綢(鍍金旅團)、血玉之枝(若陀龍王)
聖遺物:2絕緣2千岩
聖遺物有效詞條:生命、充能
武器:西風、祭禮、桂木斬長正`)
}
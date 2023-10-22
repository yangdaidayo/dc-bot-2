import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('卡維')
 .setDescription('卡維的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:悼靈花、蕈獸孢子、滅诤草蔓(無相草)
天賦素材:巧思(禮拜二、禮拜五)、蕈獸孢子、原初綠洲之初綻(草龍)
聖遺物:樂園、飾金
聖遺物有效詞條:精通、充能
武器:飾鐵之花、沐浴龍血的劍、雨裁、瑪海菈的水色、森林王器`)
}

import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('托馬')
 .setDescription('托馬的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:幽燈蕈、鴉印(盜寶團)、陰燃之珠(無相火)
天賦素材:浮世(禮拜一、禮拜四)、鴉印(盜寶團)、獄火之蝶(女士)
聖遺物:2絕緣2千岩(盾輔)、飾金、樂園(烈綻放)
聖遺物有效詞條:生命、充能(盾輔)、精通(烈綻放)
武器:薙草之稻光、薄荷槍、魚叉、西風、喜多院十文字`)
}
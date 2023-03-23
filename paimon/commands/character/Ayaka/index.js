import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('神里綾華')
 .setDescription('神里綾華的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:緋櫻繡球、刀鐔(野伏眾)、恆常機關之心(恆常機關陣列)
天賦素材:風雅(禮拜二、禮拜五)、刀鐔(野伏眾)、血玉之枝(若陀龍王)
聖遺物:冰套、2冰2攻擊(綠劍)
聖遺物有效詞條:充能、精通
武器:霧切、綠劍、天目影打刀、籠釣瓶一心`)
}
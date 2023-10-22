import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('白朮')
 .setDescription('白朮的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:琉璃袋、蕈獸孢子、常暗圓環(深罪浸禮者)
天賦素材:黃金(禮拜三、禮拜六)、蕈獸孢子、生長天地之蕨草(草龍)
聖遺物:宗室
聖遺物有效詞條:生命、充能
武器:碧落之瓏、金珀、祭禮、西風`)
}

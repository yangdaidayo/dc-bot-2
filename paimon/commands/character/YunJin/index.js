import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('雲堇')
 .setDescription('雲堇的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:琉璃百合、破損的面具(丘丘人)、獸境王器(黃金王獸)
天賦素材:勤勞(禮拜二、禮拜五)、破損的面具(丘丘人)、灰燼之心(女士)
聖遺物:華館、宗室、磐岩
聖遺物有效詞條:防禦、充能
武器:薙草之稻光、薄荷槍、魚叉、西風、喜多院十文字`)
}
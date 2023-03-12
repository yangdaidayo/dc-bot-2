import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('諾艾爾')
 .setDescription('諾艾爾的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:落落梅、破損的面具(丘丘人)、玄岩之塔(無相岩)
天賦素材:抗爭(禮拜二、禮拜五)、破損的面具(丘丘人)、東風之爪(風魔龍)
聖遺物:華館、逆飛(主c)、磐古(輔助)
聖遺物有效詞條:防禦>攻擊、雙爆、充能
武器:赤角、螭骨劍、白影劍、天空`)
}

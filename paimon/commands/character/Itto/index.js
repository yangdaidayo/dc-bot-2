import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('荒瀧一斗')
 .setDescription('荒瀧一斗的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:鬼兜蟲、史萊姆凝液、獸境王器(黃金王獸)
天賦素材:風雅(禮拜二、禮拜五)、史萊姆凝液、灰燼之心(女士)
聖遺物:華館
聖遺物有效詞條:防禦、雙爆、充能
武器:赤角、螭骨劍、白影劍`)
}
import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('艾爾海森')
 .setDescription('艾爾海森的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:沙脂蛹、紅綢(鍍金旅團)、蒼礫蕊羽(沙蟲)
天賦素材:巧思(禮拜二、禮拜五)、紅綢(鍍金旅團)、無心的淵鏡(散兵)
聖遺物:飾金、草套
聖遺物有效詞條:攻擊、精通、雙爆
武器:裁葉、霧切、綠劍、、鐵蜂刺、黎明`)
}
import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('八重神子')
 .setDescription('八重神子的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:海靈芝、刀鐔(野伏眾)、龍嗣偽鰭(深海龍蜥)
天賦素材:天光(禮拜三、禮拜六)、刀鐔(野伏眾)、萬劫之真意(雷神)
聖遺物:如雷、飾金、2如雷/2流浪/2攻擊(3選2)
聖遺物有效詞條:攻擊、精通、充能、雙爆
武器:神樂、四風、天空、流浪、匣裡、千夜、祭禮、流浪的晚星`)
}
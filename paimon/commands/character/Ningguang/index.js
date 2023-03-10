import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('凝光')
 .setDescription('凝光的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:琉璃百合、徽記(愚人眾)、玄岩之塔(無相岩)
天賦素材:繁榮(禮拜一、禮拜四)、徽記(愚人眾)、北風的魂匣(北風狼)
聖遺物:追憶、逆飛、2磐岩/宗室2攻擊
聖遺物有效詞條:攻擊、雙爆
武器:天空、四風、塵世之鎖、匣裡日月、流浪`)
}

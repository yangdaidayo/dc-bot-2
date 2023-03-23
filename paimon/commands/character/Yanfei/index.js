import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('煙緋')
 .setDescription('煙緋的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:夜泊石、鴉印(盜寶團)、未熟之玉(古岩龍蜥)
天賦素材:黃金(禮拜三、禮拜六)、鴉印(盜寶團)、血玉之枝(若陀龍王)
聖遺物:魔女、流浪、飾金、逆飛
聖遺物有效詞條:雙爆、充能、攻擊、精通
武器:四風、天空、流浪`)
}
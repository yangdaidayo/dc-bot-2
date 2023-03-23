import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('埃洛伊')
 .setDescription('埃洛伊的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:晶化骨髓、浮游乾核(漂浮靈)、晶凝之華(無相冰)
天賦素材:自由(禮拜一、禮拜四)、浮游乾核(漂浮靈)、熔毀之刻(女士)
聖遺物:追憶、餘響、冰套
聖遺物有效詞條:攻擊、雙爆、充能、精通
武器:飛雷、弓藏、彈弓、破魔、天空`)
}
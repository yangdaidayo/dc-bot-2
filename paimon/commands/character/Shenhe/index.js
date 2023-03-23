import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('申鶴')
 .setDescription('申鶴的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:清心、騙騙花蜜、龍嗣偽鰭(深海龍蜥)
天賦素材:繁榮(禮拜一、禮拜四)、騙騙花蜜、獄火之蝶(女士)
聖遺物:2套攻擊套(角鬥、追憶等)、宗室
聖遺物有效詞條:攻擊、雙爆、充能
武器: 息災、西風、薙草之稻光、薄荷槍`)
}

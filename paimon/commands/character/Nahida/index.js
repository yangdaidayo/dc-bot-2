import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('納西妲')
 .setDescription('納西妲的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:劫波蓮、蕈獸孢子、滅诤草蔓(無相草)
天賦素材:巧思(禮拜二、禮拜五)、蕈獸孢子、傀儡的懸絲(散兵)
聖遺物:飾金、草套
聖遺物有效詞條:精通、雙爆
武器:千夜浮夢、流浪的晚星、祭禮書、魔導緒論`)
}
import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('香菱')
 .setDescription('香菱的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:絕雲辣椒、史萊姆凝液、常燃火種(爆炎樹)
天賦素材:勤勞(禮拜二、禮拜五)、史萊姆凝液、東風之爪(風魔龍)
聖遺物:絕緣
聖遺物有效詞條:攻擊、精通、雙爆、充能
武器:薙草之稻光、護摩、魚叉、匣裡、西風(應該說大部分的槍，香菱都能拿)`)
}
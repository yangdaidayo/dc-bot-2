import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('公子')
 .setDescription('公子的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:星螺、徽記(愚人眾)、淨水之心(純水精靈)
天賦素材:自由(禮拜一、禮拜四)、徽記(愚人眾)、魔王之刃(公子)
聖遺物:2水套2攻擊、4水套
聖遺物有效詞條:雙爆、攻擊、精通、充能
武器:冬極、若水、天空、蒼翠、絕弦`)
}

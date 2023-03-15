import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('迪盧克')
 .setDescription('迪盧克的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:小燈草、徽記(愚人眾)、常燃火種(爆炎樹)
天賦素材:抗爭(禮拜二、禮拜五)、徽記(愚人眾)、東風之翎(風魔龍)
聖遺物:魔女
聖遺物有效詞條:攻擊、充能、雙爆、精通
武器:狼末、葦海信標、無工大劍、天空、螭骨`)
}

import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('羅莎莉亞')
 .setDescription('羅莎莉亞的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:落落梅、徽記(愚人眾)、極寒之核(急凍樹)
天賦素材:詩文(禮拜三、禮拜六)、徽記(愚人眾)、武煉之魂(公子)
聖遺物:宗室
聖遺物有效詞條:雙爆、充能
武器:西風、赤沙之杖、決鬥槍、白纓槍`)
}
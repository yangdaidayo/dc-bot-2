import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('阿貝多')
 .setDescription('阿貝多的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:塞希莉亞花、繪卷(丘丘薩滿)、玄岩之塔(無相岩)
天賦素材:詩文(禮拜三、禮拜六)、繪卷(丘丘薩滿)、吞天之鯨(公子)
聖遺物:華館
聖遺物有效詞條:雙爆、防禦
武器:辰砂(問就是絕版了)、黎明神劍、腐殖之劍(又絕版)`)
}
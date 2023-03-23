import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('流浪者')
 .setDescription('流浪者的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:樹王聖體菇、刀鐔(野伏眾)、永續機芯(龍獸)
天賦素材:篤行(禮拜三、禮拜六)、刀鐔(野伏眾)、空行的虛鈴(散兵)
聖遺物:樓閣、追憶、餘響
聖遺物有效詞條:攻擊、雙爆、充能
武器:圖萊杜拉的回憶、四風、 天空、神樂、匣裡、流浪`)
}
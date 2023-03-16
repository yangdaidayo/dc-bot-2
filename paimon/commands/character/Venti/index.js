import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('溫迪')
 .setDescription('溫迪的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:塞西莉亞花、史萊姆凝液、颶風之種(無相風)
天賦素材:詩文(禮拜六、禮拜三)、史萊姆凝液、北風之尾(北風狼)
聖遺物:風套
聖遺物有效詞條:精通、充能
武器:終末、西風弓、祭禮`)
}

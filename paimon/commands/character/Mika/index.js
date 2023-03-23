import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('米卡')
 .setDescription('米卡的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:鉤鉤果、徽記(愚人眾)、蒼礫蕊羽(沙蟲)
天賦素材:詩文(禮拜三、禮拜六)、徽記(愚人眾)、無心的淵鏡(散兵)
聖遺物:宗室
聖遺物有效詞條:充能、生命
武器:西風、黑纓槍`)
}
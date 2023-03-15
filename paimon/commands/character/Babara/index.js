import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('芭芭拉')
 .setDescription('芭芭拉的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:慕風蘑菇、繪卷(丘丘薩滿)、淨水之心(純水精靈)
天賦素材:自由(禮拜一、禮拜四)、繪卷(丘丘薩滿)、北風之環(北風狼)
聖遺物:少女、海染、千岩
聖遺物有效詞條:生命、充能
武器:討龍、金珀`)
}

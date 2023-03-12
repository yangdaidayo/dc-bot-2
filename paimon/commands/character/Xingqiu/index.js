import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('行秋')
 .setDescription('行秋的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:霓裳花、破損的面具(丘丘人)、淨水之心(純水精靈)
天賦素材:黃金(禮拜三、禮拜六)、破損的面具(丘丘人)、北風之尾(北風狼)
聖遺物:絕緣、 宗室、2水套2宗室
聖遺物有效詞條:攻擊、雙爆、充能
武器: 祭禮、西風、天目`)
}

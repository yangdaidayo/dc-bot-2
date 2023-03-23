import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('柯萊')
 .setDescription('柯萊的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:樹王聖體菇、箭簇(丘丘弓手)、蕈王喙勾(草雞)
天賦素材:篤行(禮拜三、禮拜六)、箭簇(丘丘弓手)、禍神之楔淚(雷神)
聖遺物:宗室、草套
聖遺物有效詞條:攻擊、充能、雙爆
武器:終末、冬極白星、天空、落霞、絕弦、西風、祭禮`)
}
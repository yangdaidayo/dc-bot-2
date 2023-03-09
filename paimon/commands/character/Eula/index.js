import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('優菈')
 .setDescription('優菈的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:蒲公英籽、破損的面具(丘丘人)、晶凝之華(無相冰)
天賦素材:抗爭(禮拜二、禮拜五)、破損的面具(丘丘人)、龍王之冕(若陀龍王)
聖遺物:蒼白
聖遺物有效詞條:攻擊、雙爆、充能
武器:松籟、狼末、無工、螭骨劍、雪葬、試作古華`)
}
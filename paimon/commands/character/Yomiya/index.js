import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('宵宮')
 .setDescription('宵宮的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:鳴草、繪卷(丘丘薩滿)、陰燃之珠(無相火)
天賦素材:浮世(禮拜一、禮拜四)、繪卷(丘丘薩滿)、龍王之冕(若陀龍王)
聖遺物:追憶、餘響
聖遺物有效詞條:攻擊、雙爆、精通、充能(較不重要)
武器:飛雷、弓藏、彈弓、破魔、天空`)
}
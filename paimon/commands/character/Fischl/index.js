import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('菲謝爾')
 .setDescription('菲謝爾的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:小燈草、箭簇(丘丘弓手)、雷光稜鏡(無相雷)
天賦素材:詩文(禮拜三、禮拜六)、箭簇(丘丘弓手)、北風的魂匣(北風狼)
聖遺物:2如雷2攻擊、平雷、飾金
聖遺物有效詞條:攻擊、雙爆、精通、充能
武器:若水、絕弦、暗巷獵手`)
}

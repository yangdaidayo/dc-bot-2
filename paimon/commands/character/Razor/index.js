import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('雷澤')
 .setDescription('雷澤的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:鈎鈎果、破損的面具(丘丘人)、雷光稜鏡(無相雷)
天賦素材:抗爭(禮拜二、禮拜五)、破損的面具(丘丘人)、東風之爪(風魔龍)
聖遺物:蒼白、樂園、飾金、樂園
聖遺物有效詞條:攻擊、雙爆、充能、精通(綻放隊)
武器: 松籟、狼莫、天空、螭骨、西風、慕裕龍血的劍`)
}

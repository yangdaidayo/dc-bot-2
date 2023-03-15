import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('七七')
 .setDescription('七七的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:琉璃袋、繪卷(丘丘薩滿)、極寒之核(急凍樹)
天賦素材:繁榮(禮拜一、禮拜四)、繪卷(丘丘薩滿)、北風之尾(北風狼)
聖遺物:海染、宗室、千岩
聖遺物有效詞條:攻擊、充能
武器:西風、祭禮、天空、原木刀`)
}

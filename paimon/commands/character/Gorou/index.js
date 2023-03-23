import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('五郎')
 .setDescription('五郎的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:珊瑚珍珠、浮游乾核(漂浮靈)、恆常機關之心(恆常機關陣列)
天賦素材:天光(禮拜三、禮拜六)、浮游乾核(漂浮靈)、熔毀之刻(女士)
聖遺物:流放者(4星)、2絕緣/2華館/2流放者(3選2)
聖遺物有效詞條:防禦、充能
武器:西風、終末、祭禮`)
}
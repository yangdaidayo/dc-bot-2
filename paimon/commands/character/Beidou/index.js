import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('北斗')
 .setDescription('北斗的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:夜泊石、鴉印(盜寶團)、雷光棱鏡(無相雷)
天賦素材:黃金(禮拜三、禮拜六)、鴉印(盜寶團)、東風的吐息(風魔龍)
聖遺物:絕緣、2如雷2宗室
聖遺物有效詞條:攻擊、充能、雙爆、精通
武器:狼末、螭骨、惡王丸`)
}

import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('迪希雅')
 .setDescription('迪希雅的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:沙脂蛹、紅綢(鍍金旅團)、導光四面體(半永恆統轄矩陣)
天賦素材:篤行(禮拜三、禮拜六)、紅綢(鍍金旅團)、傀儡的懸絲(散兵)
聖遺物:絕緣、渡火(速切副c)、千岩(輔助)、樂園、飾金、魔女(烈綻放)
聖遺物有效詞條:攻擊、精通、雙爆
武器:
副c:葦海信標、狼末、惡王丸、赤角、天空大劍
輔助:祭禮、森林王器、鐘劍、鐵影闊劍
烈綻放:祭禮、飾鐵之花、沐浴龍血的劍、瑪海菈的水色`)
}
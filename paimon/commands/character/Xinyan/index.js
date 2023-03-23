import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('辛焱')
 .setDescription('辛焱的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:琉璃袋、鴉印(盜寶團)、常燃火種(爆炎樹)
天賦素材:黃金(禮拜三、禮拜六)、鴉印(盜寶團)、吞天之鯨(公子)
聖遺物:2蒼白2染血、絕緣(速切副c、主c)、千岩(物理輔助)
聖遺物有效詞條:攻擊、精通、雙爆、防禦(輔助)
武器:
副c:惡王丸、赤角
輔助:西風、白影劍、桂木斬長正
主c:赤角、狼末、無工、螭骨劍`)
}
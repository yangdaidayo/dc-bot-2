import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('早柚')
 .setDescription('早柚的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:晶化骨髓、騙騙花蜜、魔偶機心(魔偶劍鬼)
天賦素材:天光(禮拜三、禮拜六)、騙騙花蜜、鎏金之鱗(若陀龍王)
聖遺物:風套、宗室
聖遺物有效詞條:攻擊、精通、充能
武器:狼末、西風、松籟、飾鐵之花、森林王器`)
}
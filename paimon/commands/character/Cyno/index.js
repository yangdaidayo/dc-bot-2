import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('賽諾')
 .setDescription('賽諾的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:聖金蟲、封魔繪卷(丘丘薩滿)、藏雷野實(掣電樹)
天賦素材:諍言(禮拜一、禮拜四)、封魔繪卷(丘丘薩滿)、凶將之手眼(雷神)
聖遺物:飾金、如雷
聖遺物有效詞條:攻擊、精通、雙爆、充能
武器:赤沙之杖、鳥槍、護摩、決鬥槍、白纓槍`)
}
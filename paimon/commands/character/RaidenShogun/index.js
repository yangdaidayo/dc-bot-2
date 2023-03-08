import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('雷電將軍')
 .setDescription('雷電將軍的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:天雲草實、刀鐔(野伏眾)、雷霆數珠(雷音權限)
天賦素材:天光(禮拜三、禮拜六)、刀鐔(野伏眾)、熔毀之刻(女士)
聖遺物:絕緣
聖遺物有效詞條:攻擊、精通、充能、雙爆
武器:薙草之稻光、薄荷槍、魚叉`)
}
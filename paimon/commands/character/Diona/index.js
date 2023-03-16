import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('迪奧娜')
 .setDescription('迪奧娜的素材')

export const action = async (ctx) =>{
    ctx.reply(`突破素材:嘟嘟蓮、箭簇(丘丘弓手)、極寒之核(急凍樹)
天賦素材:自由(禮拜一、禮拜四)、箭簇(丘丘弓手)、魔王之刃(公子)
聖遺物:2少女/海染 2千岩/絕緣
聖遺物有效詞條:生命、充能
武器:祭禮、終末、反曲弓、西風`)
}

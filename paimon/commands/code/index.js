import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('help')
 .setDescription('指令列表')

export const action = async (ctx) =>{
    ctx.reply(`https://docs.google.com/document/d/1-1sr70HhWE3GR8WFLvTJjnSL19glEOxnJ53T5WSJ06U/edit?usp=sharing`)
}
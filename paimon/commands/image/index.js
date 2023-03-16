import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
 .setName('img')
 .setDescription('tset');

export const action = async (ctx) => {
    const embed = {
        image: {
            url: 'https://pixiv.cat/106137498.jpg',
        },
    };
    ctx.reply({ embeds: [embed] });
};

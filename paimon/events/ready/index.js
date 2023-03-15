import {Events} from "discord.js"

export const event ={
    name: Events.ClientReady,
    once: true,
}

export const action = (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`)
//      const channel = c.channels.cache.get('1001340181166698530')
//      channel.send(`派蒙來找旅行者啦~
// 深淵要更新了，
// 還沒挑戰的旅行者記得快去打喔`) 
}
import {Queue, Track} from "discord-player";
import {Message, TextChannel} from "discord.js";
import {botId} from "../Bot";

export function event(queue: Queue<TextChannel>, track: Track) {
    const text = `🎶 | Started playing: **${track.title}** in **${queue.connection.channel.name}**!`;
    if (myMessageLast(queue.metadata)) {
        queue.metadata.lastMessage.edit(text).catch(console.log)
    } else {
        queue.metadata.send(text).catch(console.log)
    }
}

function myMessageLast(channel: TextChannel): boolean {
    return channel.lastMessage.author.id == botId && isTrackPlayingMessage(channel.lastMessage)
}

function isTrackPlayingMessage(msg: Message) {
    return msg.content.includes('Started playing');
}
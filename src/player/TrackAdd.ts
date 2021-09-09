import {Queue, Track} from "discord-player";
import {TextChannel} from "discord.js";

export function event(queue:Queue<TextChannel>, track:Track) {
    queue.metadata.send(`🎶 | Track **${track.title}** queued!`).catch(console.log)
}
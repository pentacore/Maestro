import {Queue} from "discord-player";
import {TextChannel} from "discord.js";

export function event(queue:Queue<TextChannel>) {
    queue.metadata.send("❌ | I was manually disconnected from the voice channel, clearing queue!").catch(console.log)
}
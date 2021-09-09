import {Queue} from "discord-player";
import {TextChannel} from "discord.js";

export function event(queue:Queue<TextChannel>) {
    queue.metadata.send("❌ | Nobody is in the voice channel, leaving...").catch(console.log)
}
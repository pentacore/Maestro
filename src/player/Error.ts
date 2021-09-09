import {Queue} from "discord-player";
import {TextChannel} from "discord.js";

export function event(queue:Queue<TextChannel>, error:Error) {
    console.log(`[${queue.guild.name}] Error emitted from the queue: ${error.message}`);
}
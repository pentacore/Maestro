import {Queue} from "discord-player";
import {TextChannel} from "discord.js";

export function event(queue:Queue<TextChannel>) {
    queue.metadata.send("✅ | Queue finished!").catch(console.log);
}
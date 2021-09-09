import {Intents} from "discord.js";
import {Client} from "./types/Client";
process.chdir(__dirname);
const intents: number[] = [Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]
const client = new Client({intents: intents});
export const botId = client.user.id

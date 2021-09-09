import {Command} from "../../types/Command";
import { Message} from "discord.js";
import {Client} from "../../types/Client";

export default new Command("Leave", "Commanding Command", exec)

function exec(client: Client, message: Message, args: string):Promise<string> {
    return new Promise((resolve,reject) => {
        resolve("")
    })
}
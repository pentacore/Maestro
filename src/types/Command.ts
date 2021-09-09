import {Client, Message} from "discord.js";

export class Command {
    public readonly name: string
    public readonly aliases: string[]
    public readonly exec: (client: Client, message: Message, args: string) => Promise<string>
    public readonly protected: boolean
    public readonly help:string

    constructor(name: string, help: string, exec: (client: Client, message: Message, args: string) => Promise<string>, aliases: string[] = [], protect: boolean = false) {
        this.name = name;
        this.aliases = aliases;
        this.exec = exec;
        this.protected = protect;
        this.help = help;
    }
}
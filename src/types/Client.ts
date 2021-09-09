import {Client as DClient, ClientOptions, Collection, MessageEmbed} from "discord.js";
import {Player} from "discord-player";
import {Command} from "./Command";
import {Config} from "../Config";
import * as fs from "fs";
import {lcFirst} from "./Helpers";

export class Client extends DClient {
    public player: Player
    public commands: Collection<string, Command> = new Collection<string, Command>()
    public config: Config = new Config()

    constructor(options: ClientOptions) {
        super(options);
        this.loadCommands()
        this.player = new Player(this)
        this.loadEvents()
        this.loadPlayerEvents()
        this.login(process.env.DISCORD_TOKEN).then(console.log).catch(console.log)
    }

    private loadCommands() {
        fs.readdirSync("./commands").filter(file => !file.endsWith('.js')).forEach(dirs => {
            const commands = fs.readdirSync(`./commands/${dirs}`).filter(file => file.endsWith('.js'));

            for (const file of commands) {
                const command:Command = require(`../commands/${dirs}/${file}`).default;
                console.log(`Loading command ${file}`);
                this.commands.set(command.name.toLowerCase(), command);
                if (command.aliases.length > 0) {
                    command.aliases.forEach(alias => {
                        if (!this.commands.has(alias))
                            this.commands.set(alias, command)
                    })
                }
            }
        });
    }

    private loadEvents() {
        for (const file of fs.readdirSync('./events').filter(f => f.endsWith('.js'))) {
            console.log(`Loading discord.js event ${file}`);
            const event = require(`../events/${file}`).event;
            this.on(lcFirst(file.split(".")[0]), event);
        }
    }

    private loadPlayerEvents() {
        for (const file of fs.readdirSync('./player').filter(f => f.endsWith('.js'))) {
            console.log(`Loading discord-player event ${file}`);
            const event = require(`../player/${file}`);
            // @ts-ignore
            this.player.on(lcFirst(file.split(".")[0]), event);
        }
    }

    private loadConfig() {

    }

    public getMessageEmbed() {
        return new MessageEmbed()
            .setColor('#e0218a')
            .setTimestamp()
            .setFooter('Maestro is brought to you by Penta, please report any problems');
    }
}
import { client } from "../../client/Client";
import { BaseCommand } from "../baseCommand/BaseCommand";
import { ActivatorType } from "../baseCommand/BaseCommandOptions";

export default class Ping extends BaseCommand {

    constructor() {
        super({
            name: "ping",
            info: "says the ping",
            type: "fun",
            activator: ActivatorType.STARTS_WITH,
        })

        console.log(client.user)
    }

    public async run(): Promise<void> {
        this.message.channel.send(client.ws.ping);
    }

}
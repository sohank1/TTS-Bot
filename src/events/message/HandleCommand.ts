import { commands } from "../../commands/baseCommand/BaseCommand";
import { client } from "../../client/Client";
import { BaseEvent } from "../baseEvent/BaseEvent";
import { ActivatorType } from "../../commands/baseCommand/BaseCommandOptions";

export default class HandleCommand extends BaseEvent {


    public init(): void {
        client.on("ready", async () => {
            await client.user.setStatus('idle');

            console.log(client.user.presence)

        })


        client.on("message", (message) => {
            for (const c of commands)
                for (const a of c.options.aliases) {
                    console.log(a)
                    if (c.options.activator === ActivatorType.EQUAL_TO && message.content === client.prefix + a) {
                        c.setMessage(message);
                        c.run();
                    }
                    else if (c.options.activator === ActivatorType.STARTS_WITH && message.content.startsWith(client.prefix + a)) {
                        c.setMessage(message);
                        c.run();
                    }
                }
        });
    }

}

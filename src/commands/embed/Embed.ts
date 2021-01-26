import { Embed } from "../../client/embeds/Embed";
import { BaseCommand } from "../baseCommand/BaseCommand";
import { Activator } from "../baseCommand/BaseCommandOptions";

export default class embed extends BaseCommand {

    constructor() {
        super({
            name: "Embed",
            info: "test for embed class",
            type: "test",
            activator: Activator.STARTS_WITH,
        })
    }

    public async run(): Promise<void> {
        new Embed()
            .setTitle(this.options.name)
            .setDescription(this.options.info)
            .addField("Name", this.options.name)
            .addField("Info", this.options.info)
            .addField("Type", this.options.type)
            .addField("Activator", this.options.activator.toString())
            .sendTo(this.message.channel);
    }

}
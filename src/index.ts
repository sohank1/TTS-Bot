import "dotenv/config"
import { Client, TextChannel } from "discord.js";

const client = new Client();
client.login(process.env.BOT_TOKEN);

client.on("ready", async () => {
    const ch = <TextChannel>client.channels.cache.find((c: TextChannel) => c.name.includes('logs'));
    console.log(await ch.send('The new bot project works.'));
});
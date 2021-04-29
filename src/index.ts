import "dotenv/config";
import "./client/Client";
import { join } from "path";
import { BaseCommand } from "./commands/baseCommand/BaseCommand";
import { BaseEvent } from "./events/baseEvent/BaseEvent";
import "./websocket/WebSocket"

BaseCommand.register(join(__dirname, "commands"));
BaseEvent.register(join(__dirname, "events"));
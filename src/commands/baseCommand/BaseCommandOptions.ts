export interface BaseCommandOptions {
    name: string;
    type: string;
    info: string;
    activator: ActivatorType
    aliases?: string[];
}

export enum ActivatorType {
    STARTS_WITH,
    EQUAL_TO
}
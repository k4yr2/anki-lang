import { FolgenLoadable } from "@fuuwille/folgen-temp";

export interface AppSettings {
    openAI : {
        key : FolgenLoadable<string>;
    }
}

export default AppSettings;
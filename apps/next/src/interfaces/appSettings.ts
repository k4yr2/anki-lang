import { FolgenLoadable } from "@fuuwille/folgen-temp";

export interface AppSettings {
    openAI : {
        key : FolgenLoadable<string>;
    }
    docs : {
        folder : FolgenLoadable<string>;
    }
}

export default AppSettings;
import { FolgenVerifiable } from "@fuuwille/folgen-temp";

export interface AppSettings {
    openAI : {
        key : FolgenVerifiable<string>;
    }
    docs : {
        folder : FolgenVerifiable<string>;
    }
}

export default AppSettings;
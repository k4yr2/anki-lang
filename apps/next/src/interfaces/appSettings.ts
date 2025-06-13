export interface AppSettings {
    openAI : OpenAISettings
}

export default AppSettings;

//

import { FolgenLoadable } from "@fuuwille/folgen-temp";

export interface OpenAISettings {
    key : FolgenLoadable<string>;
}
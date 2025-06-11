export interface SettingsAPI {
    openAI: {
        getKey: () => Promise<string | undefined>;
        setKey: (value: string) => Promise<void>;
    };
}
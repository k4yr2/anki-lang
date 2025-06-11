export interface SettingsAPI {
    openAI: {
        getKey: () => string | undefined;
        setKey: (value: string) => void;
    };
}
export interface API {
    openAI: {
        getKey: () => Promise<string | undefined>;
        setKey: (value: string) => Promise<void>;
    };
}
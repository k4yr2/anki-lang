export interface API {
    dialog: {
        pickFolder: () => Promise<string | undefined>;
    },
    openAI: {
        getKey: () => Promise<string | undefined>;
        setKey: (value: string) => Promise<void>;
    };
}
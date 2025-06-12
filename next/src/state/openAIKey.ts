export interface OpenAIKey {
    key: string;
    status: "idle" | "loading" | "error" | "success";
}
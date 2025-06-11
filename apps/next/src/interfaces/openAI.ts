interface OpenAI {
    key: string;
    status: "idle" | "loading" | "error" | "success";
}

export default OpenAI;
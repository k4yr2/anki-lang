interface OpenAI {
    key : string | undefined;
    status: "idle" | "loading" | "error" | "success";
}

export default OpenAI;
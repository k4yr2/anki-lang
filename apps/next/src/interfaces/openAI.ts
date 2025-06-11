interface OpenAI {
    key : OpenAIKey;
}

export default OpenAI;

export interface OpenAIKey {
    value : string;
    verified : boolean;
    loading : boolean;
}
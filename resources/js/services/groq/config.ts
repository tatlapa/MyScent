export const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
export const GROQ_API_KEY = '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';

export const GROQ_CONFIG = {
    model: "mixtral-8x7b-32768",
    temperature: 0.7,
    max_tokens: 1000,
    top_p: 1,
    stream: false,
    headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
    }
} as const;

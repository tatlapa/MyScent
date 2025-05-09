import axios from 'axios';
import {GROQ_API_KEY, GROQ_API_URL, GROQ_CONFIG} from './config';
import { GroqAPIError } from './errors';

export async function makeGroqRequest(prompt: string): Promise<string> {
    try {
        const response = await axios.post(
            GROQ_API_URL,
            {
                model: GROQ_CONFIG.model,
                temperature: GROQ_CONFIG.temperature,
                max_tokens: GROQ_CONFIG.max_tokens,
                top_p: GROQ_CONFIG.top_p,
                messages: [
                    {
                        role: 'system',
                        content: 'You are a master perfumer with extensive knowledge of fragrances.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ]
            },
            {
                headers: GROQ_CONFIG.headers
            }
        );

        if (!response.data?.choices?.[0]?.message?.content) {
            throw new GroqAPIError('Invalid response format from GROQ API');
        }

        return response.data.choices[0].message.content.trim();
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new GroqAPIError(
                `GROQ API error: ${error.response?.data?.error?.message || error.message}`
            );
        }
        throw new GroqAPIError('An unexpected error occurred while generating the description');
    }
}

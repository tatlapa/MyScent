import { CustomizationValue } from '@/components/views/home/perfume-crafter/sections/customize-further/types';
import { makeGroqRequest } from './api';
import { generateCustomizationPrompt } from './prompts';
import { GroqAPIError } from './errors';

/**
 * Generate a custom description based on user preferences
 */
export async function generateCustomDescription(
    values: CustomizationValue[]
): Promise<string> {
    if (!values.length) return '';

    try {
        const prompt = generateCustomizationPrompt(values);
        return await makeGroqRequest(prompt);
    } catch (error) {
        if (error instanceof GroqAPIError) {
            throw error;
        }
        throw new Error('Failed to generate perfume description');
    }
}

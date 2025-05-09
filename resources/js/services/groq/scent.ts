import { CustomizationValue, Tag } from '@/types/perfume-crafter';
import { makeGroqRequest } from './api';
import { generatePrompt } from './prompts';
import { formatTagsForPrompt, formatCustomPreferences } from './utils';
import { GroqAPIError } from './errors';

/**
 * Generate a scent description based on selected tags and custom values
 */
export async function generateScentDescription(
    tags: Tag[],
    customValues: CustomizationValue[]
): Promise<string> {
    if (!tags.length) return '';

    try {
        const formattedTags = formatTagsForPrompt(tags);

        const preferences = formatCustomPreferences(customValues);

        const prompt = generatePrompt(formattedTags, preferences);



        return await makeGroqRequest(prompt);
    } catch (error) {
        if (error instanceof GroqAPIError) {
            throw error;
        }
        console.error('Error generating scent description:', error);
        throw new GroqAPIError('Failed to generate description. Please try again.');
    }
}

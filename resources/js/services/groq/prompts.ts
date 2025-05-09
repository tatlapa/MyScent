import { FormattedTags, CustomPreferences } from './types';
import { CustomizationValue } from '@/types/perfume-crafter';

export function generateCustomizationPrompt(values: CustomizationValue[]): string {
    const formattedPreferences = values.map(({ category, value }) =>
        `* **${category}:** ${value}`
    ).join('\n');

    return `As a master perfumer, create a fragrance description based on these custom preferences:

    ${formattedPreferences}

    **Your Task:**

    Create a brief, evocative description (maximum 40 words) that captures how these preferences would translate into a unique fragrance. Focus on the sensory experience and emotional impact.

    The description should be specific, memorable, and highlight how each preference influences the final fragrance.`;
}

export function generatePrompt(tags: FormattedTags, preferences: CustomPreferences): string {
    const { gender, age, emotions, occasions, color, scentFamilies } = tags;

    return `You are a master perfumer tasked with creating a unique fragrance.
    Describe this perfume based on the following characteristics provided by the user:

    ${gender ? `* **Target Gender:** ${gender}` : ''}
    ${age ? `* **Target Age Group:** ${age}` : ''}
    ${emotions.length > 0 ? `* **Desired Emotions:** This fragrance should evoke feelings of ${emotions.join(', ')}.` : ''}
    ${occasions.length > 0 ? `* **Ideal Occasions:** This perfume is intended for use during ${occasions.join(', ')}.` : ''}
    ${color ? `* **Color Inspiration:** The color ${color} should be reflected in the fragrance's character.` : ''}
    ${scentFamilies.length > 0 ? `* **Scent Families:** The perfume should incorporate these scent families: ${scentFamilies.join(', ')}.` : ''}
    ${preferences.story ? `* **Story:** ${preferences.story}` : ''}
    ${preferences.nature ? `* **Nature Inspiration:** ${preferences.nature}` : ''}
    ${preferences.style ? `* **Style:** ${preferences.style}` : ''}

    **Your Task:**

    1. Craft a single, evocative sentence (maximum of 40 words) that captures the essence of this unique fragrance. Describe its character, key notes, and the overall impression it creates.
    2. Recommend a real, existing perfume that best matches these preferences. Provide the name of the perfume and a match percentage (0-100) indicating how well it fits.

    Format your response as follows:

    {
      "description": "[Your scent description]",
      "perfume": "[Name of the existing perfume]",
      "match": [Match percentage]
    }
    `;
}

export function generatePerfumePrompt(tags: FormattedTags, preferences: CustomPreferences): string {
    const { gender, age, emotions, occasions, color, scentFamilies } = tags;

    return `You are a master perfumer tasked with creating a unique fragrance.
    Recommend a real, existing perfume that best matches the following characteristics provided by the user:

    ${gender ? `* **Target Gender:** ${gender}` : ''}
    ${age ? `* **Target Age Group:** ${age}` : ''}
    ${emotions.length > 0 ? `* **Desired Emotions:** This fragrance should evoke feelings of ${emotions.join(', ')}.` : ''}
    ${occasions.length > 0 ? `* **Ideal Occasions:** This perfume is intended for use during ${occasions.join(', ')}.` : ''}
    ${color ? `* **Color Inspiration:** The color ${color} should be reflected in the fragrance's character.` : ''}
    ${scentFamilies.length > 0 ? `* **Scent Families:** The perfume should incorporate these scent families: ${scentFamilies.join(', ')}.` : ''}
    ${preferences.story ? `* **Story:** ${preferences.story}` : ''}
    ${preferences.nature ? `* **Nature Inspiration:** ${preferences.nature}` : ''}
    ${preferences.style ? `* **Style:** ${preferences.style}` : ''}

    **Your Task:**

    Provide the name of the perfume and a match percentage (0-100) indicating how well it fits.

    Format your response as follows:

    {
      "perfume": "[Name of the existing perfume]",
      "match": [Match percentage],
      "description": "[Your scent description]"
    }
    `;
}

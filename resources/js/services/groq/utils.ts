import { Tag, CustomizationValue } from '@/types/perfume-crafter';
import { FormattedTags, CustomPreferences, PerfumeRecommendation } from './types';

export function formatTagsForPrompt(tags: Tag[]): FormattedTags {
    return {
        gender: tags.find(t => t.category === 'gender')?.text,
        age: tags.find(t => t.category === 'age')?.text,
        emotions: tags.filter(t => t.category === 'emotion').map(t => t.text),
        occasions: tags.filter(t => t.category === 'occasion').map(t => t.text),
        color: tags.find(t => t.category === 'color')?.text,
        scentFamilies: tags
            .filter(t => t.category === 'Scent Family')
            .map(t => t.text.split('(')[0].trim())
    };
}

export function formatCustomPreferences(values: CustomizationValue[]): CustomPreferences {
    return values.reduce((acc, { category, value }) => ({
        ...acc,
        [category.toLowerCase()]: value
    }), {} as CustomPreferences);
}

export function parsePerfumeResponse(response: string): PerfumeRecommendation[] {
    try {
        const parsed = JSON.parse(response);
        if (parsed && parsed.perfume && parsed.match && parsed.description) {
            return [{
                perfumeName: parsed.perfume,
                matchPercentage: parseInt(parsed.match, 10),
                description: parsed.description
            }];
        }
    } catch (e) {
        console.error('Error parsing JSON response:', e);
    }
    return [];
}

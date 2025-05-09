// services/groq/perfume.ts
import type { Tag, CustomizationValue } from '@/types/perfume-crafter';
import axios from 'axios';

export interface PerfumeRecommendation {
    perfume: string;
    match: number;
    description: string;
}

export class GroqAPIError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'GroqAPIError';
    }
}

export async function generatePerfumeRecommendations(
    tags: Tag[],
    customValues: CustomizationValue[]
): Promise<PerfumeRecommendation[]> {
    if (!tags.length) return [];


    try {

        console.log(tags)

        // Formatter les tags selon la structure attendue par le backend
        const formattedRequest = {
            tags: {
                gender: tags.find(t => t.category === 'gender')?.text,
                age: tags.find(t => t.category === 'age')?.text,
                emotions: tags.filter(t => t.category === 'emotion').map(t => t.text),
                occasions: tags.filter(t => t.category === 'occasion').map(t => t.text),
                color: tags.find(t => t.category === 'color')?.text,
                // scentFamilies: tags.filter(t => t.category === 'scent').map(t => t.text),
                nature: tags.filter(t => t.category === 'Nature').map(t => t.text),
                style: tags.filter(t => t.category === 'Style').map(t => t.text),
            },
            customValues: customValues.map(value => ({
                category: value.category,
                value: value.value
            }))
        };

        const response = await axios.post<{
            status: string;
            data: PerfumeRecommendation | PerfumeRecommendation[];
            message?: string;
        }>('/api/groq/perfume-match', formattedRequest);

        if (response.data.status === 'error') {
            throw new GroqAPIError(response.data.message || 'Failed to generate recommendations');
        }

        // Si le backend renvoie un seul résultat, on le met dans un tableau
        const recommendations = Array.isArray(response.data.data)
            ? response.data.data
            : [response.data.data];

        // Valider le format de chaque recommandation
        return recommendations.map(rec => validateRecommendation(rec));

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error making request to backend:', error.response?.data);
            throw new GroqAPIError(
                error.response?.data?.message || 'Failed to communicate with the server'
            );
        }
        if (error instanceof GroqAPIError) {
            throw error;
        }
        console.error('Error generating perfume recommendations:', error);
        throw new GroqAPIError('Failed to generate recommendations. Please try again.');
    }
}

function validateRecommendation(data: any): PerfumeRecommendation {
    if (!data.perfume || typeof data.perfume !== 'string') {
        throw new GroqAPIError('Invalid perfume name in response');
    }
    if (typeof data.match !== 'number' || data.match < 0 || data.match > 100) {
        throw new GroqAPIError('Invalid match percentage in response');
    }
    if (!data.description || typeof data.description !== 'string') {
        throw new GroqAPIError('Invalid description in response');
    }

    return {
        perfume: data.perfume,
        match: data.match,
        description: data.description
    };
}

// Types pour les réponses du serveur
interface ApiResponse<T> {
    status: 'success' | 'error';
    data?: T;
    message?: string;
}

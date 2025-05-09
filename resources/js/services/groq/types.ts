import { Tag } from '../../types';
import { CustomizationValue } from '../../components/CustomizeFurther/types';

export interface FormattedTags {
    gender?: string;
    age?: string;
    emotions: string[];
    occasions: string[];
    color?: string;
    scentFamilies: string[];
}

export interface CustomPreferences {
    story?: string;
    nature?: string;
    style?: string;
}

export interface GroqResponse {
    choices: Array<{
        message: {
            content: string;
        };
    }>;
}

export interface PerfumeRecommendation {
    description: string;
    perfumeName: string;
    matchPercentage: number;
}

export interface Tag {
    text: string;
    category: string;
    color?: string;
}
export interface CustomizationQuestion {
    id: string;
    question: string;
    placeholder: string;
    category: string;
}

export interface CustomizationValue {
    category: string;
    value: string;
}

export interface PerfumeComposition {
    id: number;
    name: string;
    rating: number;
    similar_purpose_brand_name: SimilarPurposeBrand;
    closest_scent_brand_name: ClosestScentBrand;
    emotion_evolution_graph: EmotionEvolutionGraph;
    occasion_rating_graph: OccasionRatingGraph;
    image_url: string | null;
}

export interface SimilarPurposeBrand {
    name: string;
    match_percentage: number;
    plus: string;
    cons: string;
}

export interface ClosestScentBrand {
    name: string;
    match_percentage: number;
    plus: string;
    cons: string;
}

export interface EmotionEvolutionGraph {
    labels: string[];
    data: any[];
}

export interface OccasionRatingGraph {

}

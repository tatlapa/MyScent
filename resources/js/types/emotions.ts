export interface EmotionCategory {
    id: string;
    title: string;
    description: string;
    emotions: Emotion[];
}

export interface Emotion {
    name: string;
    description: string;
}

export const emotionCategories: EmotionCategory[] = [
    {
        id: 'positive',
        title: 'Joy & Happiness',
        description: 'Uplifting emotions that bring pleasure and contentment',
        emotions: [
            {
                name: 'Joy',
                description: 'Pure happiness and delight'
            },
            {
                name: 'Comfort',
                description: 'Familiar warmth and security'
            },
            {
                name: 'Nostalgia',
                description: 'Memories of cherished moments'
            }
        ]
    },
    {
        id: 'calming',
        title: 'Peace & Tranquility',
        description: 'Soothing emotions for relaxation and inner peace',
        emotions: [
            {
                name: 'Relaxation',
                description: 'Deep sense of calm'
            },
            {
                name: 'Tranquility',
                description: 'Peaceful state of mind'
            },
            {
                name: 'Serenity',
                description: 'Complete peace and harmony'
            }
        ]
    },
    {
        id: 'confidence',
        title: 'Power & Confidence',
        description: 'Empowering emotions that boost self-assurance',
        emotions: [
            {
                name: 'Confidence',
                description: 'Self-assured strength'
            },
            {
                name: 'Empowerment',
                description: 'Inner strength and capability'
            },
            {
                name: 'Assertiveness',
                description: 'Bold self-expression'
            }
        ]
    },
    {
        id: 'sensual',
        title: 'Sensuality & Attraction',
        description: 'Seductive emotions that enhance allure',
        emotions: [
            {
                name: 'Sensuality',
                description: 'Physical and emotional attraction'
            },
            {
                name: 'Passion',
                description: 'Intense romantic desire'
            },
            {
                name: 'Allurement',
                description: 'Magnetic attraction'
            }
        ]
    },
    {
        id: 'energetic',
        title: 'Energy & Vitality',
        description: 'Invigorating emotions that stimulate and refresh',
        emotions: [
            {
                name: 'Energy',
                description: 'Physical and mental vitality'
            },
            {
                name: 'Focus',
                description: 'Mental clarity and concentration'
            },
            {
                name: 'Enthusiasm',
                description: 'Excited anticipation'
            }
        ]
    },
    {
        id: 'ethereal',
        title: 'Dreams & Romance',
        description: 'Ethereal emotions that inspire imagination',
        emotions: [
            {
                name: 'Dreaminess',
                description: 'Lost in pleasant thoughts'
            },
            {
                name: 'Romance',
                description: 'Tender affection'
            },
            {
                name: 'Mystery',
                description: 'Intriguing allure'
            }
        ]
    }
];

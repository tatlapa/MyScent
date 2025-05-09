export const GENDERS = [
    {
        value: 'Male',
        description: 'Masculine fragrances with bold, distinctive character'
    },
    {
        value: 'Female',
        description: 'Feminine scents with elegant, sophisticated notes'
    },
    {
        value: 'Unisex',
        description: 'Versatile fragrances that transcend traditional boundaries'
    }
] as const;

export const AGE_GROUPS = [
    {
        value: 'Young',
        description: '18-25 years'
    },
    {
        value: 'Adult',
        description: '26-45 years'
    },
    {
        value: 'Mature',
        description: '46+ years'
    }
] as const;

export const NATURE_SCENTS = [
    'Pine forests',
    'Ocean breeze',
    'Fresh rain',
    'Mountain air',
    'Garden flowers',
    'Desert sage'
] as const;

export const STYLE_INSPIRATIONS = [
    'Minimalist',
    'Bohemian',
    'Classic',
    'Avant-garde',
    'Romantic',
    'Urban'
] as const;

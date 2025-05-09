import { Section } from './types';
import { SectionIcons } from './icons';

export const sections: Section[] = [
    {
        id: 'about-you',
        title: 'About You',
        icon: SectionIcons.demographics,
        category: 'demographics'
    },
    {
        id: 'emotions',
        title: 'Emotions',
        icon: SectionIcons.emotions,
        category: 'emotion'
    },
    {
        id: 'occasions',
        title: 'Occasions',
        icon: SectionIcons.occasions,
        category: 'occasion'
    },
    {
        id: 'color',
        title: 'Color',
        icon: SectionIcons.color,
        category: 'color'
    }
] as const;

import {
    Users,
    Heart,
    Calendar,
    Palette,
    Beaker,
    Sparkles,
    type LucideIcon
} from 'lucide-vue-next';

export const SectionIcons: Record<string, LucideIcon> = {
    demographics: Users,
    emotions: Heart,
    occasions: Calendar,
    color: Palette,
    scentFamily: Beaker,
    customize: Sparkles
};

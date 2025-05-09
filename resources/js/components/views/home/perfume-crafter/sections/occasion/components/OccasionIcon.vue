// OccasionIcon.vue
<script setup lang="ts">
import { computed } from 'vue';
import {
    Music,
    Briefcase,
    Home,
    Dumbbell,
    Crown,
    Heart,
    Sun,
    GraduationCap,
    PartyPopper,
    Plane,
    Moon
} from 'lucide-vue-next';

interface Props {
    occasion: string
    class?: string
}

const props = defineProps<Props>();

const icon = computed(() => {
    switch (props.occasion.toLowerCase()) {
        case 'daily wear':
            return Sun;
        case 'special occasions':
            return Crown;
        case 'work/office':
            return Briefcase;
        case 'leisure':
            return Home;
        case 'social events':
            return PartyPopper;
        case 'romantic':
            return Heart;
        case 'sports/gym':
            return Dumbbell;
        case 'formal events':
            return GraduationCap;
        case 'celebrations':
            return PartyPopper;
        case 'travel':
            return Plane;
        case 'intimacy':
            return Moon;
        default:
            return Sun;
    }
});
</script>

<template>
    <component :is="icon" :class="class" />
</template>

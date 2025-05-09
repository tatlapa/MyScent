// EmotionIcon.vue
<script setup lang="ts">
import {computed} from 'vue';
import {
    Heart,
    Sparkles,
    Leaf,
    Crown,
    Moon,
    Zap,
    Cloud, LucideIcon
} from 'lucide-vue-next';

interface Props {
    category: string
    class?: string
}

const props = defineProps<Props>();

const iconMap: Record<string, LucideIcon> = {
    'Joy & Happiness': Sparkles,
    'Peace & Tranquility': Moon,
    'Power & Confidence': Crown,
    'Sensuality & Attraction': Heart,
    'Energy & Vitality': Zap,
    'Dreams & Romance': Cloud
};

const Icon = computed(() => iconMap[props.category] || Leaf);
</script>

<template>
    <component :is="Icon" :class="class" />
</template>

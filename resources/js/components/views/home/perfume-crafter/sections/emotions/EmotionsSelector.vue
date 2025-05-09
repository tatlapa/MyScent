// EmotionsSelector.vue
<script setup lang="ts">
import {ref, computed} from 'vue';
import {AlertTriangle} from 'lucide-vue-next';
import {Alert, AlertDescription} from '@/components/ui/alert';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import type {Tag} from '@/types/perfume-crafter';
import {emotionCategories} from '@/types/emotions';
import {EmotionIcon} from './components'

interface Props {
    selectedTags: Tag[]
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (e: 'select', text: string, category: string): void
}>();

const hoveredEmotion = ref<string | null>(null);

const selectedEmotions = computed(() => {
    return props.selectedTags
        .filter(tag => tag.category === 'emotion')
        .map(tag => tag.text);
});

const selectedCategories = computed(() => {
    const categories = new Set(
        props.selectedTags
            .filter(tag => tag.category === 'emotion')
            .map(tag => {
                for (const category of emotionCategories) {
                    if (category.emotions.some(e => e.name === tag.text)) {
                        return category.id;
                    }
                }
                return null;
            })
            .filter(Boolean)
    );
    return categories;
});

const showWarning = computed(() => selectedCategories.value.size > 3);

const isSelected = (emotionName: string) => {
    return selectedEmotions.value.includes(emotionName);
};

const getEmotionIndex = (emotionName: string) => {
    return selectedEmotions.value.indexOf(emotionName);
};

const canSelectMore = computed(() => {
    return selectedEmotions.value.length < 3;
});

const handleSelect = (emotion: string) => {
    emit('select', emotion, 'emotion');
};

const getButtonClass = (emotion: string) => {
    if (!isSelected(emotion)) {
        return 'bg-muted-foreground border-foreground/80 hover:bg-muted-foreground/80';
    }

    const index = getEmotionIndex(emotion);
    if (index === 0) {
        return 'bg-purple-500/50 border-purple-500 hover:bg-purple-500/50'; // Première émotion
    }
    return 'bg-blue-500/50 border-blue-500 hover:bg-blue-500/50'; // Autres émotions
};

const handleMouseEnter = (emotion: string) => {
    hoveredEmotion.value = emotion;
};

const handleMouseLeave = () => {
    hoveredEmotion.value = null;
};
</script>

<template>
    <div class="space-y-4">
        <!-- Légende des émotions -->
        <div class="flex items-center gap-6 p-4 bg-gray-900/50 rounded-lg">
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-purple-500"></div>
                <span class="text-xs text-gray-300">Primary Emotion</span>
            </div>
            <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-blue-500"></div>
                <span class="text-xs text-gray-300">Secondary Emotions</span>
            </div>
            <div class="flex items-center gap-2 ml-auto">
                <span class="text-xs text-gray-400">Select up to 3 emotions</span>
            </div>
        </div>

        <Alert
            v-if="showWarning"
            variant="warning"
            class="bg-amber-50 border-amber-200"
        >
            <AlertTriangle class="h-4 w-4 text-amber-600"/>
            <AlertDescription class="text-amber-600">
                Selecting more than 3 emotion categories might create a confusing scent profile
            </AlertDescription>
        </Alert>

        <div class="grid grid-cols-2 gap-6">
            <Card
                v-for="category in emotionCategories"
                :key="category.id"
                class="bg-transparent border-muted-foreground/20"
            >
                <div class="p-4 space-y-2">
                    <div class="flex items-center gap-2 mb-3">
                        <EmotionIcon
                            :category="category.title"
                            class="text-blue-500 w-5 h-5"
                        />
                        <h4 class="text-primary-foreground text-sm font-medium">
                            {{ category.title }}
                        </h4>
                    </div>

                    <div class="flex flex-wrap gap-2">
                        <TooltipProvider
                            v-for="emotion in category.emotions"
                            :key="emotion.name"
                        >
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button
                                        :class="[
                                            'px-3 py-1.5 h-auto rounded-full transition-all text-xs border',
                                            getButtonClass(emotion.name)
                                        ]"
                                        :disabled="!isSelected(emotion.name) && !canSelectMore"
                                        @click="() => handleSelect(emotion.name)"
                                        @mouseenter="() => handleMouseEnter(emotion.name)"
                                        @mouseleave="handleMouseLeave"
                                    >
                                        <span class="mr-1" v-if="isSelected(emotion.name)">
                                            {{ getEmotionIndex(emotion.name) + 1 }}
                                        </span>
                                        {{ emotion.name }}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent
                                    :side="'top'"
                                    class="bg-white text-gray-700 text-sm p-3 w-64 shadow-apple-lg border border-gray-200"
                                >
                                    {{ emotion.description }}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<style scoped>
.shadow-apple {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

.shadow-apple-lg {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
</style>

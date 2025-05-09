// OccasionSelector.vue
<script setup lang="ts">
import { computed } from 'vue';
import type { Tag } from '@/types/perfume-crafter';
import {
    Briefcase,
    Users,
    Heart,
    Home,
    Mountain,
    Dumbbell,
    Plane,
    Coffee
} from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface Props {
    selectedTags: Tag[]
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (e: 'select', occasion: string): void
}>();

const occasions = [
    {
        name: 'Work/Office',
        icon: Briefcase
    },
    {
        name: 'Social Event',
        icon: Users
    },
    {
        name: 'Date Night',
        icon: Heart
    },
    {
        name: 'Relaxation/Home',
        icon: Home
    },
    {
        name: 'Outdoor Activities',
        icon: Mountain
    },
    {
        name: 'Gym/Fitness',
        icon: Dumbbell
    },
    {
        name: 'Travel',
        icon: Plane
    },
    {
        name: 'Everyday/Casual',
        icon: Coffee
    }
];

const isSelected = (name: string) => {
    return props.selectedTags.some(tag =>
        tag.category === 'occasion' &&
        tag.text === name
    );
};

const handleSelect = (occasion: string) => {
    emit('select', occasion);
};
</script>

<template>
    <div class="space-y-4">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Button
                v-for="{ name, icon } in occasions"
                :key="name"
                variant="outline"
                :class="[
          'h-auto flex flex-col items-center gap-2 py-3 px-2 bg-transparent border-muted-foreground/20 hover:bg-muted-foreground/10 text-white hover:text-white',
          isSelected(name) ? 'bg-blue-500/50 border-blue-500 hover:bg-blue-500/50' : ''
        ]"
                @click="() => handleSelect(name)"
            >
                <component :is="icon" class="w-5 h-5" />
                <span class="text-xs text-center">{{ name }}</span>
            </Button>
        </div>
    </div>
</template>

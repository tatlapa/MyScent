<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Tag } from '@/types/perfume-crafter';
import {CheckboxGroup, SelectionButton, StoryInput} from './components'
import { GENDERS, AGE_GROUPS, NATURE_SCENTS, STYLE_INSPIRATIONS } from './constants';

interface Props {
    selectedTags: Tag[]
}

interface Emits {
    (event: 'select', text: string, category: string): void
    (event: 'preferenceUpdate', category: string, value: string): void
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

// State
const story = ref('');
const selectedNatureScents = ref<string[]>([]);
const otherNatureScent = ref('');
const selectedStyles = ref<string[]>([]);
const otherStyle = ref('');

// Methods
const handleStoryChange = (value: string) => {
    story.value = value;
    if (value.trim()) {
        emit('select', value, 'Story');
        emit('preferenceUpdate', 'Story', value);
    } else {
        emit('select', '', 'Story');
        emit('preferenceUpdate', 'Story', '');
    }
};

const handleNatureScentToggle = (scent: string) => {
    const index = selectedNatureScents.value.indexOf(scent);
    if (index === -1) {
        selectedNatureScents.value.push(scent);
    } else {
        selectedNatureScents.value.splice(index, 1);
    }

    const scentsToInclude = selectedNatureScents.value
        .filter(s => s !== 'Other')
        .concat(otherNatureScent.value ? ['Other'] : []);

    const value = scentsToInclude
        .map(s => s === 'Other' ? otherNatureScent.value : s)
        .join(', ');

    emit('select', value, 'Nature');
    emit('preferenceUpdate', 'Nature', value);
};

const handleStyleToggle = (style: string) => {
    const index = selectedStyles.value.indexOf(style);
    if (index === -1) {
        selectedStyles.value.push(style);
    } else {
        selectedStyles.value.splice(index, 1);
    }

    const stylesToInclude = selectedStyles.value
        .filter(s => s !== 'Other')
        .concat(otherStyle.value ? ['Other'] : []);

    const value = stylesToInclude
        .map(s => s === 'Other' ? otherStyle.value : s)
        .join(', ');

    emit('select', value, 'Style');
    emit('preferenceUpdate', 'Style', value);
};

const isSelected = (category: string, value: string) => {
    return props.selectedTags.some(tag =>
        tag.category === category &&
        tag.text === value
    );
};

const handleBasicToggle = (value: string, category: string) => {
    if (isSelected(category, value)) {
        emit('select', '', category);
    } else {
        emit('select', value, category);
    }
};
</script>

<template>
    <div class="space-y-8">
        <!-- Gender Selection -->
        <div class="space-y-4">
            <h3 class="text-primary-foreground text-sm font-medium">Gender</h3>
            <div class="grid grid-cols-3 gap-3">
                <SelectionButton
                    v-for="{ value, description } in GENDERS"
                    :key="value"
                    :value="value"
                    :description="description"
                    :is-selected="isSelected('gender', value)"
                    @click="() => handleBasicToggle(value, 'gender')"
                />
            </div>
        </div>

        <!-- Age Selection -->
        <div class="space-y-4">
            <h3 class="text-primary-foreground text-sm font-medium">Age Group</h3>
            <div class="grid grid-cols-3 gap-3">
                <SelectionButton
                    v-for="{ value, description } in AGE_GROUPS"
                    :key="value"
                    :value="value"
                    :description="description"
                    :is-selected="isSelected('age', value)"
                    @click="() => handleBasicToggle(value, 'age')"
                />
            </div>
        </div>

        <StoryInput
            :modelValue="story"
            @update:modelValue="handleStoryChange"
        />

        <CheckboxGroup
            title="What scents in nature appeal to you most?"
            :options="NATURE_SCENTS"
            :selected-options="selectedNatureScents"
            :other-value="otherNatureScent"
            @option-toggle="handleNatureScentToggle"
            @update:other-value="(value) => otherNatureScent = value"
        />

        <CheckboxGroup
            title="What's your style inspiration?"
            :options="STYLE_INSPIRATIONS"
            :selected-options="selectedStyles"
            :other-value="otherStyle"
            @option-toggle="handleStyleToggle"
            v-model:other-value="otherNatureScent"
        />
    </div>
</template>

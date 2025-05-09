// ScentFamilySelector.vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import { SCENT_FAMILIES } from '../constants';
import { ScentFamily } from './index';
import type { Tag } from '@/types/perfume-crafter';

interface Props {
    selectedTags: Tag[]
}

interface Emits {
    (e: 'select', text: string, category: string): void
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

// State local pour les intensités
const localIntensities = ref<Record<string, number>>({});

// Récupère l'état de sélection pour une famille donnée
const getSelectionState = (familyName: string) => {
    const tag = props.selectedTags.find(
        (t) => t.category === 'Scent Family' && t.text.startsWith(familyName)
    );

    return {
        isSelected: !!tag,
        intensity: localIntensities.value[familyName] || 0
    };
};

// Convertit une valeur numérique en label
const getIntensityLabel = (value: number) => {
    switch (value) {
        case 0:  return 'no';
        case 25: return 'low';
        case 50: return 'normal';
        case 75: return 'high';
        case 100: return 'highest';
        default: return 'normal';
    }
};
const handleIntensitySelect = (family: string, value: number, oldValue: number) => {

    if (value === 0) {
        emit('remove', `${family} (${oldValue}% intensity)`, 'Scent Family')
        return
    }

    localIntensities.value = { [family]: value }
    // Simplement émettre la famille et la valeur
    emit('select', `${family} (${value}% intensity)`, 'Scent Family')
}

// Computed pour les familles avec leur état de sélection
const families = computed(() => {
    return SCENT_FAMILIES.map(({ name, notes }) => {
        const { isSelected, intensity } = getSelectionState(name);
        return {
            name,
            notes,
            isSelected,
            intensity
        };
    });
});
</script>

<template>
    <div class="space-y-2">
        <ScentFamily
            v-for="{ name, notes, intensity, isSelected } in families"
            :key="name"
            :name="name"
            :notes="notes"
            :intensity="intensity"
            :is-selected="isSelected"
            @toggle="(newValue) => handleIntensitySelect(name, newValue, intensity)"
        />
    </div>
</template>

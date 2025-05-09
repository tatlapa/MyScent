<script setup lang="ts">
import type { Tag } from '@/types/perfume-crafter'
import {ScentFamilySelector} from './components'

interface Props {
    selectedTags: Tag[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
    (e: 'select', text: string, category: string): void
    (e: 'remove', text: string, category: string): void
}>()
</script>

<template>
    <ScentFamilySelector
        :selected-tags="selectedTags"
        @select="(text) => emit('select', text, 'Scent Family')"
        @remove="(text) => emit('remove', text, 'Scent Family')"
    />
</template>

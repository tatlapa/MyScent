# SelectionCard.vue
<script setup lang="ts">
import { Card } from '@/components/ui/card'

interface Props {
    value: string
    description: string
    isSelected: boolean
}

defineProps<Props>();
defineEmits<{
    (e: 'click'): void
}>();
</script>

<template>
    <Card
        @click="$emit('click')"
        :class="[
            'group cursor-pointer transition-all w-full',
            isSelected
                ? 'bg-blue-500/50 border-blue-500'
                : 'bg-transparent border-muted-foreground/20 hover:bg-muted-foreground/10'
        ]"
    >
        <div class="p-4 space-y-2">
            <div
                :class="[
                    'text-sm font-medium text-primary-foreground',
                    isSelected
                        ? 'text-muted'
                        : ''
                ]"
            >
                {{ value }}
            </div>
            <p class="text-xs text-primary-foreground line-clamp-2">
                {{ description }}
            </p>
        </div>
    </Card>
</template>

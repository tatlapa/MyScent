// ScentFamily.vue
<script setup lang="ts">
import {Button} from '@/components/ui/button'
import {Progress} from '@/components/ui/progress'
import {Card} from '@/components/ui/card'

interface Props {
    name: string
    notes: string
    intensity: number
    isSelected: boolean
}

interface Emits {
    (e: 'toggle', value: number): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const OPTIONS = [
    {value: 0, label: 'No'},
    {value: 25, label: 'Low'},
    {value: 50, label: 'Normal'},
    {value: 75, label: 'High'},
    {value: 100, label: 'Highest'}
] as const
</script>

<template>
    <Card class="bg-transparent border-muted-foreground/2 space-y-3">
        <div class="p-4">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="text-primary-foreground font-medium">{{ name }}</h4>
                    <p class="text-sm text-muted-foreground mt-1">{{ notes }}</p>
                </div>
                <span
                    v-if="isSelected"
                    class="text-primary-foreground text-sm font-medium"
                >
        {{ intensity }}% intensity
      </span>
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
                <Button
                    v-for="{ value, label } in OPTIONS"
                    :key="value"
                    variant="outline"
                    size="sm"
                    :class="[
          'rounded-full transition-all text-primary-foreground hover:text-primary-foreground',
          isSelected && intensity === value
            ? 'bg-blue-500/50 border-blue-500 hover:bg-blue-500/50'
                      : 'bg-muted-foreground border-foreground/80 hover:bg-muted-foreground/80'
        ]"
                    @click="() => $emit('toggle', value)"
                >
                    {{ label }}
                </Button>
            </div>

            <div v-if="isSelected" class="mt-3">
                <div class="h-1.5 bg-muted-foreground dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                        class="h-full bg-blue-500 transition-all duration-300"
                        :style="{ width: `${intensity}%` }"
                    />
                </div>
            </div>
        </div>
    </Card>
</template>

<style scoped>
:deep(.progress-indicator) {
    transition-property: width;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

/* Personnalisation des boutons pour l'état sélectionné */
:deep(.button-outline) {
    height: auto;
    padding: 0.375rem 0.75rem;
}

:deep(.button-outline:hover) {
    background-color: hsl(var(--muted));
}

:deep(.button-outline[class*='bg-primary']) {
    border-color: hsl(var(--primary));
}

:deep(.button-outline[class*='bg-primary']:hover) {
    background-color: hsl(var(--primary) / 0.9);
}
</style>

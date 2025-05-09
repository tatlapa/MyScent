// ColorPicker.vue
<script setup lang="ts">
import { ref } from 'vue'
import { colors } from './color-groups'
import { colorDescriptions } from './color-descriptions'
import { Button } from '@/components/ui/button'
import {Card} from '@/components/ui/card'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

interface Props {
    selectedColor?: string
}

interface Emits {
    (e: 'select', color: string, name: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const description = ref<string>('')

const handleColorSelect = (name: string, hex: string) => {
    if (props.selectedColor === hex) {
        description.value = ''
        emit('select', '', '')
        return
    }

    const desc = colorDescriptions[name] || `A unique fragrance inspired by ${name}`
    description.value = desc
    emit('select', hex, name)
}
</script>

<template>
    <div class="space-y-6">
        <Card class="bg-transparent border-muted-foreground/20">
            <div class="p-4">
                <div v-if="selectedColor" class="flex items-center gap-4">
                    <div
                        class="w-12 h-12 rounded-lg border-2 border-muted-foreground/20 shadow-apple shrink-0"
                        :style="{ backgroundColor: selectedColor }"
                    />
                    <p class="text-primary-foreground text-sm italic leading-relaxed">
                        {{ description }}
                    </p>
                </div>
                <p v-else class="text-primary-foreground text-sm italic">
                    Select a color to see its fragrance inspiration
                </p>
            </div>
        </Card>

        <div class="grid grid-cols-8 gap-2">
            <TooltipProvider>
                <Tooltip v-for="color in colors" :key="color.hex">
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            class="relative aspect-square p-0 group border border-muted-foreground/20 transition-all hover:scale-110"
                            :class="[
                selectedColor === color.hex
                  ? 'ring-2 ring-muted-foreground/20 scale-110 shadow-apple'
                  : 'ring-1 ring-border'
              ]"
                            :style="{ backgroundColor: color.hex }"
                            @click="() => handleColorSelect(color.name, color.hex)"
                        >
                            <span class="sr-only">{{ color.name }}</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{{ color.name }}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    </div>
</template>

<style scoped>
.shadow-apple {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

:deep(.button-outline) {
    border: none;
}

:deep(.button-outline:hover) {
    background-color: inherit;
}

:deep(.tooltip-content) {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    border: 1px solid hsl(var(--border));
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}
</style>

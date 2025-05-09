<script setup lang="ts">
import { watch, computed } from 'vue';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Props {
    title: string
    options: readonly string[]
    selectedOptions: string[]
    otherValue: string
}

interface Emits {
    (e: 'optionToggle', option: string): void
    (e: 'update:otherValue', value: string): void
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const otherInputValue = computed({
    get: () => props.otherValue,
    set: (value: string) => {
        emit('update:otherValue', value);
        // Si on écrit quelque chose et que Other n'est pas coché, on le coche
        if (value && !props.selectedOptions.includes('Other')) {
            emit('optionToggle', 'Other');
        }
    }
});

// Gérer la désélection de "Other"
const handleOtherToggle = () => {
    emit('optionToggle', 'Other');
    // Si on décoche Other, on vide l'input
    if (props.selectedOptions.includes('Other')) {
        emit('update:otherValue', '');
    }
};
</script>

<template>
    <div class="space-y-3">
        <Label class="text-primary-foreground text-sm font-medium">
            {{ title }}
        </Label>

        <div class="space-y-2">
            <div
                v-for="option in options"
                :key="option"
                class="flex items-center gap-2"
            >
                <Checkbox
                    :id="option"
                    :checked="selectedOptions.includes(option)"
                    @update:checked="() => $emit('optionToggle', option)"
                    class="border-muted-foreground/20 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                />
                <Label
                    :for="option"
                    class="text-primary-foreground font-normal text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {{ option }}
                </Label>
            </div>

            <div class="flex items-center gap-2">
                <Checkbox
                    id="other"
                    :checked="selectedOptions.includes('Other')"
                    @update:checked="handleOtherToggle"
                    class="border-muted-foreground/20 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                />
                <Input
                    v-model="otherInputValue"
                    placeholder="Other..."
                    class="flex-1 h-8 px-3 text-sm text-primary-foreground border-muted-foreground/20"
                />
            </div>
        </div>
    </div>
</template>

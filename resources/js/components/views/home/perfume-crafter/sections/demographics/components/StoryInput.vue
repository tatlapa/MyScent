<script setup lang="ts">
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { computed } from 'vue';

interface Props {
    modelValue: string
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>();

const textContent = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', value)
});
</script>

<template>
    <div class="space-y-2">
        <Label class="text-primary-foreground text-sm font-medium">
            What story should your perfume tell?
        </Label>
        <Textarea
            v-model="textContent"
            placeholder="E.g., A walk through a Mediterranean garden at sunset..."
            class="h-24 px-4 py-3 text-primary-foreground border-muted-foreground/20 resize-none placeholder:text-primary-foreground
                focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        />
    </div>
</template>

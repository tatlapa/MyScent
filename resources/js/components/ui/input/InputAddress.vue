<script setup lang="ts">
import {type HTMLAttributes, ref, watch} from 'vue';
import {Input} from '@/components/ui/input';
import {useDebounceFn, useVModel} from '@vueuse/core';
import {MapPin, Loader2} from 'lucide-vue-next';
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()

interface AddressSuggestion {
    id: string;
    address: string;
    zipCode: string;
    city: string;
    state: string;
    country: string;
}

const props = defineProps<{
    defaultValue?: string | number
    modelValue?: string | number
    placeholder?: string
    class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', payload: string): void
    (e: 'update:zipCode', payload: string): void
    (e: 'update:city', payload: string): void
    (e: 'update:state', payload: string): void
    (e: 'update:country', payload: string): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue,
})

const suggestions = ref<AddressSuggestion[]>([]);
const showSuggestions = ref(false);
const isLoading = ref(false);
let currentRequestId = 0;
const fetchSuggestions = async (input: string) => {
    if (input.length < 3) {
        suggestions.value = [];
        showSuggestions.value = false;
        return;
    }

    isLoading.value = true;
    const requestId = ++currentRequestId;

    try {
        const response = await fetch(`/api/geocoder/address-suggestions?query=${encodeURIComponent(input)}`);

        if (requestId !== currentRequestId) return;

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des suggestions');
        }

        const data = await response.json();
        suggestions.value = data;
        showSuggestions.value = data.length > 0;
    } catch (error) {
        console.error('Erreur:', error);
        toast({
            title: 'Uh oh ! Quelque chose s\'est mal passé.',
            description: 'Erreur lors de la récupération des suggestions',
            variant: 'destructive',
        });
        suggestions.value = [];
        showSuggestions.value = false;
    } finally {
        if (requestId === currentRequestId) {
            isLoading.value = false;
        }
    }
};

const debouncedFetchSuggestions = useDebounceFn(fetchSuggestions, 300);

const handleInput = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    modelValue.value = value;

    if (value) {
        debouncedFetchSuggestions(value);
    } else {
        suggestions.value = [];
        showSuggestions.value = false;
    }
};

const selectSuggestion = (suggestion: AddressSuggestion) => {
    modelValue.value = suggestion.address;
    emits('update:zipCode', suggestion.zipCode);
    emits('update:city', suggestion.city);
    emits('update:state', suggestion.state);
    emits('update:country', suggestion.country);
    showSuggestions.value = false;
};

const formatSuggestion = (suggestion: AddressSuggestion): string => {
    const parts = [suggestion.address];

    if (suggestion.city) parts.push(suggestion.city);
    if (suggestion.zipCode) parts.push(suggestion.zipCode);
    if (suggestion.state) parts.push(suggestion.state);
    if (suggestion.country) parts.push(suggestion.country);

    return parts.filter(Boolean).join(', ');
};
</script>

<template>
    <div class="relative w-full items-center">
        <Input v-model="modelValue" :placeholder="props.placeholder"
               @input="handleInput" id="address" type="text"
               class="pl-10"/>
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <MapPin v-if="!isLoading" class="w-5 h-5 text-muted-foreground"/>
            <Loader2 v-else class="w-5 h-5 text-muted-foreground animate-spin"/>
        </span>
        <div
            v-if="showSuggestions && suggestions.length > 0"
            class="absolute z-50 w-full mt-1 rounded-xl border bg-card text-card-foreground shadow max-h-60 overflow-auto"
        >
            <div
                v-for="suggestion in suggestions"
                :key="suggestion.id"
                @click="selectSuggestion(suggestion)"
                class="px-4 text-sm py-1 hover:bg-muted cursor-pointer"
            >
                {{ formatSuggestion(suggestion) }}
            </div>
        </div>
    </div>
</template>

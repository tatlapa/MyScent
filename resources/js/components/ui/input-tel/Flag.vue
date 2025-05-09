<script setup lang="ts">
import { computed, ref } from 'vue';

interface FlagComponentProps {
    country?: string;
    countryName?: string;
}

const props = withDefaults(defineProps<FlagComponentProps>(), {
    country: '',
    countryName: ''
});

const flagSrc = computed(() => {
    if (!props.country) return null;
    const countryCode = props.country.toUpperCase();
    return `https://catamphetamine.gitlab.io/country-flag-icons/3x2/${countryCode}.svg`;
});

const imageError = ref(false);

const handleImageError = () => {
    imageError.value = true;
};
</script>

<template>
  <span class="flex h-4 w-6 overflow-hidden rounded-sm">
    <img
        v-if="flagSrc && !imageError"
        :src="flagSrc"
        :alt="countryName"
        @error="handleImageError"
        class="h-full w-full object-cover"
    />
    <span v-else class="h-full w-full bg-gray-200 flex items-center justify-center text-xs">
      {{ country }}
    </span>
  </span>
</template>

<script setup lang="ts">
const props =defineProps<{
    message?: string;
}>();
</script>

<template>
    <div v-show="props.message">
        <p class="text-xs text-red-600 dark:text-red-400">
            {{ props.message }}
        </p>
    </div>
</template>

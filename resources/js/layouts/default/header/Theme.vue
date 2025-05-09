<script setup lang="ts">
import {Button} from '@/components/ui/button';
import {Sun,Moon} from 'lucide-vue-next';
import {useThemeStore} from "@/stores/theme";

const themeStore = useThemeStore();
</script>

<template>
    <Button
        variant="outline"
        size="sm"
        @click="themeStore.toggleTheme"
        class="h-9 w-9 p-0 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-all duration-300"
    >
        <Sun v-if="themeStore.theme === 'dark'" class="h-4 w-4" />
        <Moon v-else class="h-4 w-4" />
        <span class="sr-only">Toggle theme</span>
    </Button>
</template>

<style scoped>

</style>

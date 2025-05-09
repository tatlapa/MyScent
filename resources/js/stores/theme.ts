import {defineStore} from 'pinia'
import type {Tag} from "@/components/views/home/perfume-crafter/types";

interface ThemeState {
   theme: string;
}
export const useThemeStore = defineStore('theme', {
    state: (): ThemeState => ({
        theme: 'dark' || 'light',
    }),

    getters: {
    },
    actions: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';

            if (this.theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },
    },
    persist: {
        key: 'theme-store',
        storage: localStorage,
        paths: ['theme']
    }
})

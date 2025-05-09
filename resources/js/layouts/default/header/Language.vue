<!-- components/LocaleSelector.vue -->
<script setup lang="ts">
import { router, usePage } from '@inertiajs/vue3';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-vue-next";
import '/node_modules/flag-icons/css/flag-icons.min.css';
import {computed, ref} from "vue";
import {Country} from "@/types";
import { loadLanguageAsync } from 'laravel-vue-i18n';

const page = usePage();
const locales = computed(() => page.props.available_countries as Locale[]);
const currentLocale = ref(page.props.current_locale);

const selectedLocale = computed(() =>
    locales.value.find(l => l.code === currentLocale.value) || locales.value[0]
);

const countryFlagMap: Record<string, string> = {
    'en': 'gb',
    'fr': 'fr',
    'th': 'th',
}

const changeLocale = (locale: Country) => {
    currentLocale.value = locale.code;
    loadLanguageAsync(locale.code);
    router.post(route('locale.update'), {
        locale: locale.code},{
        preserveScroll: true,
        preserveState: true
    });
}

const getFlagPath = (localeCode: string) => {
    return countryFlagMap[localeCode] || localeCode;
}
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button
                variant="outline"
                size="sm"
                class="h-9 px-4 g-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-all duration-300"
            >
                <span :class="`fi fi-${getFlagPath(selectedLocale.flag_path)} mr-2`" />
                <span class="font-medium">{{ selectedLocale.name }}</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-40 bg-white/80 backdrop-blur-sm border border-neutral-200/50 dark:bg-neutral-800/80 dark:border-neutral-700/50">
            <DropdownMenuItem
                v-for="locale in locales"
                :key="locale.code"
                @click="changeLocale(locale)"
                :class="{
                    'bg-neutral-100 dark:bg-neutral-700': selectedLocale.code === locale.code
                }"
                class="gap-3 cursor-pointer hover:bg-neutral-50 transition-colors duration-200 py-3 dark:hover:bg-neutral-700/50"
            >
                <span :class="`fi fi-${getFlagPath(locale.flag_path)}`" />
                <span class="font-medium ">{{ locale.name }}</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

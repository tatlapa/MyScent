<script setup lang="ts">
import { router, usePage } from '@inertiajs/vue3';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard } from "lucide-vue-next";
import {computed} from "vue";

interface Currency {
    code: string;
    name: string;
    symbol: string;
}

const page = usePage();
const currencies = computed(() => page.props.available_currencies as Currency[]);
const selectedCurrency = computed(() =>
    currencies.value.find(c => c.code === page.props.current_currency) || currencies.value[0]
);

const changeCurrency = (currency: Currency) => {
    router.post(route('currency.update'), {
        currency: currency.code
    }, {
        preserveScroll: true,
        preserveState: true
    });
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
                <CreditCard class="w-4 h-4 mr-2" />
                <span class="font-medium">{{ selectedCurrency.code }}</span>
                <span class="text-neutral-400 ml-1">({{ selectedCurrency.symbol }})</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-32 bg-white/80 backdrop-blur-sm border border-neutral-200/50 dark:bg-neutral-800/80 dark:border-neutral-700/50">
            <DropdownMenuItem
                v-for="currency in currencies"
                :key="currency.code"
                @click="changeCurrency(currency)"
                :class="{
                    'bg-neutral-100 dark:bg-neutral-700': selectedCurrency.code === currency.code
                }"
                class="gap-3 cursor-pointer hover:bg-neutral-50 transition-colors duration-200 py-3 dark:hover:bg-neutral-700/50"
            >
                <div class="flex flex-col">
                    <span class="font-medium">{{ currency.name }}</span>
                    <span class="text-xs text-neutral-500">{{ currency.symbol }} · {{ currency.code }}</span>
                </div>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

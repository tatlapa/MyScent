<script setup lang="ts">
import {ref, computed} from 'vue'
import {Head, router, usePage} from '@inertiajs/vue3';
import {DefaultLayout} from "@/layouts/default"
import {Button} from '@/components/ui/button'
import {OrderSummary, CartItem, TrustFeatures} from '@/components/views/cart';
const cart = computed(() => usePage().props.cart)
</script>

<template>
    <Head title="Cart"/>

    <DefaultLayout>
        <section id="cart"
                 class="max-w-screen-2xl container px-4 sm:px-6 lg:px-12 min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-neutral-950 dark:to-black">
            <div class="pt-32 pb-12">
                <div class="flex items-center justify-between mb-8">
                    <h1 class="text-4xl text-foreground font-bold">
                        {{ $t('cart.title') }}
                    </h1>
                    <span
                        class="text-sm text-muted-foreground">{{
                            $t('cart.items_count', {count: cart.count})
                        }}</span>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2 space-y-6">
                        <div v-if="cart.items.length <= 0" class="text-center py-12">
                            <h2 class="text-2xl font-semibold text-foreground">{{ $t('cart.empty_message') }}</h2>
                            <p class="text-muted-foreground mt-4">{{ $t('cart.empty_suggestion') }}</p>
                            <Button
                                class="mt-6 px-6 py-3 transition-colors duration-300"
                                @click="router.visit(route('home'))"
                            >
                                {{ $t('cart.continue_shopping') }}
                            </Button>
                        </div>
                        <CartItem v-else/>
                        <TrustFeatures/>
                    </div>

                    <div class="lg:col-span-1">
                        <div class="sticky top-6">
                            <OrderSummary/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </DefaultLayout>
</template>

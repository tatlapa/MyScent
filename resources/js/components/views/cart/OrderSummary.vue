<script setup lang="ts">
import {router, usePage, Link} from "@inertiajs/vue3";
import {amex, mastercard, paypal, promptpay, visa} from "../../../../assets/img";
import {formatPrice} from "@/lib/currency";
import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {computed} from "vue";
import {PromoCode} from './index';
import {
    ArrowRight,
    X
} from 'lucide-vue-next'

const page = usePage()
const cart = computed(() => usePage().props.cart)

const handleApplyPromoCode = (code: string) => {
    router.post(route('cart.promo.apply'), {
        code
    }, {
        preserveScroll: true,
        preserveState: true
    })
}
</script>

<template>
    <Card>
        <CardHeader class="pb-4">
            <CardTitle
                class="text-xl font-bold">
                {{ $t('cart.order_summary.title') }}
            </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
            <div class="space-y-4">
                <div class="flex justify-between text-sm">
                    <span class="text-muted-foreground"> {{ $t('cart.order_summary.subtotal') }}</span>
                    <span class="font-medium"> {{
                            formatPrice(cart.subtotal, cart.currency)
                        }}</span>
                </div>
                <!--                                        <div class="flex justify-between text-sm">-->
                <!--                                            <span class="text-gray-600"> {{ $t('cart.order_summary.shipping') }}</span>-->
                <!--                                            <span class="font-medium">  {{-->
                <!--                                                    formatPrice(shipping, cart.currency)-->
                <!--                                                }}</span>-->
                <!--                                        </div>-->
                <!--                                        <div class="flex justify-between text-sm">-->
                <!--                                            <span class="text-gray-600"> {{ $t('cart.order_summary.tax') }}</span>-->
                <!--                                            <span class="font-medium">  {{ formatPrice(tax, cart.currency) }}</span>-->
                <!--                                        </div>-->
                <div v-for="condition in cart.conditions"
                     :key="condition.name"
                     class="flex justify-between text-sm"
                >
                    <template v-if="condition.type === 'promo'">
                        <div class="flex justify-between w-full">
                            <div>
            <span class="text-green-600">
                {{ condition.name }}
                <span class="text-sm text-green-500">
                    ({{
                        condition.value.includes('%') ? condition.value : formatPrice(Math.abs(Number(condition.value)), cart.currency)
                    }})
                </span>
            </span>
                            </div>
                            <div class="flex items-center gap-2">
            <span class="font-medium text-green-600">
                -{{ formatPrice(condition.calculatedValue, cart.currency) }}
            </span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    class="h-6 w-6"
                                    @click="router.delete(route('cart.promo.remove'), {
                    preserveScroll: true,
                    preserveState: true
                })"
                                >
                                    <X class="h-4 w-4"/>
                                </Button>
                            </div>
                        </div>
                    </template>

                    <template v-else-if="condition.type === 'shipping'">
                        <span class="text-gray-600">{{ $t('cart.order_summary.shipping') }}</span>
                        <span class="font-medium">{{ formatPrice(condition.calculatedValue, cart.currency) }}</span>
                    </template>

                    <template v-else-if="condition.type === 'tax'">
                        <span class="text-gray-600">{{ $t('cart.order_summary.tax') }}</span>
                        <span class="font-medium">{{ formatPrice(condition.calculatedValue, cart.currency) }}</span>
                    </template>
                </div>
            </div>

            <Separator class="bg-gray-200"/>
            <PromoCode
                :currency="cart.currency"
                @apply="handleApplyPromoCode"
            />

            <div v-if="discount" class="flex justify-between text-sm text-green-600">
                <span>{{ $t('cart.order_summary.discount') }}</span>
                <span>-{{ formatPrice(discount, cart.currency) }}</span>
            </div>

            <Separator class="bg-gray-200"/>

            <div class="flex justify-between items-center">
                <span class="text-lg font-semibold"> {{ $t('cart.order_summary.total') }}</span>
                <span
                    class="text-3xl font-bold">
                                              {{ formatPrice(cart.total, cart.currency) }}
                                        </span>
            </div>

            <Button as-child
                    class="w-full h-14 text-lg font-medium"
                    size="lg"
            >
                <Link :href="route('cart.checkout')">
                    {{ $t('cart.order_summary.checkout') }}
                    <ArrowRight class="ml-2 w-5 h-5"/>
                </Link>
            </Button>

            <div class="flex items-center justify-center gap-4 pt-4 text-gray-500">
                <img :src="visa" alt="Visa" class="h-6"/>
                <img :src="mastercard" alt="Mastercard" class="h-6"/>
                <img :src="amex" alt="American Express" class="h-6"/>
                <img :src="paypal" alt="Paypal" class="h-8"/>
                <img :src="promptpay" alt="Promptpay" class="h-10"/>
            </div>
        </CardContent>
    </Card>
</template>

<script setup lang="ts">
import {Card, CardContent} from "@/components/ui/card";
import {
    Truck,
    ShieldCheck,
    ArrowLeftRight,
    HeartHandshake,
} from 'lucide-vue-next'
import {wTrans} from 'laravel-vue-i18n';

const trustFeatures = [
    {
        icon: ShieldCheck,
        title: wTrans('cart.trust_features.secure_payment.title'),
        description: wTrans('cart.trust_features.secure_payment.description')
    },
    {
        icon: Truck,
        title: wTrans('cart.trust_features.express_delivery.title'),
        description: wTrans('cart.trust_features.express_delivery.description')
    },
    {
        icon: ArrowLeftRight,
        title: wTrans('cart.trust_features.free_returns.title'),
        description: wTrans('cart.trust_features.free_returns.description')
    },
    {
        icon: HeartHandshake,
        title: wTrans('cart.trust_features.customer_service.title'),
        description: wTrans('cart.trust_features.customer_service.description')
    }
]

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <Card
            v-for="feature in trustFeatures"
            :key="feature.title"
        >
            <CardContent class="p-6 flex items-start space-x-4">
                <component
                    :is="feature.icon"
                    class="w-8 h-8 text-muted-foreground shrink-0"
                />
                <div>
                    <h3 class="font-semibold text-foreground">{{ feature.title }}</h3>
                    <p class="text-sm text-muted-foreground mt-1">{{ feature.description }}</p>
                </div>
            </CardContent>
        </Card>
    </div>
</template>


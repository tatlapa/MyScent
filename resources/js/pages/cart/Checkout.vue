# Checkout.vue
<script setup lang="ts">
import {DefaultLayout} from "@/layouts/default";
import {computed, ref} from "vue";
import {usePage, Link, router, Head} from "@inertiajs/vue3";
import {MoveLeft} from 'lucide-vue-next';
import {Button} from '@/components/ui/button';
import {OrderSummary} from "@/components/views/cart";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {Label} from '@/components/ui/label'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {Auth, Shipping, Billing} from '@/components/views/checkout';
import {Address, ShippingMethod} from "@/types/cart";

const cart = computed(() => usePage().props.cart)
const currentStep = ref(1)
const totalSteps = 5

const billingAddress = ref<Address | null>(null)
const shippingAddress = ref<Address | null>(null)
const selectedShippingMethod = ref<ShippingMethod | null>(null)
const useShippingAsBilling = ref(false)


const savedAddresses = computed(() => usePage().props.addresses as Address[])
const shippingMethods = computed(() => usePage().props.shippingMethods as ShippingMethod[])

const canProceed = computed(() => {
    switch (currentStep.value) {
        case 1: // Authentication
            return usePage().props.auth.user
        case 2: // Billing Address
            return billingAddress.value !== null
        case 3: // Shipping Address
            return shippingAddress.value !== null || useShippingAsBilling.value
        case 4: // Shipping Method
            return selectedShippingMethod.value !== null
        case 5: // Payment
            return true // Géré par le formulaire de paiement
        default:
            return false
    }
})

const nextStep = () => {
    if (canProceed.value && currentStep.value < totalSteps) {
        currentStep.value++
    }
}

const previousStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--
    }
}

const submitCheckout = () => {
    router.post(route('checkout.process'), {
        billing_address: billingAddress.value,
        shipping_address: useShippingAsBilling.value ? billingAddress.value : shippingAddress.value,
        shipping_method: selectedShippingMethod.value,
    })
}
</script>

<template>
    <Head title="Checkout"/>

    <DefaultLayout>
        <section id="checkout"
                 class="max-w-screen-2xl container px-4 sm:px-6 lg:px-12 min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div class="pt-32 pb-12">
                <div class="flex items-center gap-x-2 mb-8">
                    <Button as-child variant="secondary">
                        <Link :href="route('cart.index')">
                            <MoveLeft/>
                        </Link>
                    </Button>
                    <h1 class="text-4xl font-bold">
                        Checkout
                    </h1>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2 space-y-6">
                        <!-- Timeline -->
                        <div class="relative flex justify-between mb-12">
                            <div class="absolute top-5 left-0 w-full h-[2px] bg-gray-200 -z-10"></div>

                            <div v-for="(step, index) in [
                'Account',
                'Biling',
                'Shipping',
                'Payment',
                'Review'
              ]" :key="index" class="flex flex-col items-center gap-2">
                                <div :class="[
                  'rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium',
                  currentStep === index + 1 ? 'bg-black text-white' :
                  currentStep > index + 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
                ]">
                                    {{ currentStep > index + 1 ? '✓' : index + 1 }}
                                </div>
                                <span class="text-sm text-gray-600">{{ step }}</span>
                            </div>
                        </div>

                        <Auth :current-step="currentStep"/>
                        <Billing
                            :current-step="currentStep"
                            :saved-addresses="savedAddresses"
                            v-model:selected-address="billingAddress"
                        />

                        <Shipping :current-step="currentStep"
                                  :saved-addresses="savedAddresses"
                                  v-model:selected-address="shippingAddress"
                                  :billing-address="billingAddress"/>


                        <div v-show="currentStep === 4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Mode de livraison</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <RadioGroup v-model="selectedShippingMethod">
                                        <div class="space-y-4">
                                            <div v-for="method in shippingMethods" :key="method.id"
                                                 class="flex items-center space-x-2">
                                                <RadioGroupItem :value="method"/>
                                                <div>
                                                    <Label>{{ method.name }}</Label>
                                                    <p class="text-sm text-gray-500">
                                                        {{ method.estimated_days }} - {{ method.price }}€
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </RadioGroup>
                                </CardContent>
                            </Card>
                        </div>

                        <!-- Étape 5: Paiement -->
                        <div v-show="currentStep === 5">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Paiement</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <!-- Intégration du formulaire de paiement (Stripe, etc.) -->
                                </CardContent>
                            </Card>
                        </div>

                        <!-- Navigation entre les étapes -->
                        <div class="flex justify-between pt-6">
                            <Button v-if="currentStep > 1" @click="previousStep" variant="outline">
                                Précédent
                            </Button>
                            <Button v-if="currentStep < totalSteps" @click="nextStep" :disabled="!canProceed">
                                Suivant
                            </Button>
                            <Button v-if="currentStep === totalSteps" @click="submitCheckout" variant="primary">
                                Commander
                            </Button>
                        </div>
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

<script setup lang="ts">
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Address} from "@/types/cart";
import {useForm} from "@inertiajs/vue3";
import {ref, watch} from "vue";
import {AddressDialog} from "@/components/views/checkout";

const props = withDefaults(defineProps<{
    currentStep: number
    loading?: boolean
    error?: string | null
    savedAddresses: Address[]
    selectedAddress?: Address | null
    billingAddress?: Address | null
}>(), {
    loading: false,
    error: null,
    selectedAddress: null,
    billingAddress: null
})

const emit = defineEmits<{
    (e: 'update:selectedAddress', address: Address): void
}>()

const useShippingAsBilling = ref(false)
const showAddressModal = ref(false)
watch(useShippingAsBilling, (newValue) => {
    if (newValue && props.billingAddress) {
        emit('update:selectedAddress', props.billingAddress)
    } else {
        emit('update:selectedAddress', null)
    }
})
</script>

<template>
    <div v-show="currentStep === 3">
        <Card>
            <CardHeader>
                <CardTitle>Adresse de livraison</CardTitle>
            </CardHeader>
            <CardContent>
                <div class="space-y-4">
                    <div class="flex items-center space-x-2">
                        <input type="checkbox"
                               v-model="useShippingAsBilling"
                               class="rounded border-gray-300"/>
                        <Label>Utiliser l'adresse de facturation</Label>
                    </div>

                    <div v-if="!useShippingAsBilling">
                        <RadioGroup
                            :model-value="selectedAddress"
                            @update:model-value="(address) => emit('update:selectedAddress', address)"
                        >
                            <div class="space-y-4">
                                <div v-for="address in savedAddresses"
                                     :key="address.id"
                                     class="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50"
                                >
                                    <RadioGroupItem :value="address"/>
                                    <div>
                                        <Label class="font-medium">{{ address.street }}</Label>
                                        <p class="text-sm text-gray-500">
                                            {{ address.city }}, {{ address.postal_code }}
                                            <br>
                                            {{ address.state }} {{ address.country }}
                                        </p>
                                    </div>
                                </div>
                                <div class="pt-4">
                                    <Button
                                        variant="outline"
                                        @click="showAddressModal = true"
                                    >
                                        + Ajouter une nouvelle adresse
                                    </Button>
                                </div>
                            </div>
                        </RadioGroup>
                    </div>
                </div>

                <AddressDialog
                    v-model:open="showAddressModal"
                />
            </CardContent>
        </Card>
    </div>
</template>

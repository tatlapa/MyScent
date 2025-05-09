<script setup lang="ts">
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {ref} from "vue";
import {Address} from "@/types/cart";
import {AddressDialog} from "@/components/views/checkout";

const props = withDefaults(defineProps<{
  currentStep: number
  loading?: boolean
  error?: string | null
  savedAddresses: Address[]
  selectedAddress?: Address | null
}>(), {
  loading: false,
  error: null,
  selectedAddress: null
})

const emit = defineEmits<{
  (e: 'update:selectedAddress', address: Address): void
}>()

const showAddressModal = ref(false)
</script>

<template>
  <div v-show="currentStep === 2">
    <Card>
      <CardHeader>
        <CardTitle>Adresse de facturation</CardTitle>
        <CardDescription>
          Sélectionnez une adresse existante ou ajoutez-en une nouvelle
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
            :model-value="selectedAddress"
            @update:model-value="(address) => emit('update:selectedAddress', address)"
        >
          <div class="space-y-4">
            <div v-for="address in savedAddresses" :key="address.id"
                 class="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
              <RadioGroupItem :value="address" />
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

        <AddressDialog
            v-model:open="showAddressModal"
        />
      </CardContent>
    </Card>
  </div>
</template>

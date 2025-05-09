<script setup lang="ts">
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input, InputAddress, InputError} from "@/components/ui/input";
import {InputTel} from '@/components/ui/input-tel';
import {useForm} from "@inertiajs/vue3";

interface Props {
    open: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
    (e: 'update:open', value: boolean): void
}>()

const addressForm = useForm({
    firstname: '',
    lastname: '',
    phone: '',
    street: '',
    city: '',
    postal_code: '',
    country: '',
    state: '',
})

const handleSubmit = () => {
    addressForm.post(route('addresses.store'), {
        onSuccess: () => {
            emit('update:open', false)
            addressForm.reset()
        },
    })
}
</script>

<template>
    <Dialog :open="open" @update:open="(value) => emit('update:open', value)">
        <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Ajouter une nouvelle adresse</DialogTitle>
                <DialogDescription>
                    Remplissez les informations pour ajouter une nouvelle adresse.
                </DialogDescription>
            </DialogHeader>

            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <Label for="firstname">Prénom</Label>
                        <Input
                            id="firstname"
                            v-model="addressForm.firstname"
                        />
                        <InputError :message="addressForm.errors.firstname"/>
                    </div>
                    <div class="space-y-2">
                        <Label for="lastname">Nom</Label>
                        <Input
                            id="lastname"
                            v-model="addressForm.lastname"
                        />
                        <InputError :message="addressForm.errors.lastname"/>
                    </div>
                </div>

                <div class="space-y-2">
                    <Label for="street">Téléphone</Label>
                    <InputTel
                        id="phone"
                        v-model="addressForm.phone"
                    />
                    <InputError :message="addressForm.errors.phone"/>
                </div>

                <div class="space-y-2">
                    <Label for="street">Rue</Label>
                    <InputAddress v-model="addressForm.street"
                                  @update:zipCode="addressForm.postal_code = $event"
                                  @update:city="addressForm.city = $event"
                                  @update:state="addressForm.state = $event"
                                  @update:country="addressForm.country = $event"
                                  placeholder="Entrez l'adresse"/>
                    <InputError :message="addressForm.errors.street"/>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <Label for="postal_code">Code postal</Label>
                        <Input
                            id="postal_code"
                            v-model="addressForm.postal_code"
                            :disabled="addressForm.processing"
                        />
                        <InputError :message="addressForm.errors.postal_code"/>
                    </div>
                    <div class="space-y-2">
                        <Label for="city">Ville</Label>
                        <Input
                            id="city"
                            v-model="addressForm.city"
                            :disabled="addressForm.processing"
                        />
                        <InputError :message="addressForm.errors.city"/>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <Label for="state">État/Région</Label>
                        <Input
                            id="state"
                            v-model="addressForm.state"
                            :disabled="addressForm.processing"
                        />
                        <InputError :message="addressForm.errors.state"/>
                    </div>
                    <div class="space-y-2">
                        <Label for="country">Pays</Label>
                        <Input
                            id="country"
                            v-model="addressForm.country"
                            :disabled="addressForm.processing"
                        />
                        <InputError :message="addressForm.errors.country"/>
                    </div>
                </div>

                <div class="flex justify-end gap-4">
                    <Button
                        type="button"
                        variant="outline"
                        @click="emit('update:open', false)"
                    >
                        Annuler
                    </Button>
                    <Button
                        type="submit"
                        :disabled="addressForm.processing"
                    >
                        {{ addressForm.processing ? 'Enregistrement...' : 'Enregistrer' }}
                    </Button>
                </div>
            </form>
        </DialogContent>
    </Dialog>
</template>

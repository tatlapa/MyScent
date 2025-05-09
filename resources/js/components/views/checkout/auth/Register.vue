<script setup lang="ts">
import {useForm} from "@inertiajs/vue3";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input, InputError} from "@/components/ui/input";
import {ref} from "vue";

const form = useForm({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
    remember: false
});

const agreeTerms = ref(false);

const submit = () => {
    form.post(route('register'), {
        preserveScroll: true,
        only: ['auth'],
        onSuccess: () => {
            form.reset();
        }
    });
}
</script>

<template>
    <form @submit.prevent="submit" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
                <Label for="firstName">First name</Label>
                <Input v-model="form.firstname" type="text" id="firstName"/>
                <InputError :message="form.errors.firstname"/>
            </div>
            <div class="space-y-2">
                <Label for="lastName">Last name</Label>
                <Input v-model="form.lastname" type="text" id="lastName"/>
                <InputError :message="form.errors.lastname"/>
            </div>
        </div>
        <div class="space-y-2">
            <Label for="email">Email</Label>
            <Input v-model="form.email" type="email" id="email" placeholder="john@example.com"/>
            <InputError :message="form.errors.email"/>
        </div>
        <div class="space-y-2">
            <Label for="password">Password</Label>
            <Input v-model="form.password" type="password" id="password"/>
            <InputError :message="form.errors.password"/>
        </div>
        <div class="space-y-2">
            <Label for="confirmPassword">Confirm password</Label>
            <Input v-model="form.password_confirmation" type="password" id="confirmPassword"/>
            <InputError :message="form.errors.password_confirmation"/>
        </div>
        <div class="flex items-start gap-2">
            <input v-model="agreeTerms" type="checkbox" id="terms" class="mt-1 rounded border-gray-300"/>
            <Label for="terms" class="text-sm">
                I agree to the <a href="#" class="text-primary hover:underline">Terms of Service</a> and <a href="#"
                                                                                                            class="text-primary hover:underline">Privacy
                Policy</a>
            </Label>
        </div>
        <Button type="submit" :disabled="!agreeTerms || form.processing" class="w-full">Create account</Button>
    </form>
</template>

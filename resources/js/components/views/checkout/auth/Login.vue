<script setup lang="ts">

import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input, InputError} from "@/components/ui/input";
import {useForm} from "@inertiajs/vue3";

const form = useForm({
    email: '',
    password: '',
    remember: false
});

const submit = () => {
    form.post(route('login'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        }
    });
}
</script>

<template>
    <form @submit.prevent="submit" class="space-y-4">
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
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <input v-model="form.remember" type="checkbox" id="remember" class="rounded border-gray-300"/>
                <Label for="remember" class="text-sm">Remember me</Label>
            </div>
            <a href="#" class="text-sm text-primary hover:underline">
                Forgot password?
            </a>
        </div>
        <Button type="submit" :disabled="form.processing" class="w-full">Sign in</Button>
    </form>
</template>

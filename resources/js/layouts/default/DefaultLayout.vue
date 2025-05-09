<script setup lang="ts">
import {Header} from './header';
import {Footer} from './footer';
import {loadLanguageAsync} from 'laravel-vue-i18n';
import {computed, onMounted} from "vue";
import {usePage} from "@inertiajs/vue3";

const locale = computed(() => usePage().props.current_locale);
onMounted(() => {
    loadLanguageAsync(locale.value);
});
</script>

<template>
    <Header/>
    <slot/>
    <Footer/>
</template>

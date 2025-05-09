<script setup lang="ts">
import {Head} from '@inertiajs/vue3';
import {DefaultLayout} from "@/layouts/default";
import {Hero, Personalized, Journey, FragranceCreation, Testimonials, IridescentCollection, FinalCTA, PerfumeCrafter} from '@/components/views/home';
</script>

<template>
    <Head title="Welcome"/>

    <DefaultLayout>
        <Hero/>
        <Personalized/>
        <PerfumeCrafter/>
        <Journey/>
        <FragranceCreation/>
        <Testimonials/>
        <IridescentCollection/>
        <FinalCTA/>
    </DefaultLayout>
</template>

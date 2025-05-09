<script setup lang="ts">
import {ref} from 'vue';
import {_00022_, _00023_, _00024_} from '@/../assets/img';

const features = ref([
    {
        image_uri: _00022_,
        title: 'Made Just for You',
        content: 'Our AI transforms your emotions into a fragrance crafted uniquely for you.',
        alt: 'Personalized fragrance bottle with engraved name'
    },
    {
        image_uri: _00023_,
        title: 'Unbox a Moment of Luxury',
        content: 'From the bespoke packaging to your engraved bottle, every detail is designed to delight.',
        alt: 'Luxury perfume unboxing experience'
    },
    {
        image_uri: _00024_,
        title: 'Crafted by Science, Inspired by You',
        content: 'Our advanced AI transforms your feelings into a custom blend, creating a scent thats as unique a you are.',
        alt: 'AI scent creation process visualization'
    }
]);
</script>

<template>
    <section id="features" class="bg-gray-50 relative overflow-hidden">
        <div class="max-w-screen-xl container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="mb-24 relative">
                <h2 class="text-center">
                    <span class="text-5xl md:text-6xl lg:text-7xl font-title font-medium tracking-tight">
                        Discover Your
                        <br class="hidden sm:block"/>
                        Signature Scent
                    </span>
                </h2>
                <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-black/10"></div>
            </div>

            <!-- Grid Container -->
            <div class="grid md:grid-cols-3 gap-6 mt-2 md:mt-20">
                <!-- Feature Cards -->
                <div v-for="(feature, index) in features"
                     :key="index"
                     class="group rounded-3xl bg-white shadow-lg h-[40rem] overflow-hidden flex flex-col items-start justify-start relative z-10 transition-all duration-300 hover:shadow-xl">
                    <!-- Gradients -->
                    <div
                        class="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none"/>
                    <div
                        class="absolute h-full bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-30 pointer-events-none"/>

                    <!-- Content -->
                    <div class="relative z-40 p-8 h-full flex flex-col justify-between">
                        <h3 class="font-title font-semibold text-2xl md:text-[26px] text-white text-center w-full mb-4">
                            {{ feature.title }}
                        </h3>
                        <p class="text-white text-lg md:text-lg text-center w-full [text-wrap:balance]">
                            {{ feature.content }}
                        </p>
                    </div>

                    <!-- Image with hover effect -->
                    <div class="absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105">
                        <div
                            class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"/>
                        <img
                            :src="feature.image_uri"
                            :alt="feature.alt"
                            class="h-full w-full object-cover transition-all duration-500"
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

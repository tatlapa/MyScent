<script setup lang="ts">
import {Sparkles} from 'lucide-vue-next'
import {Button} from '@/components/ui/button'
</script>

<template>
    <section class="relative bg-black text-white py-40 overflow-hidden">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0">
            <img
                src="https://placehold.co/1920x1080"
                alt="Background"
                class="w-full h-full object-cover opacity-40"
            />
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-transparent"></div>
        </div>

        <!-- Content -->
        <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-2xl">
        <span class="inline-block mb-4 py-1 text-white text-sm font-medium">
          Begin Your Journey
        </span>

                <h2 class="font-title text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                    Discover Your Perfect<br/>
                    Signature Scent
                </h2>

                <p class="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                    Experience the future of fragrance creation. Our AI-powered process crafts a scent that's uniquely
                    yours, reflecting your personality and desires.
                </p>

                <Button
                    class="group h-12 px-6 bg-white hover:bg-white/90 text-black hover:text-black transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                    size="lg"
                >
                    <span>Create Your Scent</span>
                    <Sparkles class="w-5 h-5 ml-2"/>
                </Button>
            </div>
        </div>
    </section>
</template>

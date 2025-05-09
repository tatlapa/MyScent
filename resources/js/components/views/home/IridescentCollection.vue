<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const isHovered = ref(false)
</script>

<template>
    <section class="relative overflow-hidden py-12 bg-background">
        <!-- Iridescent Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-accent/5 animate-gradient"></div>

        <!-- Content Container -->
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <!-- Left Content -->
                <div class="max-w-2xl">
                    <!-- Headline -->
                    <h2 class="font-title text-2xl md:text-[30px] font-bold mb-6 tracking-tight">
                        Limited Edition<br/>
                        Iridescent Collection
                    </h2>

                    <!-- Description -->
                    <p class="text-lg text-muted-foreground mb-10 leading-relaxed">
                        For those who seek the extraordinary. A one-of-a-kind scent, available for a limited time.
                    </p>

                    <!-- CTA Button -->
                    <Button
                        variant="default"
                        class="group bg-primary hover:bg-primary/90 transition-all duration-300"
                    >
                        <span>Shop Now</span>
                        <ArrowRight
                            class="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Button>
                </div>

                <!-- Right Images -->
                <div class="relative h-[600px] w-full">
                    <!-- Front Image -->
                    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-[80%] h-[500px] rounded-2xl overflow-hidden shadow-lg z-10 transform -rotate-6">
                        <img
                            src="https://placehold.co/600x800"
                            alt="Limited Edition Perfume Bottle"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <!-- Back Image -->
                    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] h-[500px] rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://placehold.co/600x800"
                            alt="Limited Edition Perfume Box"
                            class="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.animate-gradient {
    background-size: 400% 400%;
    animation: gradient 8s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>

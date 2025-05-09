<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { PenTool, Network, Gift } from 'lucide-vue-next';

interface Step {
    icon: any;
    title: string;
    description: string;
}

const steps = ref<Step[]>([
    {
        icon: PenTool,
        title: 'Discover Your Essence',
        description: 'Answer a few questions, and let your personality shape your scent.'
    },
    {
        icon: Network,
        title: 'AI Tailored Precision',
        description: 'Our advanced AI interprets your answers to craft a fragrance that embodies you.'
    },
    {
        icon: Gift,
        title: 'Arrives at Your Door',
        description: 'Receive your custom scent, beautifully packaged and engraved, just for you.'
    }
]);

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    document.querySelectorAll('.journey-step').forEach(step => {
        observer.observe(step);
    });
});
</script>

<template>
    <section class="bg-white relative overflow-hidden">
        <div class="max-w-screen-xl container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="mb-20 relative text-center">
                <span class="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4 block">Your Personal Journey</span>
                <h2 class="mb-6">
                    <span class="font-title text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black">
                        A Journey to Your<br class="hidden sm:block" />Signature Scent
                    </span>
                </h2>
                <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                    Experience the transformation of your personality into a unique fragrance, crafted exclusively for you.
                </p>
                <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-black/10"></div>
            </div>

            <!-- Steps Container - New Design -->
            <div class="grid md:grid-cols-3 gap-8 relative mt-24">
                <div v-for="(step, index) in steps"
                     :key="index"
                     class="journey-step group relative opacity-0">
                    <!-- Card -->
                    <div class="relative bg-white border border-black/5 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-xl">
                        <!-- Step number -->
                        <div class="absolute -top-6 left-8">
                            <span class="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full font-title text-xl">
                                {{ index + 1 }}
                            </span>
                        </div>

                        <!-- Icon -->
                        <div class="mb-8 mt-4">
                            <component
                                :is="step.icon"
                                class="w-12 h-12 text-black transition-transform duration-500 group-hover:scale-110"
                                stroke-width="1.5"
                                aria-hidden="true"
                            />
                        </div>

                        <!-- Content -->
                        <div class="space-y-4">
                            <h3 class="font-title text-2xl font-medium text-black">
                                {{ step.title }}
                            </h3>
                            <p class="text-gray-600 text-lg leading-relaxed">
                                {{ step.description }}
                            </p>
                        </div>

                        <!-- Decorative line -->
                        <div class="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <!-- Connecting line for desktop -->
                    <div v-if="index < 2" class="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-black/10"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.journey-step {
    animation: fadeInUp 0.8s ease-out forwards;
    animation-play-state: paused;
}

.journey-step.visible {
    animation-play-state: running;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

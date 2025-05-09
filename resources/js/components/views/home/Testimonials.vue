<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Heart } from 'lucide-vue-next'

interface Testimonial {
    id: number
    name: string
    rating: number
    image: string
}

const testimonials = ref<Testimonial[]>([
    {
        id: 1,
        name: "Lawrence M.",
        rating: 5,
        image: "https://placehold.co/400x500"
    },
    {
        id: 2,
        name: "Katherine R.",
        rating: 5,
        image: "https://placehold.co/400x500"
    },
    {
        id: 3,
        name: "Michael H.",
        rating: 5,
        image: "https://placehold.co/400x500"
    },
    {
        id: 4,
        name: "Matthew Lewis",
        rating: 5,
        image: "https://placehold.co/400x500"
    },
    {
        id: 5,
        name: "David K.",
        rating: 5,
        image: "https://placehold.co/400x500"
    },
    {
        id: 6,
        name: "Sarah J.",
        rating: 5,
        image: "https://placehold.co/400x500"
    },
    {
        id: 7,
        name: "Thomas R.",
        rating: 5,
        image: "https://placehold.co/400x500"
    },
    {
        id: 8,
        name: "Emma L.",
        rating: 5,
        image: "https://placehold.co/400x500"
    }
])

const visibleTestimonials = ref<Set<number>>(new Set())

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = Number(entry.target.getAttribute('data-testimonial-id'))
            if (entry.isIntersecting) {
                visibleTestimonials.value.add(id)
            }
        })
    }, {
        threshold: 0.2
    })

    document.querySelectorAll('.testimonial-card').forEach(el => {
        observer.observe(el)
    })
})
</script>

<template>
    <section class="bg-white py-12">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header Section -->
            <div class="grid md:grid-cols-2 gap-12 mb-16">
                <!-- Left Column - Title -->
                <div>
                    <h1 class="font-title text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Loved By<br/>
                        Our Customers
                    </h1>
                    <p class="text-gray-600 text-lg">
                        Authentic Luxor Customers
                    </p>
                </div>

                <!-- Right Column - Description -->
                <div class="flex items-center">
                    <p class="text-gray-500 text-lg leading-relaxed">
                        Join our growing community of satisfied customers who have discovered their perfect signature scent through our innovative AI-powered fragrance creation process. Each bottle tells a unique story.
                    </p>
                </div>
            </div>

            <h3 class="text-lg text-gray-500 mb-8">AUTHENTIC CUSTOMER TESTIMONIALS</h3>

            <!-- Testimonials Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                <div
                    v-for="testimonial in testimonials"
                    :key="testimonial.id"
                    class="testimonial-card relative group"
                    :data-testimonial-id="testimonial.id"
                    :class="{ 'opacity-0': !visibleTestimonials.has(testimonial.id) }"
                >
                    <!-- Image Container -->
                    <div class="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                        <img
                            :src="testimonial.image"
                            :alt="testimonial.name"
                            class="w-full h-full object-cover"
                        />
                        <!-- Hover Overlay -->
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300">
                            <Heart class="absolute top-3 right-3 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>

                    <!-- Customer Info -->
                    <div class="mt-3">
                        <h4 class="text-sm font-medium">{{ testimonial.name }}</h4>
                        <div class="flex gap-0.5 mt-1">
                            <div
                                v-for="star in testimonial.rating"
                                :key="star"
                                class="text-xs text-gray-400"
                            >
                                ★
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.testimonial-card {
    transform: translateY(20px);
    transition: all 0.7s ease-out;
}

.testimonial-card:not(.opacity-0) {
    transform: translateY(0);
}
</style>

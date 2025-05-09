<script setup lang="ts">
import {ref, computed, onMounted, watch} from 'vue'
import {X, ShoppingCart, Star, RefreshCcw} from 'lucide-vue-next'
import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {usePerfumeCrafterStore} from "@/stores/perfume-crafter"
import {ClosestScentBrand, SimilarPurposeBrand, EmotionEvolution, OccasionRatings} from './results'

const mounted = ref(false)
const perfumeCrafterStore = usePerfumeCrafterStore()
const selectedSize = ref('50ml')
const prices = {
    '30ml': 89.99,
    '50ml': 149.99,
    '100ml': 249.99
}

onMounted(() => {
    setTimeout(() => {
        mounted.value = true
    }, 100)
})

watch(() => perfumeCrafterStore.showResult, (show) => {
    if (show) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}, {immediate: true})

const perfumeData = ref({
    name: "Mystic Twilight",
    rating: 8.5,
    generalDescription: "A captivating blend of mystical florals and warm spices",
    genderStrength: 0.7,
    emotionEvolution: {
        energy: [0.8, 0.6, 0.7, 0.9],
        passion: [0.3, 0.8, 0.6, 0.4],
        serenity: [0.2, 0.5, 0.8, 0.9]
    },
    ingredients: [
        "Bergamot",
        "White Jasmine",
        "Amber",
        "Vanilla Bean",
        "Sandalwood"
    ]
})

const currentPrice = computed(() => prices[selectedSize.value])
const handleClose = () => perfumeCrafterStore.showResult = false

const animationClasses = computed(() => ({
    'opacity-0 translate-y-4': !mounted.value,
    'opacity-100 translate-y-0': mounted.value,
    'transition-all duration-700 ease-out': true
}))
</script>

<template>
    <div v-if="perfumeCrafterStore.showResult"
         class="fixed inset-0 z-50 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <button @click="handleClose"
                class="fixed z-50 top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg backdrop-blur">
            <X class="w-6 h-6 text-gray-600"/>
        </button>

        <div class="h-screen p-8 overflow-y-auto" :class="animationClasses">
            <div class="max-w-7xl mx-auto space-y-8">
                <div class="text-center">
                    <h1 class="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {{ perfumeCrafterStore.composition.name }}
                    </h1>
                    <div class="flex justify-center items-center gap-2 mt-2">
                        <div class="flex">
                            <Star
                                v-for="n in 5"
                                :key="n"
                                class="w-5 h-5"
                                :class="n <= perfumeCrafterStore.composition.rating/2 ? 'text-yellow-400 fill-current' : 'text-gray-300'"
                            />
                        </div>
                        <span class="text-gray-600">{{ perfumeCrafterStore.composition.rating }}/10</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="space-y-6">
                        <Card class="bg-white/80 backdrop-blur">
                            <CardContent class="p-6">
                                <div class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                                    <img v-if="!perfumeCrafterStore.isImageLoading && perfumeCrafterStore.composition.image_url != null" :src="perfumeCrafterStore.composition.image_url" alt="Perfume visualization"
                                         class="rounded-lg"/>
                                    <div v-else>
                                        <RefreshCcw class="animate-spin w-8 h-8" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <OccasionRatings/>

                        <Card class="bg-white/80 backdrop-blur">
                            <CardContent class="p-6">
                                <div class="flex justify-between items-center mb-4">
                                    <div class="space-y-2">
                                        <h3 class="font-medium">Select Size</h3>
                                        <div class="flex gap-2">
                                            <Button
                                                v-for="size in Object.keys(prices)"
                                                :key="size"
                                                :variant="selectedSize === size ? 'default' : 'outline'"
                                                @click="selectedSize = size"
                                                :class="selectedSize === size ? 'bg-purple-600' : ''"
                                            >
                                                {{ size }}
                                            </Button>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <div class="text-2xl font-bold text-purple-600">
                                            ${{ currentPrice }}
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                    <ShoppingCart class="w-4 h-4 mr-2"/>
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    <div class="space-y-6">
                        <div class="space-y-6">
                            <SimilarPurposeBrand/>
                            <ClosestScentBrand/>
                        </div>

                        <EmotionEvolution/>

                        <Card class="bg-white/80 backdrop-blur">
                            <CardHeader>
                                <CardTitle>Gender Strength</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div class="relative h-2 bg-gray-200 rounded-full">
                                    <div
                                        class="absolute top-0 left-0 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full"
                                        :style="{ width: `${perfumeCrafterStore.composition.gender_strength * 100}%` }"
                                    />
                                </div>
                                <div class="flex justify-between mt-2 text-sm text-gray-600">
                                    <span>Feminine</span>
                                    <span>Masculine</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

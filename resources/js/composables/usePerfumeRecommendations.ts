import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import type { Tag, CustomizationValue } from '@/types/perfume-crafter'
import { generatePerfumeRecommendations } from '@/services/groq/perfume'
import axios from 'axios'
import {useDebounce} from "@/composables/useDebounce";

interface PerfumeProduct {
    name: string
    description: string
    matchPercentage: number
    price: string
    image: string
    url: string
}

interface AmazonProduct {
    title: string
    price: string
    image: string
    url: string
}

export function usePerfumeRecommendations(
    tags: Ref<Tag[]>,
    customValues: Ref<CustomizationValue[]>
) {
    const product = ref<PerfumeProduct | null>(null)
    const isLoading = ref(false)
    const error = ref<string | null>(null)

    // Debounce les valeurs
    const debouncedTags = useDebounce(tags)
    const debouncedCustomValues = useDebounce(customValues)

    // Nouvelle fonction pour chercher sur Amazon via Laravel
    const searchAmazonProduct = async (perfumeName: string): Promise<AmazonProduct | null> => {
        try {
            const response = await axios.get('/api/perfumes/search', {
                params: { name: perfumeName }
            })

            if (response.status === 200) {
                return response.data
            }
            return null
        } catch (error) {
            console.error('Erreur lors de la recherche Amazon:', error)
            return null
        }
    }

    const updateRecommendations = async () => {
        if (!debouncedTags.value.length) {
            product.value = null
            error.value = null
            return
        }

        isLoading.value = true
        error.value = null

        try {
            const recommendations = await generatePerfumeRecommendations(
                debouncedTags.value,
                debouncedCustomValues.value
            )

            if (recommendations && recommendations.length > 0) {
                const recommendation = recommendations[0]

                const amazonProduct = await searchAmazonProduct(recommendation.perfume)

                if (amazonProduct) {
                    product.value = {
                        title: recommendation.perfume,
                        description: recommendation.description,
                        matchPercentage: recommendation.match,
                        price: amazonProduct.price,
                        image: amazonProduct.image,
                        url: amazonProduct.url,
                    }
                } else {
                    product.value = {
                        name: recommendation.perfume,
                        description: recommendation.description,
                        matchPercentage: recommendation.match,
                        price: "Prix indisponible",
                        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",
                        url: `https://www.amazon.com/s?k=${encodeURIComponent(recommendation.perfumeName)}+perfume`
                    }
                }
            } else {
                product.value = null
            }
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Une erreur est survenue'
            console.error('Erreur lors de la génération des recommandations:', err)
        } finally {
            isLoading.value = false
        }
    }

    // Observer les changements des valeurs debouncées
    watch([debouncedTags, debouncedCustomValues], () => {
        updateRecommendations()
    }, { deep: true })

    return {
        product,
        isLoading,
        error
    }
}

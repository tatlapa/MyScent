// composables/useDebouncedDescription.ts
import {onBeforeUnmount, ref, watch} from 'vue'
import type { Ref } from 'vue'
import type { Tag } from '@/types'
import type { CustomizationValue } from '@/types/perfume-crafter'
import { generateScentDescription } from '@/services/groq'

export function useDebouncedDescription(
    tags: Ref<Tag[]>,
    customValues: Ref<CustomizationValue[]>
) {
    const description = ref<string | null>(null)
    const isLoading = ref(false)
    const error = ref<string | null>(null)
    let timer: ReturnType<typeof setTimeout> | null = null

    const updateDescription = async () => {
        if (!tags.value.length) {
            description.value = null
            error.value = null
            return
        }

        isLoading.value = true
        error.value = null

        try {
            const response = await generateScentDescription(tags.value, customValues.value)
            try {
                const parsed = JSON.parse(response)
                description.value = parsed.description
            } catch (e) {
                description.value = response
            }
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'An error occurred'
            console.error('Error generating description:', err)
        } finally {
            isLoading.value = false
        }
    }

    // Surveiller les changements de tags et customValues
    watch([tags, customValues], () => {
        if (timer) {
            clearTimeout(timer)
        }

        isLoading.value = true

        timer = setTimeout(() => {
            updateDescription()
        }, 5000)
    }, { deep: true })

    // Nettoyage du timer quand le composant est démonté
    onBeforeUnmount(() => {
        if (timer) {
            clearTimeout(timer)
        }
    })

    return {
        description,
        isLoading,
        error
    }
}

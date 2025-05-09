import {onBeforeUnmount, ref, watch} from 'vue'
import type { Ref } from 'vue'

export function useDebounce<T>(value: Ref<T>, delay: number): Ref<T> {
    const debouncedValue = ref<T>(value.value) as Ref<T>
    let timeoutId: ReturnType<typeof setTimeout>

    watch(value, (newValue) => {
        // Nettoyer le timer existant
        clearTimeout(timeoutId)

        // Créer un nouveau timer
        timeoutId = setTimeout(() => {
            debouncedValue.value = newValue
        }, delay)
    }, { deep: true })

    // Optionnel : nettoyage lors du démontage du composant
    onBeforeUnmount(() => {
        clearTimeout(timeoutId)
    })

    return debouncedValue
}

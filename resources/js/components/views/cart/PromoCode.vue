<script setup lang="ts">
import { ref, watch } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { X, Loader2 } from 'lucide-vue-next'
import { usePage } from '@inertiajs/vue3'

const page = usePage()
const code = ref('')
const loading = ref(false)
const error = ref<string | null>(null)
const isApplied = ref(false)

const emit = defineEmits<{
    (e: 'apply', code: string): void
}>()

const handleSubmit = () => {
    if (!code.value) return

    loading.value = true
    error.value = null
    emit('apply', code.value)
}

// Surveiller les changements de flash messages
watch(() => page.props.flash, (newFlash) => {
    loading.value = false

    if (newFlash.error) {
        error.value = newFlash.error
        isApplied.value = false
    }

    if (newFlash.status === 'error') {
        error.value = newFlash.message
        isApplied.value = false
    }

    if (newFlash.status === 'success') {
        error.value = null
        isApplied.value = true
        code.value = ''
    }
}, { deep: true })
</script>

<template>
    <div class="space-y-4">
        <div class="flex space-x-2">
            <Input
                v-model="code"
                :placeholder="$t('cart.promo_code.title')"
                :disabled="loading"
                @keyup.enter="handleSubmit"
            />
            <Button
                class="whitespace-nowrap"
                :disabled="!code || loading"
                @click="handleSubmit"
            >
                <Loader2 v-if="loading" class="w-4 h-4 animate-spin mr-2" />
                {{ $t('cart.promo_code.button') }}
            </Button>
        </div>

        <Alert
            v-if="error"
            variant="destructive"
            class="mt-2"
        >
            <AlertDescription>{{ error }}</AlertDescription>
        </Alert>

        <div v-if="isApplied && page.props.promo" class="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div>
                <p class="font-medium">Code promo appliqué</p>
                <p class="text-sm text-gray-500">
                    -{{ formatPrice(page.props.promo.discount, page.props.cart.currency) }}
                </p>
            </div>
            <Button variant="ghost" size="icon" @click="handleRemove">
                <X class="w-4 h-4" />
            </Button>
        </div>
    </div>
</template>

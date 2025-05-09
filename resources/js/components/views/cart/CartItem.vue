<script setup lang="ts">
import {formatPrice} from "@/lib/currency";
import {
    Minus,
    Plus,
    Trash2,
} from 'lucide-vue-next'
import {Button} from '@/components/ui/button'
import {Card, CardContent} from '@/components/ui/card'
import {router, usePage} from "@inertiajs/vue3";
import {computed} from "vue";

//p
const cart = computed(() => usePage().props.cart)

const updateQuantity = (itemId: string, change: number) => {
    const item = cart.value.items[itemId];
    if (item) {
        const newQuantity = item.quantity + change;
        if (newQuantity > 0) {
            router.patch(route('cart.updateQuantity', itemId), {
                quantity: newQuantity
            }, {
                preserveScroll: true,
                preserveState: true
            });
        }
    }
}

const removeItem = (itemId: number) => {
    router.delete(route('cart.remove', itemId), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
        }
    })
}
</script>

<template>
    <Card
          v-for="item in cart.items"
          :key="item.id"
          class="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm"
    >
        <CardContent class="p-6">
            <div class="flex gap-6">
                <div
                    class="relative w-32 h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden bg-gray-100">
                    <img
                        src="https://placehold.co/400x400"
                        :alt="item.name"
                        class="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                    />
                    <div
                        class="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"/>
                </div>

                <div class="flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start">
                            <div>
                                <p class="text-sm text-gray-500 mb-1">{{ item.category }}</p>
                                <h3 class="text-xl font-semibold text-gray-900">{{ item.name }}</h3>
                                <p class="text-sm text-gray-500 mt-1">dsfdsfdsfsdfds</p>
                            </div>
                            <p class="text-2xl font-bold">
                                {{ formatPrice(item.attributes.display_price, cart.currency) }}
                                <!--                                                    ${{ item.price.toFixed(2) }}-->
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center justify-between mt-6">
                        <div class="flex items-center space-x-4 bg-white shadow-sm rounded-lg p-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                class="h-8 w-8 hover:bg-gray-100"
                                @click="updateQuantity(item.id, -1)"
                            >
                                <Minus class="w-4 h-4"/>
                            </Button>
                            <span class="w-12 text-center font-medium text-lg">{{
                                    item.quantity
                                }}</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                class="h-8 w-8 hover:bg-gray-100"
                                @click="updateQuantity(item.id, 1)"
                            >
                                <Plus class="w-4 h-4"/>
                            </Button>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            class="text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors duration-300"
                            @click="removeItem(item.id)"
                        >
                            <Trash2 class="w-5 h-5"/>
                        </Button>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
</template>

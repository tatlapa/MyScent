<script setup lang="ts">
import {ref, computed} from 'vue'
import {ChevronDown, LucideIcon} from 'lucide-vue-next'
import {Tag} from '@/types/perfume-crafter'

interface Props {
    title: any // Equivalent to ReactNode
    defaultExpanded?: boolean
    icon: LucideIcon
    selectedTags?: Tag[]
    category?: string
}

const props = withDefaults(defineProps<Props>(), {
    defaultExpanded: false,
    selectedTags: () => [],
    category: undefined
})

defineSlots<{
    default(): any
}>()

const isExpanded = ref(props.defaultExpanded)

const selectedOptions = computed(() => {
    if (!props.category || !props.selectedTags.length) return null

    const relevantTags = props.selectedTags.filter(tag =>
        props.category === 'demographics'
            ? (tag.category === 'gender' || tag.category === 'age')
            : tag.category.toLowerCase() === props.category.toLowerCase()
    )

    if (!relevantTags.length) return null

    return {
        tags: relevantTags.map(tag => {
            if (props.category === 'Scent Family') {
                const match = tag.text.match(/^(.*?)\s*\((\d+)%\)/)
                if (match) {
                    const [_, name, intensity] = match
                    return `${name.trim()} (${intensity}%)`
                }
            }
            return tag.text
        }),
        color: props.category === 'color' ? relevantTags[0].color : null
    }
})
</script>

<template>
    <div class="bg-card-foreground rounded-2xl h-full transition-all duration-300 !space-y-0">
        <button
            @click="isExpanded = !isExpanded"
            class="w-full h-full flex items-center justify-between p-6 group"
        >
            <div class="flex items-center">
                <div class="flex items-center gap-2 mr-3">
                    <component :is="icon" class="w-5 h-5 text-blue-500"/>
                    <h3 class="text-primary-foreground font-medium">{{ title }}</h3>
                </div>
                <div
                    v-if="selectedOptions"
                    class="flex items-center gap-2"
                >
                    <div
                        v-if="selectedOptions.color"
                        class="w-3 h-3 rounded-sm shadow-sm"
                        :style="{ backgroundColor: selectedOptions.color }"
                    />
                    <span class="text-sm font-normal text-muted-foreground">
            {{ selectedOptions.tags.join(', ') }}
          </span>
                </div>
            </div>
            <ChevronDown
                :size="20"
                class="text-white transition-transform duration-300"
                :class="{ 'rotate-180': isExpanded }"
            />
        </button>

        <div
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :class="{
        'max-h-[2000px] opacity-100': isExpanded,
        'max-h-0 opacity-0': !isExpanded
      }"
        >
            <div class="p-6 border-t border-muted-foreground/20">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

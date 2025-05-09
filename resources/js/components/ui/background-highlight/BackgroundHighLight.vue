<template>
    <div
        :class="cn(
      'relative flex items-center bg-black justify-center w-full group',
      props.containerClass
    )"
        @mousemove="handleMouseMove"
    >
        <div class="absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none" />
        <div
            class="pointer-events-none bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
            :style="maskStyle"
        />
        <div :class="cn('relative z-20', props.class)">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
    class?: string
    containerClass?: string
}

const props = defineProps<Props>()

const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLDivElement
    if (!target) return
    const { left, top } = target.getBoundingClientRect()
    mouseX.value = event.clientX - left
    mouseY.value = event.clientY - top
}

const maskStyle = computed(() => ({
    WebkitMaskImage: `radial-gradient(200px circle at ${mouseX.value}px ${mouseY.value}px, black 0%, transparent 100%)`,
    maskImage: `radial-gradient(200px circle at ${mouseX.value}px ${mouseY.value}px, black 0%, transparent 100%)`,
}))
</script>

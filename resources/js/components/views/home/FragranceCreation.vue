<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';
import {Brain} from 'lucide-vue-next';

interface Node {
    x: number;
    y: number;
    active: boolean;
}

const currentStep = ref(0);
const nodes = ref<Node[]>([
    {x: 30, y: 20, active: false},
    {x: 70, y: 20, active: false},
    {x: 20, y: 50, active: false},
    {x: 80, y: 50, active: false},
    {x: 30, y: 80, active: false},
    {x: 70, y: 80, active: false},
]);

const connections = nodes.value.flatMap((start, i) =>
    nodes.value.slice(i + 1).map((end) => ({
        start,
        end
    }))
);

const animateNodes = () => {
    const interval = setInterval(() => {
        const randomNode = Math.floor(Math.random() * nodes.value.length);
        nodes.value[randomNode].active = true;

        setTimeout(() => {
            nodes.value[randomNode].active = false;
        }, 800);
    }, 400);

    return interval;
};

onMounted(() => {
    const interval = animateNodes();

    setInterval(() => {
        currentStep.value = (currentStep.value + 1) % 3;
    }, 3000);

    onUnmounted(() => {
        clearInterval(interval);
    });
});
</script>

<template>
    <section class="bg-white">
        <div class="max-w-screen-xl container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="flex items-center gap-x-12">
                <!-- Left Column - AI Visualization -->
                <div class="w-1/2 flex items-center">
                    <!-- Background container -->
                    <div class="w-full h-[600px] bg-gray-50/50 rounded-3xl p-8 flex flex-col">
                        <h3 class="text-xl font-title mb-8">AI Process Visualization</h3>

                        <!-- AI Animation Container -->
                        <div class="flex-1 relative flex items-center justify-center bg-white rounded-2xl shadow-sm">
                            <svg class="w-full h-full absolute inset-0" viewBox="0 0 100 100">
                                <!-- Connecting Lines -->
                                <g class="opacity-20">
                                    <path
                                        v-for="(connection, index) in connections"
                                        :key="index"
                                        :d="`M ${connection.start.x} ${connection.start.y} L ${connection.end.x} ${connection.end.y}`"
                                        stroke="black"
                                        stroke-width="0.2"
                                        :class="{ 'opacity-50': connection.start.active || connection.end.active }"
                                    />
                                </g>

                                <!-- Nodes -->
                                <g>
                                    <circle
                                        v-for="(node, index) in nodes"
                                        :key="index"
                                        :cx="node.x"
                                        :cy="node.y"
                                        r="2"
                                        class="fill-black transition-all duration-500"
                                        :class="{ 'opacity-80 scale-150': node.active, 'opacity-30': !node.active }"
                                    />
                                </g>
                            </svg>

                            <!-- Central Brain Icon -->
                            <div class="relative z-10">
                                <Brain
                                    class="w-32 h-32 text-black transition-opacity duration-500"
                                    :class="{ 'opacity-40': true, 'opacity-60': currentStep === 1 }"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 flex flex-col">
                    <div class="max-w-2xl">
                        <h2 class="font-title text-3xl font-bold mb-6 text-black">
                            The Future of Fragrance Creation - <br/>
                            "Where Emotion Meets Innovation"
                        </h2>

                        <p class="text-base text-gray-600 mb-8 leading-relaxed">
                            Our cutting-edge AI technology and expert craftsmanship work together to create a fragrance
                            experience
                            that is deeply personal and truly one of a kind.
                        </p>

                        <div class="p-6 bg-gray-50 rounded-xl border border-black/5 mb-12">
                            <h4 class="font-title text-lg font-medium mb-3">
                                {{
                                    currentStep === 0 ? 'Emotional Analysis' :
                                        currentStep === 1 ? 'Neural Processing' :
                                            'Scent Creation'
                                }}
                            </h4>
                            <p class="text-gray-600">
                                {{
                                    currentStep === 0 ? 'Your emotions and preferences are analyzed by our AI to understand your unique personality.' :
                                        currentStep === 1 ? 'Advanced neural networks map emotional patterns to fragrance combinations.' :
                                            'Your unique fragrance profile is transformed into a precise formula.'
                                }}
                            </p>
                        </div>

                        <!-- Product Images -->
                        <div class="grid grid-cols-2 gap-6">
                            <img
                                src="https://placehold.co/600x400"
                                alt="Bottle engraving detail"
                                class="w-full h-auto rounded-xl"
                            />
                            <img
                                src="https://placehold.co/600x400"
                                alt="Luxury packaging"
                                class="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

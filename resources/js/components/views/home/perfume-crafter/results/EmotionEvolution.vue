<script setup lang="ts">

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Activity, Target} from "lucide-vue-next";
import {usePerfumeCrafterStore} from "@/stores/perfume-crafter";
import {LineChart} from '@/components/ui/chart-line'

const perfumeCrafterStore = usePerfumeCrafterStore();
const lineColors = ['#3b82f6', '#ef4444', '#a855f7']
</script>

<template>
    <Card class="relative overflow-hidden bg-gradient-to-br from-white/90 to-white/70 backdrop-blur border-2">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5 pointer-events-none">
            <div class="absolute inset-0"
                 style="background-image: url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h20L0 20z'/%3E%3C/g%3E%3C/svg%3E');"></div>
        </div>
        <CardHeader>
            <CardTitle class="flex items-center gap-2 text-2xl">
                <div class="p-2 rounded-full bg-purple-100">
                    <Activity class="w-6 h-6 text-purple-600"/>
                </div>
                <span
                    class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Emotion Evolution
          </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <LineChart
                :data="perfumeCrafterStore.composition.emotion_evolution_graph.data"
                index="step"
                :colors="lineColors"
                :categories="perfumeCrafterStore.composition.emotion_evolution_graph.labels"
                :show-legend="false"
            />
            <div class="flex gap-4 mt-4 text-sm">
                <!-- Générer dynamiquement les légendes basées sur les labels -->
                <div
                    v-for="(label, index) in perfumeCrafterStore.composition.emotion_evolution_graph.labels"
                    :key="label"
                    class="flex items-center gap-2"
                >
                    <div
                        class="w-3 h-0.5"
                        :class="{
              'bg-blue-500': index === 0,
              'bg-red-500': index === 1,
              'bg-purple-500': index === 2
            }"
                    ></div>
                    <span>{{ label }}</span>
                </div>
            </div>
        </CardContent>
    </Card>
</template>

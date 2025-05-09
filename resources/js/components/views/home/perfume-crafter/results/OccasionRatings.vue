<script setup lang="ts">

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Activity, Target} from "lucide-vue-next";
import {usePerfumeCrafterStore} from "@/stores/perfume-crafter";
import { BarChart } from '@/components/ui/chart-bar'

const perfumeCrafterStore = usePerfumeCrafterStore();
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
            Occasion Ratings
          </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <BarChart
                :data="perfumeCrafterStore.composition.occasion_rating_graph"
                index="name"
                :categories="['total']"
                class="h-[400px]"
                :options="{
        scales: {
            x: {
                ticks: {
                    maxRotation: 45,  // Rotation des labels
                    minRotation: 45,
                    autoSkip: false   // Afficher tous les labels
                }
            }
        },
        layout: {
            padding: {
                bottom: 40  // Marge supplémentaire en bas
            }
        }
    }"
                :y-formatter="(tick, i) => {
      return typeof tick === 'number'
        ? `${new Intl.NumberFormat('us').format(tick).toString()}%`
        : ''
    }"
            />
        </CardContent>
    </Card>
</template>

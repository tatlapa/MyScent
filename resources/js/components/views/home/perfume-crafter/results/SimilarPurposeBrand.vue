<script setup lang="ts">
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {AlertCircle, AlertTriangle, ChartBar, CheckCircle2, CircleCheck, Target} from "lucide-vue-next";
import {usePerfumeCrafterStore} from "@/stores/perfume-crafter";

const perfumeCrafterStore = usePerfumeCrafterStore();
</script>

<template>
    <Card v-if="perfumeCrafterStore.composition.similar_purpose_brand_name"
          class="relative overflow-hidden bg-gradient-to-br from-white/90 to-white/70 backdrop-blur border-2">
        <div class="absolute inset-0 opacity-5 pointer-events-none">
            <div class="absolute inset-0"
                 style="background-image: url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h20L0 20z'/%3E%3C/g%3E%3C/svg%3E');"></div>
        </div>

        <CardHeader>
            <CardTitle class="flex items-center gap-2 text-2xl">
                <div class="p-2 rounded-full bg-purple-100">
                    <Target class="w-6 h-6 text-purple-600"/>
                </div>
                <span
                    class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Similar Purpose Brand
          </span>
            </CardTitle>
        </CardHeader>

        <CardContent>
            <div class="space-y-6">
                <div class="flex items-start justify-between">
                    <div class="space-y-2">
                        <h3 class="text-2xl font-bold text-gray-800">
                            {{
                                perfumeCrafterStore.composition.similar_purpose_brand_name.name
                            }}
                        </h3>
                        <div class="flex items-center gap-3">
                            <Badge
                                class="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500">
                  <span class="flex items-center gap-1.5 text-sm">
                    <ChartBar class="w-4 h-4"/>
                    Match Score
                  </span>
                            </Badge>
                            <div class="flex items-center gap-2">
                                <div class="w-32 h-2 rounded-full bg-gray-200">
                                    <div
                                        class="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                                        :style="`width: ${perfumeCrafterStore.composition.similar_purpose_brand_name.match_percentage}%`"
                                    ></div>
                                </div>
                                <span class="font-semibold text-gray-700">
                    {{ perfumeCrafterStore.composition.similar_purpose_brand_name.match_percentage }}%
                  </span>
                            </div>
                        </div>
                    </div>

                    <!-- Image du parfum similaire -->
                    <div v-if="perfumeCrafterStore.composition.similar_purpose_brand_name.image_url"
                         class="w-24 h-24 rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <img
                            :src="perfumeCrafterStore.composition.similar_purpose_brand_name.image_url"
                            :alt="perfumeCrafterStore.composition.similar_purpose_brand_name.name"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <!-- Image placeholder si pas d'image disponible -->
                    <div v-else class="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
                        <span class="text-gray-400 text-xs text-center px-2">Image non disponible</span>
                    </div>
                </div>

                <div class="grid gap-4 md:grid-cols-2">
                    <div class="space-y-3">
                        <h4 class="flex items-center gap-2 text-lg font-semibold text-emerald-700">
                            <CheckCircle2 class="w-5 h-5"/>
                            Matching Elements
                        </h4>
                        <div class="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                            <div class="flex gap-3">
                                <div class="mt-1">
                                    <CircleCheck class="w-5 h-5 text-emerald-600"/>
                                </div>
                                <p class="text-emerald-800">
                                    {{
                                        perfumeCrafterStore.composition.similar_purpose_brand_name.plus
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <h4 class="flex items-center gap-2 text-lg font-semibold text-rose-700">
                            <AlertCircle class="w-5 h-5"/>
                            Key Differences
                        </h4>
                        <div class="p-4 rounded-lg bg-rose-50 border border-rose-200">
                            <div class="flex gap-3">
                                <div class="mt-1">
                                    <AlertTriangle class="w-5 h-5 text-rose-600"/>
                                </div>
                                <p class="text-rose-800">
                                    {{
                                        perfumeCrafterStore.composition.similar_purpose_brand_name.cons
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
</template>

<script setup lang="ts">
import { usePerfumeCrafterStore } from "@/stores/perfume-crafter";
import { usePerfumeRecommendations } from "@/composables/usePerfumeRecommendations";
import { BackgroundHighLight } from "@/components/ui/background-highlight";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { X, RefreshCw, Sparkles, Loader2 } from "lucide-vue-next";
import { sections } from "./sections/constants";
import {
    CollapsibleSection,
    Demographics,
    EmotionsSelector,
    OccasionSelector,
    ColorPicker,
    AdvancedSelector,
} from "./sections";
import { storeToRefs } from "pinia";
import { nextTick, ref } from "vue";
import { Link } from "@inertiajs/vue3";
import { PerfumeResult } from "./index";

const perfumeCrafterStore = usePerfumeCrafterStore();

const {
    selectedTags,
    customValues,
    showResult,
    composition,
    isCrafting,
    sortedTags,
    hasSelection,
} = storeToRefs(perfumeCrafterStore);
const isModalOpen = ref(false);

async function handleCraft() {
    try {
        await perfumeCrafterStore.craftPerfume();
    } catch (error) {
        console.error(error);
    }
}

const {
    product,
    isLoading: isProductLoading,
    error: productError,
} = usePerfumeRecommendations(selectedTags, customValues);

const openSections = ref<Record<string, boolean>>(
    sections.reduce(
        (acc, section) => ({
            ...acc,
            [section.id]: false,
        }),
        {}
    )
);

const getTagColor = (category: string): string => {
    switch (category) {
        case "gender":
            return "#60a5fa";
        case "age":
            return "#34d399";
        case "emotion":
            return "#facc15";
        case "occasion":
            return "#a855f7";
        case "color":
            return "#f97316";
        case "Scent Family":
            return "#14b8a6";
        case "longevity":
            return "#e11d48";
        case "custom":
            return "#6b7280";
        default:
            return "#9ca3af";
    }
};
</script>

<template>
    <section id="perfume-crafter" class="bg-black relative">
        <BackgroundHighLight
            containerClass="z-10 relative py-12 md:py-24 px-4 md:px-0"
            class="w-full"
        >
            <div
                class="z-mx-auto text-center text-white max-w-screen-xl px-4 md:px-0 space-y-6"
            >
                <h2
                    class="font-title font-bold text-5xl md:text-6xl bg-gradient-to-r from-white via-gray-300 to-gray-400 text-transparent bg-clip-text"
                >
                    Create Your Perfect Scent
                </h2>
                <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                    Personalize your fragrance journey by selecting preferences
                    and let our AI craft your signature scent.
                </p>
            </div>

            <div class="mx-auto max-w-screen-lg space-y-8">
                <div class="py-12 px-4">
                    <div class="space-y-4">
                        <CollapsibleSection
                            v-for="section in sections"
                            :key="section.id"
                            :title="section.title"
                            :icon="section.icon"
                            :category="section.category"
                            :selected-tags="selectedTags"
                            :default-expanded="true"
                            class="space-y-4"
                        >
                            <Demographics
                                v-if="section.id === 'about-you'"
                                :selected-tags="selectedTags"
                                @select="perfumeCrafterStore.addTag"
                                @preference-update="
                                    perfumeCrafterStore.updateCustomValue
                                "
                            />

                            <EmotionsSelector
                                v-if="section.id === 'emotions'"
                                :selected-tags="selectedTags"
                                @select="perfumeCrafterStore.addTag"
                            />

                            <OccasionSelector
                                v-if="section.id === 'occasions'"
                                :selected-tags="selectedTags"
                                @select="
                                    (occasion) =>
                                        perfumeCrafterStore.addTag(
                                            occasion,
                                            'occasion'
                                        )
                                "
                            />

                            <ColorPicker
                                v-if="section.id === 'color'"
                                :selected-color="
                                    selectedTags.find(
                                        (tag) => tag.category === 'color'
                                    )?.color
                                "
                                @select="
                                    (color, name) =>
                                        perfumeCrafterStore.addTag(
                                            name,
                                            'color',
                                            color
                                        )
                                "
                            />
                        </CollapsibleSection>
                    </div>
                </div>
            </div>
        </BackgroundHighLight>

        <div class="z-10 sticky bottom-0 left-0 right-0">
            <Card
                class="rounded-t-lg border-0 bg-transparent supports-[backdrop-filter]:bg-transparent"
            >
                <div
                    class="bg-transparent backdrop-blur-sm supports-[backdrop-filter]:bg-blue-500/30 p-6 rounded-t-lg"
                >
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-medium text-white">Vos sélections</h3>
                        <span class="text-sm text-white"
                            >{{ selectedTags.length }} éléments
                            sélectionnés</span
                        >
                    </div>

                    <ScrollArea class="w-full max-h-32">
                        <div class="flex flex-wrap gap-2">
                            <template v-if="selectedTags.length === 0">
                                <Badge
                                    variant="outline"
                                    class="text-white border-white/20"
                                >
                                    Aucun élément sélectionné
                                </Badge>
                            </template>
                            <Badge
                                v-for="(tag, index) in sortedTags"
                                :key="index"
                                :style="{
                                    backgroundColor: `${
                                        tag.color || getTagColor(tag.category)
                                    }15`,
                                    color:
                                        tag.color || getTagColor(tag.category),
                                    borderColor: `${
                                        tag.color || getTagColor(tag.category)
                                    }30`,
                                }"
                                class="px-3 py-1 flex items-center gap-2 transition-all hover:scale-105"
                            >
                                {{ tag.text }}
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    class="h-4 w-4 p-0 hover:bg-transparent opacity-50 hover:opacity-100 transition-opacity"
                                    @click="
                                        () => perfumeCrafterStore.removeTag(tag)
                                    "
                                >
                                    <X class="h-3 w-3" />
                                </Button>
                            </Badge>
                        </div>
                    </ScrollArea>
                </div>

                <CardFooter
                    class="border-t border-blue-600/30 p-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between bg-transparent backdrop-blur-sm supports-[backdrop-filter]:bg-blue-500/20"
                >
                    <div class="flex-1 min-w-0">
                        <div
                            v-if="product && !isProductLoading"
                            class="flex gap-4"
                        >
                            <div
                                class="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-800/50 flex-shrink-0 border border-gray-700/30"
                            >
                                <img
                                    v-if="product.image"
                                    :src="product.image"
                                    :alt="product.name"
                                    class="object-cover w-full h-full"
                                />
                                <div
                                    v-else
                                    class="w-full h-full flex items-center justify-center"
                                >
                                    <img
                                        src="https://placehold.co/64x64"
                                        alt="placeholder"
                                        class="object-cover w-full h-full opacity-30"
                                    />
                                </div>
                            </div>

                            <div
                                class="flex flex-col justify-center gap-1.5 min-w-0"
                            >
                                <span class="text-xs text-gray-400"
                                    >Parfum similaire suggéré</span
                                >
                                <div class="flex flex-col gap-0.5">
                                    <div class="flex items-center gap-2">
                                        <h4
                                            class="font-medium text-gray-200 truncate"
                                        >
                                            {{ product.title }}
                                        </h4>
                                        <Badge
                                            variant="secondary"
                                            class="bg-blue-900/50 hover:bg-blue-900/60 text-blue-300 border-blue-800/30"
                                        >
                                            {{ product.matchPercentage }}% match
                                        </Badge>
                                    </div>
                                    <div
                                        class="flex items-center justify-between"
                                    >
                                        <span
                                            class="text-sm font-semibold text-gray-300"
                                            >{{
                                                product.price || "109,99 €"
                                            }}</span
                                        >
                                        <a
                                            :href="product.url"
                                            target="_blank"
                                            class="text-xs text-blue-400 hover:text-blue-300 hover:underline"
                                        >
                                            Acheter ce parfum
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Placeholder quand pas de produit -->
                        <div v-else-if="isProductLoading" class="flex gap-4">
                            <Skeleton class="h-16 w-16 rounded-lg" />
                            <div class="flex flex-col gap-2 justify-center">
                                <Skeleton class="h-4 w-32" />
                                <Skeleton class="h-5 w-40" />
                                <Skeleton class="h-4 w-24" />
                            </div>
                        </div>

                        <!-- Espace vide pour maintenir la structure quand il n'y a rien -->
                        <div v-else class="flex-1"></div>
                    </div>

                    <!-- Boutons d'action - maintenant toujours à droite -->
                    <div
                        class="flex items-center gap-3 shrink-0 justify-end sm:justify-end ml-auto"
                    >
                        <Button
                            size="default"
                            @click="perfumeCrafterStore.reset()"
                            class="gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 border-0"
                        >
                            <RefreshCw class="h-5 w-5" />
                            <span class="hidden sm:inline">Réinitialiser</span>
                        </Button>

                        <Button
                            @click="handleCraft"
                            :disabled="isLoading || isCrafting"
                            size="default"
                            class="gap-2 bg-white hover:bg-gray-200 text-black"
                        >
                            <template v-if="isCrafting">
                                <Loader2 class="h-5 w-5 animate-spin" />
                            </template>
                            <template v-else>
                                <Sparkles class="h-5 w-5" />
                            </template>
                            Créer mon parfum
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
        <PerfumeResult />
    </section>
</template>

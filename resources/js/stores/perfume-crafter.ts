import { defineStore } from 'pinia'
import {Tag, CustomizationValue, PerfumeComposition} from '@/types/perfume-crafter'
import axios from "axios";

interface PerfumeCrafterState {
    selectedTags: Tag[]
    customValues: CustomizationValue[],
    description: string | null
    isLoading: boolean
    isImageLoading: boolean
    promptId: string | null
    isCrafting: boolean
    error: string | null
    product: any
    isProductLoading: boolean
    lastUpdateTime: number
    customizationValues: Record<string, string>
    productError: string | null
    composition: PerfumeComposition
    showResult: boolean
    pollingInterval: any
}

export const usePerfumeCrafterStore = defineStore('perfume-crafter', {
    state: (): PerfumeCrafterState => ({
        selectedTags: [],
        customValues: [],
        description: null,
        isLoading: false,
        isImageLoading: false,
        promptId: null,
        isCrafting: false,
        error: null,
        product: null,
        isProductLoading: false,
        productError: null,
        composition: null,
        showResult: false,
        pollingInterval: null,
    }),

    getters: {
        hasSelection: (state) =>
            state.selectedTags.length > 0 || state.customValues.length > 0,

        sortedTags: (state) => {
            const categoryOrder = [
                'gender', 'age', 'emotion', 'occasion',
                'color', 'Scent Family', 'longevity', 'custom'
            ];
            return [...state.selectedTags].sort((a, b) =>
                categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
            );
        },
    },
    actions: {
        async generatePerfumeImage(id: number) {

            try {
                this.isImageLoading = true;

                const response = await axios.post( `/api/perfume/image/generate/${this.composition.id}`);

                if(response.data.status == 'success' && response.data.prompt_id)
                {
                    this.promptId = response.data.prompt_id;
                    this.startPollingPerfumeImage();
                    return true;
                }
            } catch (error: any) {
                console.error(error);
                return false;
            } finally {
                this.isImageLoading = false;
            }

            return false;
        },
        startPollingPerfumeImage() {
            this.stopPolling()

            this.pollingInterval = setInterval(async () => {
                if (!this.promptId) {
                    this.stopPolling()
                    return
                }

                try {
                    const response = await axios.get(`/api/perfume/image/history/${this.composition.id}/${this.promptId}`)

                    if (response.data.status === 'error') {
                        this.error = response.data.message || 'Erreur pendant la génération'
                        this.stopPolling()
                        this.isImageLoading = false
                        return
                    }

                    if (response.data.status === 'success') {
                        this.composition.image_url = response.data.storage_path
                        this.isImageLoading = false
                        this.stopPolling()
                        return
                    }
                } catch (error) {
                    console.error('Erreur de polling:', error)
                    if (this.pollingAttempts >= 3) {
                        this.error = `Erreur lors du suivi: ${error.message}`
                        this.isImageLoading = false
                        this.stopPolling()
                    }
                }
            }, 3000)
        },
        stopPolling() {
            if (this.pollingInterval) {
                clearInterval(this.pollingInterval)
                this.pollingInterval = null
            }
        },
        async craftPerfume() {
            if (this.isCrafting) return;

            this.isCrafting = true;
            this.error = null;

            try {
                const response = await axios.post('/api/perfume/craft', {
                    tags: this.selectedTags,
                    customValues: this.customValues
                });

                if (response.data.status === 'success') {
                    this.composition = response.data.data;
                    this.showResult = true;

                    this.generatePerfumeImage(this.composition.id);

                } else {
                    this.error = response.data.message || 'Une erreur est survenue';
                }
            } catch (error) {
                console.error('Error crafting perfume:', error);
                this.error = error.response?.data?.message || 'Erreur lors de la création du parfum';
                this.showResult = false;
            } finally {
                this.isCrafting = false;
            }
        },
        addTag(text: string, category: string, color?: string) {
            if (category === 'emotion') {
                const existingTag = this.selectedTags.find(
                    tag => tag.category === 'emotion' && tag.text === text
                );


                // Si l'émotion est déjà sélectionnée, on la retire
                if (existingTag) {
                    this.selectedTags = this.selectedTags.filter(tag => tag !== existingTag);
                    return;
                }

                // Compter les émotions actuelles
                const currentEmotions = this.selectedTags.filter(tag => tag.category === 'emotion');



                // Si on a moins de 3 émotions, on peut en ajouter une nouvelle
                if (currentEmotions.length < 3) {
                    this.selectedTags = [...this.selectedTags, { text, category }];
                }
                return;
            }

            // Pour les autres catégories, on garde la logique existante
            if (category === 'occasion') {
                const isSelected = this.selectedTags.some(
                    tag => tag.category === category && tag.text === text
                );

                if (isSelected) {
                    this.selectedTags = this.selectedTags.filter(
                        tag => !(tag.category === category && tag.text === text)
                    );
                    return;
                }
            }

            if (category === 'Scent Family') {
                if (!text) return;

                const familyName = text.split('(')[0].trim();
                const otherFamilies = this.selectedTags.filter(tag =>
                    !(tag.category === 'Scent Family' && tag.text.startsWith(familyName))
                );
                this.selectedTags = [...otherFamilies, { text, category }];
                return;
            }

            const filteredTags = this.selectedTags.filter(tag => tag.category !== category);
            this.selectedTags = [...filteredTags, { text, category, color }];
        },
        removeTag(tagToRemove: Tag) {
            console.log(this.selectedTags);
            console.log(tagToRemove);
            this.selectedTags = this.selectedTags.filter(tag =>
                tag.text !== tagToRemove.text || tag.category !== tagToRemove.category
            );
        },

        updateCustomValue(category: string, value: string) {
            const newValues = this.customValues.filter(v => v.category !== category);
            if (value) {
                newValues.push({ category, value });
            }
            this.customValues = newValues;
        },

        reset() {
            this.selectedTags = [];
            this.customValues = [];
        },
        setComposition(composition: any) {
            this.composition = composition;
            this.showResult = true;
        },
        closeResult() {
            this.showResult = false;
        }
    },
    persist: {
        key: 'perfume-crafter-store',
        storage: localStorage,
        paths: ['selectedTags', 'customValues', 'composition']
    }
})

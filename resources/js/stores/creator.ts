import {defineStore} from 'pinia'
import axios from "axios"
import { toast } from 'vue3-toastify';
import emotions from '@/../assets/json/emotions.json'
import ages from '@/../assets/json/ages.json'
import genders from '@/../assets/json/genders.json'
import styles from '@/../assets/json/styles.json'
import seasons from '@/../assets/json/seasons.json'
import scenes from '@/../assets/json/scenes.json'

interface Recommendation {
    perfume: string;
    price: number;
    product_url: string;
    local_image_path: string;
    analysis: any;
}

export interface Emotion {
    id: number;
    name: string;
    uri: string;
    moodPairs: string[][];
}

interface MoodValue {
    value: number;
    [key: string]: number;
}

interface Style {
    [category: string]: string[];
}

interface StyleCategories {
    [category: string]: string;
}

interface CreatorState {
    loading: boolean;
    loadingRecommendation: boolean;
    isStarted: boolean;
    currentStep: number;
    emotionsData: Emotion[];
    ageData: string[];
    genderData: string[];
    styleData: Style;
    seasonData: string[];
    sceneData: string[];
    gender: string | null;
    age: string | null;
    emotion: Emotion | null;
    moods: string[] | null;
    styles: StyleCategories;
    color: string;
    season: string | null;
    scene: string | null;
    recommendation: Recommendation | null;
}

export const useCreatorStore = defineStore('creator-store', {
    state: (): CreatorState => {

        const initialGender = genders.length > 0 ? genders[0] : null;
        const initialAge = ages.length > 0 ? ages[0] : null;
        const initialStyles: StyleCategories = Object.fromEntries(
            Object.entries(styles).map(([category, styles]) => [category, styles[0]])
        );
        const initialSeason = seasons.length > 0 ? seasons[0] : null;
        const initialScene = scenes.length > 0 ? scenes[0] : null;

        return {
            loading: false,
            loadingRecommendation: true,
            isStarted: false,
            currentStep: 1,
            emotionsData: emotions as Emotion[],
            ageData: ages as string[],
            genderData: genders as string[],
            styleData: styles as Style,
            seasonData: seasons as string[],
            sceneData: scenes as string[],
            gender: initialGender,
            age: initialAge,
            styles: initialStyles,
            emotion: null,
            moods: null,
            color: "#00FF00",
            season: initialSeason,
            scene: initialScene,
            recommendation: null
        }
    },
    actions: {
        startCreator() {
            this.isStarted = true;
            this.currentStep = 1;
        },
        setCurrentStep(step: number) {
            this.currentStep = step;

            if (this.currentStep <= 1) {
                this.recommendation = null;
            }

            if (this.currentStep >= 2 && this.recommendation == null) {
                this.fetchRecommendation();
            }
        },
        setEmotion(emotion: Emotion) {
            this.emotion = emotion;
            this.moods = [];
        },
        setGender(gender: string) {
            this.gender = gender;
        },
        setAge(age: string) {
            this.age = age;
        },
        selectMood(moodKey: string, oppositeMood: string) {
            if (!this.moods) {
                this.moods = [];
            }

            const index = this.moods.indexOf(moodKey);
            const oppositeIndex = this.moods.indexOf(oppositeMood);

            if (index > -1) {
                this.moods.splice(index, 1);
            } else {
                if (oppositeIndex > -1) {
                    this.moods.splice(oppositeIndex, 1);
                }

                if (this.moods.length < 3) {
                    this.moods.push(moodKey);
                } else {
                    toast.warning('You have already selected 3 moods. Remove one to add a new one.');
                    return;
                }
            }
        },
        async fetchRecommendation() {

            this.loadingRecommendation = true;

            if (this.moods == null) {
                return;
            }

            try {
                const response = await axios.post<{ recommendation: any }>('/api/recommendations', {
                    gender: this.gender,
                    emotion: this.emotion?.name,
                    moods: this.moods
                });

                if (response.data.recommendation) {

                    if (response.data.recommendation.error) {
                        this.recommendation = null;
                    } else {
                        this.recommendation = response.data.recommendation;
                    }
                }
            } catch (error) {
                this.recommendation = null;
                console.error("An error occurred while fetching recommendation:", error);
            } finally {
                this.loadingRecommendation = false;
            }
        },
        async startGeneration() {
            this.loading = true;

            try {
                const response = await axios.post<{ job_id: string }>('/api/generations', {
                    emotion: this.emotion?.name,
                    mood_pairs: this.moods,
                    age: this.age,
                    gender: this.gender,
                    styles: this.styles,
                    color: this.color,
                    season: this.season,
                    scene: this.scene,
                });

                return response.status === 200 ? response.data.job_id : false;
            } catch (error) {
                console.error("An error occurred while requesting generation:", error);
                return false;
            } finally {
                this.loading = false;
            }
        },
        async processingStatus(generation_id: string) {
            try {
                const response = await axios.post<any>(`/api/generations/status/${generation_id}`);
                return response.status === 200 ? response.data : false;
            } catch (error) {
                console.error("An error occurred while requesting generation status:", error);
                return false;
            }
        }
    },
    persist: {
        key: 'creator-store',
        storage: localStorage,
        paths: [
            'gender',
            'emotion',
            'moods',
            'age',
            'styles',
            'color',
            'season',
            'scene'
        ],
    },
})

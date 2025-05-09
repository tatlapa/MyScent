<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { Button } from "@/components/ui/button";
import { heroPerfume } from "@/../assets/img";
import { ChevronRight } from "lucide-vue-next";

const didScroll = ref(false);
const heroParallax = ref<HTMLElement | null>(null);
const heroSlider = ref<HTMLElement | null>(null);
const sliderAnimation = ref<Animation | null>(null);
const mousePosition = ref({ x: 0, y: 0 });
const cursorFollowElements = ref<NodeListOf<Element> | null>(null);

// Couleurs arc-en-ciel pour les éléments animés
const rainbowColors = [
    "from-pink-500 to-violet-500",
    "from-violet-500 to-blue-500",
    "from-blue-500 to-teal-500",
    "from-teal-500 to-orange-500",
    "from-orange-500 to-pink-500"
];

// Couleur aléatoire du gradient
const randomGradient = computed(() => {
    return rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
});

// Suivi du curseur pour les animations interactives
const handleMouseMove = (e: MouseEvent) => {
    mousePosition.value = {
        x: e.clientX,
        y: e.clientY
    };

    if (cursorFollowElements.value) {
        cursorFollowElements.value.forEach((element, i) => {
            const speed = 0.05 - (i * 0.01);
            const x = (window.innerWidth / 2 - mousePosition.value.x) * speed;
            const y = (window.innerHeight / 2 - mousePosition.value.y) * speed;

            element.setAttribute('style', `transform: translate(${x}px, ${y}px);`);
        });
    }
};

const scrollInProgress = () => {
    if (sliderAnimation.value != null) {
        sliderAnimation.value.cancel();
    }
    didScroll.value = true;
};

const raf = () => {
    if (didScroll.value) {
        if (heroParallax.value !== null) {
            let scale = 1 + window.scrollY / 1000;
            let opacity = Math.max(1 - window.scrollY / 500, 0);

            heroParallax.value.style.transform = `scale(${scale})`;
            heroParallax.value.style.opacity = `${opacity}`;
        }

        if (heroSlider.value != null) {
            let scrollRatio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            let translateX = scrollRatio * 50;

            heroSlider.value.style.transform = `translateX(-${translateX}%)`;
        }

        didScroll.value = false;
    }

    requestAnimationFrame(raf);
};

const scrollEnded = () => {
    animate();
};

const animate = () => {
    if (heroSlider.value != null) {
        sliderAnimation.value = heroSlider.value.animate(
            [
                { transform: `translateX(0%)` },
                { transform: "translateX(-50%)" }
            ],
            {
                duration: 20000,
                iterations: Infinity
            }
        );
    }
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

onMounted(() => {
    heroParallax.value = document.getElementById("hero-parallax");
    heroSlider.value = document.getElementById("hero-slider");
    cursorFollowElements.value = document.querySelectorAll('.cursor-follow');

    requestAnimationFrame(raf);
    animate();

    window.addEventListener("scroll", scrollInProgress);
    window.addEventListener("scrollend", scrollEnded);
    window.addEventListener("mousemove", handleMouseMove);

    // Animation du texte avec effet de dégradé arc-en-ciel
    const heroTitle = document.querySelector('.rainbow-text');
    if (heroTitle) {
        const text = heroTitle.textContent || '';
        heroTitle.innerHTML = '';

        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animationDelay = `${i * 0.05}s`;
            heroTitle.appendChild(span);
        });
    }
});

onUnmounted(() => {
    window.removeEventListener("scroll", scrollInProgress);
    window.removeEventListener("scrollend", scrollEnded);
    window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
    <section id="hero" class="min-h-screen relative w-full overflow-hidden bg-white">
        <!-- Orbes lumineux suivant le curseur -->
        <div class="pointer-events-none absolute inset-0 z-20">
            <div class="cursor-follow absolute w-64 h-64 rounded-full bg-pink-500/10 filter blur-3xl"></div>
            <div class="cursor-follow absolute w-96 h-96 rounded-full bg-blue-500/10 filter blur-3xl"></div>
            <div class="cursor-follow absolute w-48 h-48 rounded-full bg-purple-500/10 filter blur-3xl"></div>
        </div>

        <div class="h-screen w-full flex justify-center items-center relative container mx-auto py-12 md:py-24 xl:py-32 px-4 sm:px-6 lg:px-8">
            <div id="hero-parallax" class="h-full w-full relative flex flex-col md:flex-row">
                <div class="w-full md:w-1/2 flex flex-col justify-center h-full p-8 z-30">
                    <div class="relative overflow-hidden rounded-lg mb-6 w-fit mx-auto md:mx-0">
            <span class="px-4 py-1 text-xs font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 uppercase tracking-wider">
              ✨ Nouveau
            </span>
                        <div class="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-30 blur-sm"></div>
                    </div>

                    <h1 class="rainbow-text relative z-30 text-center md:text-left font-title font-bold text-4xl md:text-6xl text-gray-900 leading-[1.1] tracking-tight animate-fade-in">
                        {{ $t('home.hero.title') }}
                    </h1>

                    <p class="relative text-center md:text-left text-gray-600 z-30 mt-6 max-w-md font-title text-lg md:text-2xl animate-slide-in-left">
                        {{ $t('home.hero.subtitle') }}
                    </p>

                    <div class="flex mt-12 mx-auto w-fit md:mx-0 animate-slide-up">
                        <button class="rainbow-button group relative overflow-hidden px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2">
              <span class="relative z-10 font-title font-medium text-lg text-white">
                {{ $t('home.hero.call_to_action') }}
              </span>
                            <ChevronRight class="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

                            <!-- Overlay du bouton avec animation -->
                            <div class="absolute inset-0 -z-10 animate-gradient-x bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 background-size-200"></div>
                        </button>
                    </div>
                </div>

                <div class="md:w-1/2 flex flex-col justify-center items-center h-full relative z-30">
                    <vue-particles
                        id="tsparticles"
                        :particlesLoaded="particlesLoaded"
                        :options="{
                    background: {
                        color: {
                            value: '#0d47a1'
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: 'bounce',
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 }
                        }
                    },
                    detectRetina: true
                }"
                    />
                </div>
<!--                    &lt;!&ndash; Conteneur de l'image avec effet de lueur &ndash;&gt;-->
<!--                    <div class="relative group">-->
<!--                        &lt;!&ndash; Image avec effet de flottement &ndash;&gt;-->
<!--                        <div class="relative floating-animation">-->
<!--                            <img :src="heroPerfume" alt="hero-perfume" class="max-w-full h-auto object-contain" />-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Effet rainbow pour les boutons */
.rainbow-button {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
}

.rainbow-button:hover {
    transform: translateY(-2px);
}

/* Animation de flottement pour l'image principale */
.floating-animation {
    animation: floating 6s ease-in-out infinite;
}

.floating-badge {
    animation: floating-small 4s ease-in-out infinite;
}

.floating-badge-reverse {
    animation: floating-small 4s ease-in-out infinite reverse;
}

/* Animation pour les particules */
.particle {
    position: absolute;
    border-radius: 50%;
    transform: translateZ(0);
    animation: float infinite linear;
    will-change: transform;
}

/* Animation pour le texte arc-en-ciel */
.rainbow-text span {
    display: inline-block;
    animation: rainbow-text 8s linear infinite;
}

@keyframes rainbow-text {
    0% { color: #ff1a75; }
    20% { color: #8a2be2; }
    40% { color: #3b82f6; }
    60% { color: #14b8a6; }
    80% { color: #f97316; }
    100% { color: #ff1a75; }

    /* Alternativement, pour un fond blanc, vous pourriez préférer utiliser un dégradé au lieu de couleurs unies */
    /*
    0% { background: linear-gradient(90deg, #ff1a75, #8a2be2); -webkit-background-clip: text; color: transparent; }
    50% { background: linear-gradient(90deg, #3b82f6, #14b8a6); -webkit-background-clip: text; color: transparent; }
    100% { background: linear-gradient(90deg, #f97316, #ff1a75); -webkit-background-clip: text; color: transparent; }
    */
}

@keyframes floating {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

@keyframes floating-small {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
}

.animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
}

.animate-slide-in-left {
    animation: slideInLeft 1s ease-out forwards;
    animation-delay: 0.2s;
    opacity: 0;
}

.animate-slide-up {
    animation: slideUp 0.8s ease-out forwards;
    animation-delay: 0.4s;
    opacity: 0;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideInLeft {
    from {
        transform: translateX(-50px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>

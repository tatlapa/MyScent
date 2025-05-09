import { defineComponent, ref, onMounted, onUnmounted, mergeProps, useSSRContext, createVNode, resolveDynamicComponent, unref, withCtx, computed, createTextVNode, withDirectives, withKeys, vModelText, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, renderSlot } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderVNode, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { Link, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$u, c as cn, a as _sfc_main$w, b as _sfc_main$x, d as _sfc_main$y, e as _sfc_main$z, f as _sfc_main$A } from "./index-DBcC5thU.js";
import { PenTool, Network, Gift, Brain, Heart, ArrowRight, Sparkles, Plus, X, Upload, Camera, ExternalLink, Users, Calendar, Palette, Beaker, ChevronDown, Leaf, Moon, Crown, Zap, Cloud, AlertTriangle, Sun, Plane, PartyPopper, GraduationCap, Dumbbell, Home, Briefcase } from "lucide-vue-next";
import { defineStore, storeToRefs } from "pinia";
import axios from "axios";
import { toast } from "vue3-toastify";
import { CheckIcon } from "@radix-icons/vue";
import { useForwardPropsEmits, CheckboxRoot, CheckboxIndicator, TooltipRoot, TooltipPortal, TooltipContent, TooltipProvider, TooltipTrigger } from "radix-vue";
import { _ as _sfc_main$v } from "./Label-Bg3AjaYj.js";
import { useVModel } from "@vueuse/core";
import "class-variance-authority";
import "laravel-vue-i18n";
import "clsx";
import "tailwind-merge";
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const didScroll = ref(false);
    const heroParallax = ref(null);
    const heroSlider = ref(null);
    const sliderAnimation = ref(null);
    const scrollInProgress = () => {
      if (sliderAnimation.value != null) {
        sliderAnimation.value.cancel();
      }
      didScroll.value = true;
    };
    const raf = () => {
      if (didScroll.value) {
        if (heroParallax.value !== null) {
          let scale = 1 + window.scrollY / 1e3;
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
        sliderAnimation.value = heroSlider.value.animate([
          { transform: `translateX($0%)` },
          { transform: "translateX(-50%)" }
        ], {
          duration: 2e4,
          iterations: Infinity
        });
      }
    };
    onMounted(() => {
      heroParallax.value = document.getElementById("hero-parallax");
      heroSlider.value = document.getElementById("hero-slider");
      requestAnimationFrame(raf);
      animate();
      window.addEventListener("scroll", scrollInProgress);
      window.addEventListener("scrollend", scrollEnded);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollInProgress);
      window.addEventListener("scrollend", scrollEnded);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        class: "min-h-screen relative w-full overflow-hidden"
      }, _attrs))} data-v-86579979><div class="h-screen w-full flex justify-center items-center relative container mx-auto py-12 md:py-24 xl:py-32 px-4 sm:px-6 lg:px-8" data-v-86579979><div id="hero-parallax" class="h-full w-full relative flex flex-col md:flex-row" data-v-86579979><div class="w-full md:w-1/2 flex flex-col justify-center h-full p-8" data-v-86579979><h1 class="relative z-30 text-center md:text-left font-title font-bold text-3xl md:text-5xl text-foreground leading-[1] tracking-tight animate-fade-in" data-v-86579979>${ssrInterpolate(_ctx.$t("home.hero.title"))}</h1><p class="relative text-center md:text-left text-muted-foreground z-30 mt-4 max-w-md font-title text-lg md:text-2xl animate-slide-in-left" data-v-86579979>${ssrInterpolate(_ctx.$t("home.hero.subtitle"))}</p><button class="mt-12 mx-auto w-fit md:mx-0 bg-foreground hover:bg-gray-950 text-white dark:text-black font-title font-medium text-lg px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg group relative overflow-hidden animate-slide-up" data-v-86579979>${ssrInterpolate(_ctx.$t("home.hero.call_to_action"))} <span class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-86579979></span></button></div><div class="hidden md:w-1/2 md:flex flex-col justify-center h-full" data-v-86579979></div></div></div></section>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/Hero.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-86579979"]]);
const _00022_ = "/build/assets/_00022_-C3rAK2au.webp";
const _00023_ = "/build/assets/_00023_-WzjdSyWD.webp";
const _00024_ = "/build/assets/_00024_-C_Kq2DQH.webp";
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "Personalized",
  __ssrInlineRender: true,
  setup(__props) {
    const features = ref([
      {
        image_uri: _00022_,
        title: "Made Just for You",
        content: "Our AI transforms your emotions into a fragrance crafted uniquely for you.",
        alt: "Personalized fragrance bottle with engraved name"
      },
      {
        image_uri: _00023_,
        title: "Unbox a Moment of Luxury",
        content: "From the bespoke packaging to your engraved bottle, every detail is designed to delight.",
        alt: "Luxury perfume unboxing experience"
      },
      {
        image_uri: _00024_,
        title: "Crafted by Science, Inspired by You",
        content: "Our advanced AI transforms your feelings into a custom blend, creating a scent thats as unique a you are.",
        alt: "AI scent creation process visualization"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "features",
        class: "bg-gray-50 relative overflow-hidden"
      }, _attrs))} data-v-a2b5983f><div class="max-w-screen-xl container mx-auto py-12 px-4 sm:px-6 lg:px-8" data-v-a2b5983f><div class="mb-24 relative" data-v-a2b5983f><h2 class="text-center" data-v-a2b5983f><span class="text-5xl md:text-6xl lg:text-7xl font-title font-medium tracking-tight" data-v-a2b5983f> Discover Your <br class="hidden sm:block" data-v-a2b5983f> Signature Scent </span></h2><div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-black/10" data-v-a2b5983f></div></div><div class="grid md:grid-cols-3 gap-6 mt-2 md:mt-20" data-v-a2b5983f><!--[-->`);
      ssrRenderList(features.value, (feature, index) => {
        _push(`<div class="group rounded-3xl bg-white shadow-lg h-[40rem] overflow-hidden flex flex-col items-start justify-start relative z-10 transition-all duration-300 hover:shadow-xl" data-v-a2b5983f><div class="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" data-v-a2b5983f></div><div class="absolute h-full bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-30 pointer-events-none" data-v-a2b5983f></div><div class="relative z-40 p-8 h-full flex flex-col justify-between" data-v-a2b5983f><h3 class="font-title font-semibold text-2xl md:text-[26px] text-white text-center w-full mb-4" data-v-a2b5983f>${ssrInterpolate(feature.title)}</h3><p class="text-white text-lg md:text-lg text-center w-full [text-wrap:balance]" data-v-a2b5983f>${ssrInterpolate(feature.content)}</p></div><div class="absolute inset-0 z-10 transition-transform duration-500 group-hover:scale-105" data-v-a2b5983f><div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" data-v-a2b5983f></div><img${ssrRenderAttr("src", feature.image_uri)}${ssrRenderAttr("alt", feature.alt)} class="h-full w-full object-cover transition-all duration-500" data-v-a2b5983f></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/Personalized.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const Personalized = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-a2b5983f"]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "Journey",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = ref([
      {
        icon: PenTool,
        title: "Discover Your Essence",
        description: "Answer a few questions, and let your personality shape your scent."
      },
      {
        icon: Network,
        title: "AI Tailored Precision",
        description: "Our advanced AI interprets your answers to craft a fragrance that embodies you."
      },
      {
        icon: Gift,
        title: "Arrives at Your Door",
        description: "Receive your custom scent, beautifully packaged and engraved, just for you."
      }
    ]);
    onMounted(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        {
          threshold: 0.2
        }
      );
      document.querySelectorAll(".journey-step").forEach((step) => {
        observer.observe(step);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white relative overflow-hidden" }, _attrs))} data-v-2cbfb947><div class="max-w-screen-xl container mx-auto py-12 px-4 sm:px-6 lg:px-8" data-v-2cbfb947><div class="mb-20 relative text-center" data-v-2cbfb947><span class="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4 block" data-v-2cbfb947>Your Personal Journey</span><h2 class="mb-6" data-v-2cbfb947><span class="font-title text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black" data-v-2cbfb947> A Journey to Your<br class="hidden sm:block" data-v-2cbfb947>Signature Scent </span></h2><p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto" data-v-2cbfb947> Experience the transformation of your personality into a unique fragrance, crafted exclusively for you. </p><div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-black/10" data-v-2cbfb947></div></div><div class="grid md:grid-cols-3 gap-8 relative mt-24" data-v-2cbfb947><!--[-->`);
      ssrRenderList(steps.value, (step, index) => {
        _push(`<div class="journey-step group relative opacity-0" data-v-2cbfb947><div class="relative bg-white border border-black/5 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-xl" data-v-2cbfb947><div class="absolute -top-6 left-8" data-v-2cbfb947><span class="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full font-title text-xl" data-v-2cbfb947>${ssrInterpolate(index + 1)}</span></div><div class="mb-8 mt-4" data-v-2cbfb947>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(step.icon), {
          class: "w-12 h-12 text-black transition-transform duration-500 group-hover:scale-110",
          "stroke-width": "1.5",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</div><div class="space-y-4" data-v-2cbfb947><h3 class="font-title text-2xl font-medium text-black" data-v-2cbfb947>${ssrInterpolate(step.title)}</h3><p class="text-gray-600 text-lg leading-relaxed" data-v-2cbfb947>${ssrInterpolate(step.description)}</p></div><div class="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-v-2cbfb947></div></div>`);
        if (index < 2) {
          _push(`<div class="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-black/10" data-v-2cbfb947></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/Journey.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const Journey = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-2cbfb947"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "FragranceCreation",
  __ssrInlineRender: true,
  setup(__props) {
    const currentStep = ref(0);
    const nodes = ref([
      { x: 30, y: 20, active: false },
      { x: 70, y: 20, active: false },
      { x: 20, y: 50, active: false },
      { x: 80, y: 50, active: false },
      { x: 30, y: 80, active: false },
      { x: 70, y: 80, active: false }
    ]);
    const connections = nodes.value.flatMap(
      (start, i) => nodes.value.slice(i + 1).map((end) => ({
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
      }, 3e3);
      onUnmounted(() => {
        clearInterval(interval);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))} data-v-f2799bae><div class="max-w-screen-xl container mx-auto py-12 px-4 sm:px-6 lg:px-8" data-v-f2799bae><div class="flex items-center gap-x-12" data-v-f2799bae><div class="w-1/2 flex items-center" data-v-f2799bae><div class="w-full h-[600px] bg-gray-50/50 rounded-3xl p-8 flex flex-col" data-v-f2799bae><h3 class="text-xl font-title mb-8" data-v-f2799bae>AI Process Visualization</h3><div class="flex-1 relative flex items-center justify-center bg-white rounded-2xl shadow-sm" data-v-f2799bae><svg class="w-full h-full absolute inset-0" viewBox="0 0 100 100" data-v-f2799bae><g class="opacity-20" data-v-f2799bae><!--[-->`);
      ssrRenderList(unref(connections), (connection, index) => {
        _push(`<path${ssrRenderAttr("d", `M ${connection.start.x} ${connection.start.y} L ${connection.end.x} ${connection.end.y}`)} stroke="black" stroke-width="0.2" class="${ssrRenderClass({ "opacity-50": connection.start.active || connection.end.active })}" data-v-f2799bae></path>`);
      });
      _push(`<!--]--></g><g data-v-f2799bae><!--[-->`);
      ssrRenderList(nodes.value, (node, index) => {
        _push(`<circle${ssrRenderAttr("cx", node.x)}${ssrRenderAttr("cy", node.y)} r="2" class="${ssrRenderClass([{ "opacity-80 scale-150": node.active, "opacity-30": !node.active }, "fill-black transition-all duration-500"])}" data-v-f2799bae></circle>`);
      });
      _push(`<!--]--></g></svg><div class="relative z-10" data-v-f2799bae>`);
      _push(ssrRenderComponent(unref(Brain), {
        class: ["w-32 h-32 text-black transition-opacity duration-500", { "opacity-40": true, "opacity-60": currentStep.value === 1 }]
      }, null, _parent));
      _push(`</div></div></div></div><div class="w-1/2 flex flex-col" data-v-f2799bae><div class="max-w-2xl" data-v-f2799bae><h2 class="font-title text-3xl font-bold mb-6 text-black" data-v-f2799bae> The Future of Fragrance Creation - <br data-v-f2799bae> &quot;Where Emotion Meets Innovation&quot; </h2><p class="text-base text-gray-600 mb-8 leading-relaxed" data-v-f2799bae> Our cutting-edge AI technology and expert craftsmanship work together to create a fragrance experience that is deeply personal and truly one of a kind. </p><div class="p-6 bg-gray-50 rounded-xl border border-black/5 mb-12" data-v-f2799bae><h4 class="font-title text-lg font-medium mb-3" data-v-f2799bae>${ssrInterpolate(currentStep.value === 0 ? "Emotional Analysis" : currentStep.value === 1 ? "Neural Processing" : "Scent Creation")}</h4><p class="text-gray-600" data-v-f2799bae>${ssrInterpolate(currentStep.value === 0 ? "Your emotions and preferences are analyzed by our AI to understand your unique personality." : currentStep.value === 1 ? "Advanced neural networks map emotional patterns to fragrance combinations." : "Your unique fragrance profile is transformed into a precise formula.")}</p></div><div class="grid grid-cols-2 gap-6" data-v-f2799bae><img src="https://placehold.co/600x400" alt="Bottle engraving detail" class="w-full h-auto rounded-xl" data-v-f2799bae><img src="https://placehold.co/600x400" alt="Luxury packaging" class="w-full h-auto rounded-xl" data-v-f2799bae></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/FragranceCreation.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const FragranceCreation = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-f2799bae"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = ref([
      {
        id: 1,
        name: "Lawrence M.",
        rating: 5,
        image: "https://placehold.co/400x500"
      },
      {
        id: 2,
        name: "Katherine R.",
        rating: 5,
        image: "https://placehold.co/400x500"
      },
      {
        id: 3,
        name: "Michael H.",
        rating: 5,
        image: "https://placehold.co/400x500"
      },
      {
        id: 4,
        name: "Matthew Lewis",
        rating: 5,
        image: "https://placehold.co/400x500"
      },
      {
        id: 5,
        name: "David K.",
        rating: 5,
        image: "https://placehold.co/400x500"
      },
      {
        id: 6,
        name: "Sarah J.",
        rating: 5,
        image: "https://placehold.co/400x500"
      },
      {
        id: 7,
        name: "Thomas R.",
        rating: 5,
        image: "https://placehold.co/400x500"
      },
      {
        id: 8,
        name: "Emma L.",
        rating: 5,
        image: "https://placehold.co/400x500"
      }
    ]);
    const visibleTestimonials = ref(/* @__PURE__ */ new Set());
    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute("data-testimonial-id"));
          if (entry.isIntersecting) {
            visibleTestimonials.value.add(id);
          }
        });
      }, {
        threshold: 0.2
      });
      document.querySelectorAll(".testimonial-card").forEach((el) => {
        observer.observe(el);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white py-12" }, _attrs))} data-v-b4508bb3><div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8" data-v-b4508bb3><div class="grid md:grid-cols-2 gap-12 mb-16" data-v-b4508bb3><div data-v-b4508bb3><h1 class="font-title text-4xl md:text-5xl font-bold mb-4 tracking-tight" data-v-b4508bb3> Loved By<br data-v-b4508bb3> Our Customers </h1><p class="text-gray-600 text-lg" data-v-b4508bb3> Authentic Luxor Customers </p></div><div class="flex items-center" data-v-b4508bb3><p class="text-gray-500 text-lg leading-relaxed" data-v-b4508bb3> Join our growing community of satisfied customers who have discovered their perfect signature scent through our innovative AI-powered fragrance creation process. Each bottle tells a unique story. </p></div></div><h3 class="text-lg text-gray-500 mb-8" data-v-b4508bb3>AUTHENTIC CUSTOMER TESTIMONIALS</h3><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" data-v-b4508bb3><!--[-->`);
      ssrRenderList(testimonials.value, (testimonial) => {
        _push(`<div${ssrRenderAttr("data-testimonial-id", testimonial.id)} class="${ssrRenderClass([{ "opacity-0": !visibleTestimonials.value.has(testimonial.id) }, "testimonial-card relative group"])}" data-v-b4508bb3><div class="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100" data-v-b4508bb3><img${ssrRenderAttr("src", testimonial.image)}${ssrRenderAttr("alt", testimonial.name)} class="w-full h-full object-cover" data-v-b4508bb3><div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" data-v-b4508bb3>`);
        _push(ssrRenderComponent(unref(Heart), { class: "absolute top-3 right-3 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" }, null, _parent));
        _push(`</div></div><div class="mt-3" data-v-b4508bb3><h4 class="text-sm font-medium" data-v-b4508bb3>${ssrInterpolate(testimonial.name)}</h4><div class="flex gap-0.5 mt-1" data-v-b4508bb3><!--[-->`);
        ssrRenderList(testimonial.rating, (star) => {
          _push(`<div class="text-xs text-gray-400" data-v-b4508bb3> ★ </div>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/Testimonials.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const Testimonials = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-b4508bb3"]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "IridescentCollection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden py-12 bg-background" }, _attrs))} data-v-d3516266><div class="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-accent/5 animate-gradient" data-v-d3516266></div><div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative" data-v-d3516266><div class="grid lg:grid-cols-2 gap-16 items-center" data-v-d3516266><div class="max-w-2xl" data-v-d3516266><h2 class="font-title text-2xl md:text-[30px] font-bold mb-6 tracking-tight" data-v-d3516266> Limited Edition<br data-v-d3516266> Iridescent Collection </h2><p class="text-lg text-muted-foreground mb-10 leading-relaxed" data-v-d3516266> For those who seek the extraordinary. A one-of-a-kind scent, available for a limited time. </p>`);
      _push(ssrRenderComponent(unref(_sfc_main$u), {
        variant: "default",
        class: "group bg-primary hover:bg-primary/90 transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-d3516266${_scopeId}>Shop Now</span>`);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "Shop Now"),
              createVNode(unref(ArrowRight), { class: "w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative h-[600px] w-full" data-v-d3516266><div class="absolute left-0 top-1/2 -translate-y-1/2 w-[80%] h-[500px] rounded-2xl overflow-hidden shadow-lg z-10 transform -rotate-6" data-v-d3516266><img src="https://placehold.co/600x800" alt="Limited Edition Perfume Bottle" class="w-full h-full object-cover" data-v-d3516266></div><div class="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] h-[500px] rounded-2xl overflow-hidden shadow-lg" data-v-d3516266><img src="https://placehold.co/600x800" alt="Limited Edition Perfume Box" class="w-full h-full object-cover" data-v-d3516266></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/IridescentCollection.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const IridescentCollection = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-d3516266"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "FinalCTA",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-black text-white py-40 overflow-hidden" }, _attrs))}><div class="absolute inset-0"><img src="https://placehold.co/1920x1080" alt="Background" class="w-full h-full object-cover opacity-40"><div class="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-transparent"></div></div><div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"><div class="max-w-2xl"><span class="inline-block mb-4 py-1 text-white text-sm font-medium"> Begin Your Journey </span><h2 class="font-title text-4xl md:text-5xl font-semibold mb-6 leading-tight"> Discover Your Perfect<br> Signature Scent </h2><p class="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl"> Experience the future of fragrance creation. Our AI-powered process crafts a scent that&#39;s uniquely yours, reflecting your personality and desires. </p>`);
      _push(ssrRenderComponent(unref(_sfc_main$u), {
        class: "group h-12 px-6 bg-white hover:bg-white/90 text-black hover:text-black transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Create Your Scent</span>`);
            _push2(ssrRenderComponent(unref(Sparkles), { class: "w-5 h-5 ml-2" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "Create Your Scent"),
              createVNode(unref(Sparkles), { class: "w-5 h-5 ml-2" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/FinalCTA.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const emotions = [
  {
    id: 0,
    name: "Formal",
    uri: "https://images.unsplash.com/photo-1517467069232-26eee2e331b1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    moodPairs: [
      [
        "Invigorating",
        "Soothing"
      ],
      [
        "Passionate",
        "Subtle"
      ],
      [
        "Exotic",
        "Familiar"
      ]
    ]
  },
  {
    id: 1,
    name: "Casual",
    uri: "https://images.unsplash.com/photo-1525828024186-5294af6c926d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    moodPairs: [
      [
        "Bold",
        "Delicate"
      ],
      [
        "Romantic",
        "Independent"
      ],
      [
        "Playful",
        "Sophisticated"
      ],
      [
        "Dreamy",
        "Grounded"
      ],
      [
        "Warm",
        "Cool"
      ],
      [
        "Sensual",
        "Pure"
      ],
      [
        "Vibrant",
        "Tranquil"
      ],
      [
        "Lush",
        "Minimalist"
      ],
      [
        "Nostalgic",
        "Futuristic"
      ]
    ]
  },
  {
    id: 2,
    name: "Personal",
    uri: "https://images.unsplash.com/photo-1560257855-218d43089d86?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    moodPairs: [
      [
        "Earthy",
        "Ethereal"
      ],
      [
        "Daring",
        "Reserved"
      ],
      [
        "Whimsical",
        "Serious"
      ],
      [
        "Elegant",
        "Casual"
      ],
      [
        "Mysterious",
        "Transparent"
      ],
      [
        "Simple",
        "Complex"
      ]
    ]
  },
  {
    id: 3,
    name: "Active",
    uri: "https://images.unsplash.com/photo-1506638794690-bbea5c6f0ab7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    moodPairs: [
      [
        "Practical",
        "Imaginative"
      ],
      [
        "Playful",
        "Serious"
      ],
      [
        "Loving",
        "Independent"
      ],
      [
        "Elegant",
        "Casual"
      ],
      [
        "Conventional",
        "Innovative"
      ],
      [
        "Mysterious",
        "Transparent"
      ],
      [
        "Simple",
        "Complex"
      ],
      [
        "Self-sufficient",
        "Friendly"
      ]
    ]
  },
  {
    id: 4,
    name: "Travel",
    uri: "https://images.unsplash.com/photo-1530065928592-fb0dc85d2f27?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    moodPairs: [
      [
        "Energetic",
        "Peaceful"
      ],
      [
        "Bold",
        "Subtle"
      ],
      [
        "Playful",
        "Serious"
      ],
      [
        "Loving",
        "Independent"
      ],
      [
        "Elegant",
        "Casual"
      ],
      [
        "Self-sufficient",
        "Friendly"
      ]
    ]
  }
];
const ages = [
  "under 18",
  "18-24",
  "25-40",
  "41-65",
  "65 and over"
];
const genders = [
  "female",
  "male",
  "unisex"
];
const styles = {
  "classic and professional": [
    "classic",
    "professionnal"
  ],
  "casual and lifestyle-oriented": [
    "natural",
    "casual",
    "sporty"
  ],
  "trendy and expressive": [
    "edgy",
    "glamorous",
    "trendy",
    "bohemiam"
  ]
};
const seasons = [
  "Spring",
  "Summner",
  "Fall",
  "Winter"
];
const scenes = [
  "Forest",
  "Mountain",
  "Tropical",
  "Countryside",
  "Garden/Parlk",
  "Vineyard",
  "Beach",
  "Urban",
  "Desert"
];
const useCreatorStore = defineStore("creator-store", {
  state: () => {
    const initialGender = genders.length > 0 ? genders[0] : null;
    const initialAge = ages.length > 0 ? ages[0] : null;
    const initialStyles = Object.fromEntries(
      Object.entries(styles).map(([category, styles2]) => [category, styles2[0]])
    );
    const initialSeason = seasons.length > 0 ? seasons[0] : null;
    const initialScene = scenes.length > 0 ? scenes[0] : null;
    return {
      loading: false,
      loadingRecommendation: true,
      isStarted: false,
      currentStep: 1,
      emotionsData: emotions,
      ageData: ages,
      genderData: genders,
      styleData: styles,
      seasonData: seasons,
      sceneData: scenes,
      gender: initialGender,
      age: initialAge,
      styles: initialStyles,
      emotion: null,
      moods: null,
      color: "#00FF00",
      season: initialSeason,
      scene: initialScene,
      recommendation: null
    };
  },
  actions: {
    startCreator() {
      this.isStarted = true;
      this.currentStep = 1;
    },
    setCurrentStep(step) {
      this.currentStep = step;
      if (this.currentStep <= 1) {
        this.recommendation = null;
      }
      if (this.currentStep >= 2 && this.recommendation == null) {
        this.fetchRecommendation();
      }
    },
    setEmotion(emotion) {
      this.emotion = emotion;
      this.moods = [];
    },
    setGender(gender) {
      this.gender = gender;
    },
    setAge(age) {
      this.age = age;
    },
    selectMood(moodKey, oppositeMood) {
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
          toast.warning("You have already selected 3 moods. Remove one to add a new one.");
          return;
        }
      }
    },
    async fetchRecommendation() {
      var _a;
      this.loadingRecommendation = true;
      if (this.moods == null) {
        return;
      }
      try {
        const response = await axios.post("/api/recommendations", {
          gender: this.gender,
          emotion: (_a = this.emotion) == null ? void 0 : _a.name,
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
      var _a;
      this.loading = true;
      try {
        const response = await axios.post("/api/generations", {
          emotion: (_a = this.emotion) == null ? void 0 : _a.name,
          mood_pairs: this.moods,
          age: this.age,
          gender: this.gender,
          styles: this.styles,
          color: this.color,
          season: this.season,
          scene: this.scene
        });
        return response.status === 200 ? response.data.job_id : false;
      } catch (error) {
        console.error("An error occurred while requesting generation:", error);
        return false;
      } finally {
        this.loading = false;
      }
    },
    async processingStatus(generation_id) {
      try {
        const response = await axios.post(`/api/generations/status/${generation_id}`);
        return response.status === 200 ? response.data : false;
      } catch (error) {
        console.error("An error occurred while requesting generation status:", error);
        return false;
      }
    }
  },
  persist: {
    key: "creator-store",
    storage: localStorage,
    paths: [
      "gender",
      "emotion",
      "moods",
      "age",
      "styles",
      "color",
      "season",
      "scene"
    ]
  }
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "BackgroundHighLight",
  __ssrInlineRender: true,
  props: {
    class: {},
    containerClass: {}
  },
  setup(__props) {
    const props = __props;
    const mouseX = ref(0);
    const mouseY = ref(0);
    const maskStyle = computed(() => ({
      WebkitMaskImage: `radial-gradient(200px circle at ${mouseX.value}px ${mouseY.value}px, black 0%, transparent 100%)`,
      maskImage: `radial-gradient(200px circle at ${mouseX.value}px ${mouseY.value}px, black 0%, transparent 100%)`
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "relative flex items-center bg-black justify-center w-full group",
          props.containerClass
        )
      }, _attrs))}><div class="absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none"></div><div class="pointer-events-none bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style="${ssrRenderStyle(maskStyle.value)}"></div><div class="${ssrRenderClass(unref(cn)("relative z-20", props.class))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/background-highlight/BackgroundHighLight.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "Creator",
  __ssrInlineRender: true,
  setup(__props) {
    const creatorStore = useCreatorStore();
    const searchInput = ref("");
    const uploadedImage = ref(null);
    const categories = [
      {
        title: "Basic Information",
        items: [
          { name: "Gender", data: creatorStore.genderData, key: "gender", setter: creatorStore.setGender },
          { name: "Age", data: creatorStore.ageData, key: "age", setter: creatorStore.setAge }
        ]
      },
      {
        title: "Context",
        items: [
          { name: "Scene", data: creatorStore.sceneData, key: "scene", setter: (val) => creatorStore.scene = val },
          { name: "Season", data: creatorStore.seasonData, key: "season", setter: (val) => creatorStore.season = val }
        ]
      }
    ];
    const selectedTags = computed(() => {
      var _a;
      const tags = [];
      if (creatorStore.gender) tags.push({ type: "gender", value: creatorStore.gender });
      if (creatorStore.age) tags.push({ type: "age", value: creatorStore.age });
      if (creatorStore.scene) tags.push({ type: "scene", value: creatorStore.scene });
      if (creatorStore.season) tags.push({ type: "season", value: creatorStore.season });
      if ((_a = creatorStore.emotion) == null ? void 0 : _a.name) {
        tags.push({ type: "emotion", value: creatorStore.emotion.name });
      }
      if (creatorStore.moods) {
        creatorStore.moods.forEach((mood) => {
          tags.push({ type: "mood", value: mood });
        });
      }
      Object.entries(creatorStore.styles).forEach(([category, style]) => {
        if (style) {
          tags.push({ type: "style", category, value: style });
        }
      });
      if (searchInput.value.trim()) {
        tags.push({ type: "custom", value: searchInput.value.trim() });
      }
      return tags;
    });
    const hasSelectedTags = computed(() => selectedTags.value.length > 0);
    const removeTag = (tag) => {
      switch (tag.type) {
        case "gender":
          creatorStore.setGender("");
          break;
        case "age":
          creatorStore.setAge("");
          break;
        case "scene":
          creatorStore.scene = "";
          break;
        case "season":
          creatorStore.season = "";
          break;
        case "emotion":
          creatorStore.emotion = null;
          break;
        case "mood":
          if (creatorStore.moods) {
            const index = creatorStore.moods.indexOf(tag.value);
            if (index > -1) {
              creatorStore.moods.splice(index, 1);
            }
          }
          break;
        case "style":
          if (tag.category && creatorStore.styles[tag.category]) {
            creatorStore.styles[tag.category] = "";
          }
          break;
        case "custom":
          searchInput.value = "";
          break;
      }
    };
    const handleImageUpload = (event) => {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          var _a;
          uploadedImage.value = (_a = e.target) == null ? void 0 : _a.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    };
    const removeImage = () => {
      uploadedImage.value = null;
    };
    const resetCreator = () => {
      uploadedImage.value = null;
      searchInput.value = "";
      creatorStore.$reset();
    };
    onMounted(() => {
      if (!creatorStore.isStarted)
        creatorStore.isStarted = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "creator",
        class: "bg-black min-h-screen"
      }, _attrs))} data-v-f50282a5>`);
      _push(ssrRenderComponent(unref(_sfc_main$m), {
        containerClass: "py-12 md:py-24 px-4 md:px-0",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto text-center text-white max-w-screen-xl px-4 md:px-0 space-y-6" data-v-f50282a5${_scopeId}><h2 class="font-title font-bold text-5xl md:text-6xl bg-gradient-to-r from-white via-gray-300 to-gray-400 text-transparent bg-clip-text" data-v-f50282a5${_scopeId}> Create Your Perfect Scent </h2><p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto" data-v-f50282a5${_scopeId}> Personalize your fragrance journey by selecting preferences and let our AI craft your signature scent. </p></div><div class="mx-auto max-w-screen-xl mt-12 space-y-8" data-v-f50282a5${_scopeId}><div class="bg-neutral-900/80 backdrop-blur-sm rounded-3xl border border-neutral-800 p-6 md:p-8" data-v-f50282a5${_scopeId}><div class="space-y-6 mb-8" data-v-f50282a5${_scopeId}><div class="relative max-w-xl mx-auto" data-v-f50282a5${_scopeId}><div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" data-v-f50282a5${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Plus), { class: "h-5 w-5 text-gray-400" }, null, _parent2, _scopeId));
            _push2(`</div><input${ssrRenderAttr("value", searchInput.value)} type="text" class="block w-full pl-12 pr-4 py-3 border border-neutral-700 rounded-xl bg-neutral-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="Add your own keywords and press Enter..." data-v-f50282a5${_scopeId}></div>`);
            if (hasSelectedTags.value) {
              _push2(`<div class="bg-neutral-800/50 rounded-2xl p-4 max-w-3xl mx-auto" data-v-f50282a5${_scopeId}><div class="flex flex-wrap gap-2 justify-center" data-v-f50282a5${_scopeId}><!--[-->`);
              ssrRenderList(selectedTags.value, (tag, index) => {
                _push2(`<span class="${ssrRenderClass([
                  "px-4 py-2 rounded-xl text-sm flex items-center gap-2 transition-all duration-200",
                  {
                    "bg-blue-500/20 text-blue-200 border border-blue-500/30": tag.type === "custom",
                    "bg-purple-500/20 text-purple-200 border border-purple-500/30": tag.type === "emotion",
                    "bg-green-500/20 text-green-200 border border-green-500/30": tag.type === "mood",
                    "bg-amber-500/20 text-amber-200 border border-amber-500/30": tag.type === "style",
                    "bg-gray-500/20 text-gray-200 border border-gray-500/30": ["gender", "age", "scene", "season"].includes(tag.type)
                  }
                ])}" data-v-f50282a5${_scopeId}>${ssrInterpolate(tag.value)} <button class="hover:text-white transition-colors" data-v-f50282a5${_scopeId}>`);
                _push2(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent2, _scopeId));
                _push2(`</button></span>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-f50282a5${_scopeId}><!--[-->`);
            ssrRenderList(categories, (category) => {
              _push2(`<div class="space-y-6" data-v-f50282a5${_scopeId}><div class="bg-neutral-800/30 rounded-2xl p-6 space-y-6" data-v-f50282a5${_scopeId}><h3 class="text-white text-xl font-semibold" data-v-f50282a5${_scopeId}>${ssrInterpolate(category.title)}</h3><div class="space-y-4" data-v-f50282a5${_scopeId}><!--[-->`);
              ssrRenderList(category.items, (item) => {
                _push2(`<div class="space-y-2" data-v-f50282a5${_scopeId}><h4 class="text-gray-400 text-sm" data-v-f50282a5${_scopeId}>${ssrInterpolate(item.name)}</h4><div class="flex flex-wrap gap-2" data-v-f50282a5${_scopeId}><!--[-->`);
                ssrRenderList(item.data, (value) => {
                  _push2(`<button class="${ssrRenderClass([
                    "px-4 py-2 rounded-xl text-sm transition-all duration-200",
                    unref(creatorStore)[item.key] === value ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
                  ])}" data-v-f50282a5${_scopeId}>${ssrInterpolate(value)}</button>`);
                });
                _push2(`<!--]--></div></div>`);
              });
              _push2(`<!--]--></div></div></div>`);
            });
            _push2(`<!--]--><div class="space-y-6" data-v-f50282a5${_scopeId}><div class="bg-neutral-800/30 rounded-2xl p-6 space-y-6" data-v-f50282a5${_scopeId}><h3 class="text-white text-xl font-semibold" data-v-f50282a5${_scopeId}>Emotions</h3><div class="flex flex-wrap gap-2" data-v-f50282a5${_scopeId}><!--[-->`);
            ssrRenderList(unref(creatorStore).emotionsData, (emotion) => {
              var _a;
              _push2(`<button class="${ssrRenderClass([
                "px-4 py-2 rounded-xl text-sm transition-all duration-200",
                ((_a = unref(creatorStore).emotion) == null ? void 0 : _a.id) === emotion.id ? "bg-purple-500 text-white shadow-lg shadow-purple-500/20" : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
              ])}" data-v-f50282a5${_scopeId}>${ssrInterpolate(emotion.name)}</button>`);
            });
            _push2(`<!--]--></div></div></div><!--[-->`);
            ssrRenderList(unref(creatorStore).styleData, (styles2, category) => {
              _push2(`<div class="space-y-6" data-v-f50282a5${_scopeId}><div class="bg-neutral-800/30 rounded-2xl p-6 space-y-6" data-v-f50282a5${_scopeId}><h3 class="text-white text-xl font-semibold capitalize" data-v-f50282a5${_scopeId}>${ssrInterpolate(category)}</h3><div class="flex flex-wrap gap-2" data-v-f50282a5${_scopeId}><!--[-->`);
              ssrRenderList(styles2, (style) => {
                _push2(`<button class="${ssrRenderClass([
                  "px-4 py-2 rounded-xl text-sm transition-all duration-200",
                  unref(creatorStore).styles[category] === style ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20" : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
                ])}" data-v-f50282a5${_scopeId}>${ssrInterpolate(style)}</button>`);
              });
              _push2(`<!--]--></div></div></div>`);
            });
            _push2(`<!--]--><div class="space-y-6" data-v-f50282a5${_scopeId}><div class="bg-neutral-800/30 rounded-2xl p-6 space-y-6" data-v-f50282a5${_scopeId}><h3 class="text-white text-xl font-semibold" data-v-f50282a5${_scopeId}>Visual Inspiration</h3>`);
            if (!uploadedImage.value) {
              _push2(`<div class="flex gap-4" data-v-f50282a5${_scopeId}><label class="flex items-center gap-2 px-4 py-3 bg-neutral-800 text-white rounded-xl cursor-pointer hover:bg-neutral-700 transition-all duration-200" data-v-f50282a5${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Upload), { class: "w-5 h-5" }, null, _parent2, _scopeId));
              _push2(` Upload Image <input type="file" accept="image/*" class="hidden" data-v-f50282a5${_scopeId}></label><button class="flex items-center gap-2 px-4 py-3 bg-neutral-800 text-white rounded-xl hover:bg-neutral-700 transition-all duration-200" data-v-f50282a5${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Camera), { class: "w-5 h-5" }, null, _parent2, _scopeId));
              _push2(` Take Photo </button></div>`);
            } else {
              _push2(`<div class="relative w-40 h-40 mx-auto" data-v-f50282a5${_scopeId}><img${ssrRenderAttr("src", uploadedImage.value)} alt="Uploaded image" class="w-full h-full object-cover rounded-xl shadow-lg" data-v-f50282a5${_scopeId}><button class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 transition-colors" data-v-f50282a5${_scopeId}>`);
              _push2(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent2, _scopeId));
              _push2(`</button></div>`);
            }
            _push2(`</div></div></div></div>`);
            if (unref(creatorStore).recommendation) {
              _push2(`<div class="bg-neutral-900/80 backdrop-blur-sm rounded-3xl border border-neutral-800 p-6 md:p-8" data-v-f50282a5${_scopeId}><div class="flex justify-between items-center mb-8" data-v-f50282a5${_scopeId}><h2 class="text-white text-2xl font-bold" data-v-f50282a5${_scopeId}>Your Perfect Match</h2><button class="p-2 hover:bg-neutral-800 rounded-full transition-colors" data-v-f50282a5${_scopeId}>`);
              _push2(ssrRenderComponent(unref(X), { class: "w-6 h-6 text-white hover:text-gray-300" }, null, _parent2, _scopeId));
              _push2(`</button></div><div class="flex flex-col md:flex-row gap-8" data-v-f50282a5${_scopeId}><div class="relative w-full md:w-1/3 aspect-square" data-v-f50282a5${_scopeId}><img${ssrRenderAttr("src", `/storage/brand_perfumes/${unref(creatorStore).recommendation.local_image_path}`)}${ssrRenderAttr("alt", unref(creatorStore).recommendation.perfume)} class="w-full h-full object-cover rounded-2xl shadow-2xl" data-v-f50282a5${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" data-v-f50282a5${_scopeId}></div></div><div class="space-y-6 md:w-2/3" data-v-f50282a5${_scopeId}><div data-v-f50282a5${_scopeId}><h3 class="text-white text-3xl font-semibold mb-2" data-v-f50282a5${_scopeId}>${ssrInterpolate(unref(creatorStore).recommendation.perfume)}</h3><p class="text-2xl text-blue-400 font-medium" data-v-f50282a5${_scopeId}>${ssrInterpolate(unref(creatorStore).recommendation.price)} € </p></div>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: unref(creatorStore).recommendation.product_url,
                target: "_blank",
                rel: "noopener noreferrer",
                class: "inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ExternalLink), { class: "w-5 h-5" }, null, _parent3, _scopeId2));
                    _push3(` View Product `);
                  } else {
                    return [
                      createVNode(unref(ExternalLink), { class: "w-5 h-5" }),
                      createTextVNode(" View Product ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(creatorStore).recommendation.analysis) {
                _push2(`<div class="bg-neutral-800/50 rounded-2xl p-6" data-v-f50282a5${_scopeId}><h4 class="text-white font-semibold text-lg mb-4" data-v-f50282a5${_scopeId}>Why This Matches You</h4><div class="text-gray-300 space-y-2 leading-relaxed" data-v-f50282a5${_scopeId}>${ssrInterpolate(unref(creatorStore).recommendation.analysis)}</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto text-center text-white max-w-screen-xl px-4 md:px-0 space-y-6" }, [
                createVNode("h2", { class: "font-title font-bold text-5xl md:text-6xl bg-gradient-to-r from-white via-gray-300 to-gray-400 text-transparent bg-clip-text" }, " Create Your Perfect Scent "),
                createVNode("p", { class: "text-lg md:text-xl text-gray-300 max-w-2xl mx-auto" }, " Personalize your fragrance journey by selecting preferences and let our AI craft your signature scent. ")
              ]),
              createVNode("div", { class: "mx-auto max-w-screen-xl mt-12 space-y-8" }, [
                createVNode("div", { class: "bg-neutral-900/80 backdrop-blur-sm rounded-3xl border border-neutral-800 p-6 md:p-8" }, [
                  createVNode("div", { class: "space-y-6 mb-8" }, [
                    createVNode("div", { class: "relative max-w-xl mx-auto" }, [
                      createVNode("div", { class: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" }, [
                        createVNode(unref(Plus), { class: "h-5 w-5 text-gray-400" })
                      ]),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => searchInput.value = $event,
                        type: "text",
                        onKeydown: withKeys(($event) => searchInput.value = "", ["enter"]),
                        class: "block w-full pl-12 pr-4 py-3 border border-neutral-700 rounded-xl bg-neutral-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
                        placeholder: "Add your own keywords and press Enter..."
                      }, null, 40, ["onUpdate:modelValue", "onKeydown"]), [
                        [vModelText, searchInput.value]
                      ])
                    ]),
                    hasSelectedTags.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "bg-neutral-800/50 rounded-2xl p-4 max-w-3xl mx-auto"
                    }, [
                      createVNode("div", { class: "flex flex-wrap gap-2 justify-center" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(selectedTags.value, (tag, index) => {
                          return openBlock(), createBlock("span", {
                            key: `${tag.type}-${tag.value}-${index}`,
                            class: [
                              "px-4 py-2 rounded-xl text-sm flex items-center gap-2 transition-all duration-200",
                              {
                                "bg-blue-500/20 text-blue-200 border border-blue-500/30": tag.type === "custom",
                                "bg-purple-500/20 text-purple-200 border border-purple-500/30": tag.type === "emotion",
                                "bg-green-500/20 text-green-200 border border-green-500/30": tag.type === "mood",
                                "bg-amber-500/20 text-amber-200 border border-amber-500/30": tag.type === "style",
                                "bg-gray-500/20 text-gray-200 border border-gray-500/30": ["gender", "age", "scene", "season"].includes(tag.type)
                              }
                            ]
                          }, [
                            createTextVNode(toDisplayString(tag.value) + " ", 1),
                            createVNode("button", {
                              onClick: ($event) => removeTag(tag),
                              class: "hover:text-white transition-colors"
                            }, [
                              createVNode(unref(X), { class: "w-4 h-4" })
                            ], 8, ["onClick"])
                          ], 2);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                      return createVNode("div", {
                        key: category.title,
                        class: "space-y-6"
                      }, [
                        createVNode("div", { class: "bg-neutral-800/30 rounded-2xl p-6 space-y-6" }, [
                          createVNode("h3", { class: "text-white text-xl font-semibold" }, toDisplayString(category.title), 1),
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(category.items, (item) => {
                              return openBlock(), createBlock("div", {
                                key: item.name,
                                class: "space-y-2"
                              }, [
                                createVNode("h4", { class: "text-gray-400 text-sm" }, toDisplayString(item.name), 1),
                                createVNode("div", { class: "flex flex-wrap gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.data, (value) => {
                                    return openBlock(), createBlock("button", {
                                      key: value,
                                      class: [
                                        "px-4 py-2 rounded-xl text-sm transition-all duration-200",
                                        unref(creatorStore)[item.key] === value ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
                                      ],
                                      onClick: ($event) => item.setter(value)
                                    }, toDisplayString(value), 11, ["onClick"]);
                                  }), 128))
                                ])
                              ]);
                            }), 128))
                          ])
                        ])
                      ]);
                    }), 64)),
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", { class: "bg-neutral-800/30 rounded-2xl p-6 space-y-6" }, [
                        createVNode("h3", { class: "text-white text-xl font-semibold" }, "Emotions"),
                        createVNode("div", { class: "flex flex-wrap gap-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(creatorStore).emotionsData, (emotion) => {
                            var _a;
                            return openBlock(), createBlock("button", {
                              key: emotion.id,
                              class: [
                                "px-4 py-2 rounded-xl text-sm transition-all duration-200",
                                ((_a = unref(creatorStore).emotion) == null ? void 0 : _a.id) === emotion.id ? "bg-purple-500 text-white shadow-lg shadow-purple-500/20" : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
                              ],
                              onClick: ($event) => unref(creatorStore).setEmotion(emotion)
                            }, toDisplayString(emotion.name), 11, ["onClick"]);
                          }), 128))
                        ])
                      ])
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(creatorStore).styleData, (styles2, category) => {
                      return openBlock(), createBlock("div", {
                        key: category,
                        class: "space-y-6"
                      }, [
                        createVNode("div", { class: "bg-neutral-800/30 rounded-2xl p-6 space-y-6" }, [
                          createVNode("h3", { class: "text-white text-xl font-semibold capitalize" }, toDisplayString(category), 1),
                          createVNode("div", { class: "flex flex-wrap gap-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(styles2, (style) => {
                              return openBlock(), createBlock("button", {
                                key: style,
                                class: [
                                  "px-4 py-2 rounded-xl text-sm transition-all duration-200",
                                  unref(creatorStore).styles[category] === style ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20" : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
                                ],
                                onClick: ($event) => unref(creatorStore).styles[category] = style
                              }, toDisplayString(style), 11, ["onClick"]);
                            }), 128))
                          ])
                        ])
                      ]);
                    }), 128)),
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", { class: "bg-neutral-800/30 rounded-2xl p-6 space-y-6" }, [
                        createVNode("h3", { class: "text-white text-xl font-semibold" }, "Visual Inspiration"),
                        !uploadedImage.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex gap-4"
                        }, [
                          createVNode("label", { class: "flex items-center gap-2 px-4 py-3 bg-neutral-800 text-white rounded-xl cursor-pointer hover:bg-neutral-700 transition-all duration-200" }, [
                            createVNode(unref(Upload), { class: "w-5 h-5" }),
                            createTextVNode(" Upload Image "),
                            createVNode("input", {
                              type: "file",
                              accept: "image/*",
                              class: "hidden",
                              onChange: handleImageUpload
                            }, null, 32)
                          ]),
                          createVNode("button", { class: "flex items-center gap-2 px-4 py-3 bg-neutral-800 text-white rounded-xl hover:bg-neutral-700 transition-all duration-200" }, [
                            createVNode(unref(Camera), { class: "w-5 h-5" }),
                            createTextVNode(" Take Photo ")
                          ])
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "relative w-40 h-40 mx-auto"
                        }, [
                          createVNode("img", {
                            src: uploadedImage.value,
                            alt: "Uploaded image",
                            class: "w-full h-full object-cover rounded-xl shadow-lg"
                          }, null, 8, ["src"]),
                          createVNode("button", {
                            onClick: removeImage,
                            class: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 transition-colors"
                          }, [
                            createVNode(unref(X), { class: "w-4 h-4" })
                          ])
                        ]))
                      ])
                    ])
                  ])
                ]),
                unref(creatorStore).recommendation ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "bg-neutral-900/80 backdrop-blur-sm rounded-3xl border border-neutral-800 p-6 md:p-8"
                }, [
                  createVNode("div", { class: "flex justify-between items-center mb-8" }, [
                    createVNode("h2", { class: "text-white text-2xl font-bold" }, "Your Perfect Match"),
                    createVNode("button", {
                      onClick: resetCreator,
                      class: "p-2 hover:bg-neutral-800 rounded-full transition-colors"
                    }, [
                      createVNode(unref(X), { class: "w-6 h-6 text-white hover:text-gray-300" })
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row gap-8" }, [
                    createVNode("div", { class: "relative w-full md:w-1/3 aspect-square" }, [
                      createVNode("img", {
                        src: `/storage/brand_perfumes/${unref(creatorStore).recommendation.local_image_path}`,
                        alt: unref(creatorStore).recommendation.perfume,
                        class: "w-full h-full object-cover rounded-2xl shadow-2xl"
                      }, null, 8, ["src", "alt"]),
                      createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" })
                    ]),
                    createVNode("div", { class: "space-y-6 md:w-2/3" }, [
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-white text-3xl font-semibold mb-2" }, toDisplayString(unref(creatorStore).recommendation.perfume), 1),
                        createVNode("p", { class: "text-2xl text-blue-400 font-medium" }, toDisplayString(unref(creatorStore).recommendation.price) + " € ", 1)
                      ]),
                      createVNode(unref(Link), {
                        href: unref(creatorStore).recommendation.product_url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ExternalLink), { class: "w-5 h-5" }),
                          createTextVNode(" View Product ")
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      unref(creatorStore).recommendation.analysis ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "bg-neutral-800/50 rounded-2xl p-6"
                      }, [
                        createVNode("h4", { class: "text-white font-semibold text-lg mb-4" }, "Why This Matches You"),
                        createVNode("div", { class: "text-gray-300 space-y-2 leading-relaxed" }, toDisplayString(unref(creatorStore).recommendation.analysis), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/creator/Creator.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const usePerfumeCrafterStore = defineStore("perfume-crafter", {
  state: () => ({
    selectedTags: [],
    customValues: [],
    description: null,
    isLoading: false,
    error: null,
    product: null,
    isProductLoading: false,
    productError: null,
    composition: null,
    showResult: false
  }),
  getters: {
    hasSelection: (state) => state.selectedTags.length > 0 || state.customValues.length > 0,
    sortedTags: (state) => {
      const categoryOrder = [
        "gender",
        "age",
        "emotion",
        "occasion",
        "color",
        "Scent Family",
        "longevity",
        "custom"
      ];
      return [...state.selectedTags].sort(
        (a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
      );
    }
  },
  actions: {
    addTag(text, category, color) {
      const newTags = [...this.selectedTags];
      if (category === "emotion" || category === "occasion") {
        const isSelected = newTags.some(
          (tag) => tag.category === category && tag.text === text
        );
        if (isSelected) {
          this.selectedTags = newTags.filter(
            (tag) => !(tag.category === category && tag.text === text)
          );
          return;
        }
      }
      if (category === "Scent Family") {
        if (!text) return;
        const familyName = text.split("(")[0].trim();
        const otherFamilies = newTags.filter(
          (tag) => !(tag.category === "Scent Family" && tag.text.startsWith(familyName))
        );
        this.selectedTags = [...otherFamilies, { text, category }];
        return;
      }
      const filteredTags = newTags.filter((tag) => tag.category !== category);
      this.selectedTags = [...filteredTags, { text, category, color }];
    },
    removeTag(tagToRemove) {
      console.log(this.selectedTags);
      console.log(tagToRemove);
      this.selectedTags = this.selectedTags.filter(
        (tag) => tag.text !== tagToRemove.text || tag.category !== tagToRemove.category
      );
    },
    updateCustomValue(category, value) {
      const newValues = this.customValues.filter((v) => v.category !== category);
      if (value) {
        newValues.push({ category, value });
      }
      this.customValues = newValues;
    },
    reset() {
      this.selectedTags = [];
      this.customValues = [];
    },
    setComposition(composition) {
      this.composition = composition;
      this.showResult = true;
    },
    closeResult() {
      this.showResult = false;
    }
  },
  persist: {
    key: "perfume-crafter-store",
    storage: localStorage,
    paths: ["selectedTags", "customValues"]
  }
});
const SectionIcons = {
  demographics: Users,
  emotions: Heart,
  occasions: Calendar,
  color: Palette,
  scentFamily: Beaker,
  customize: Sparkles
};
const sections = [
  {
    id: "about-you",
    title: "About You",
    icon: SectionIcons.demographics,
    category: "demographics"
  },
  {
    id: "emotions",
    title: "Emotions",
    icon: SectionIcons.emotions,
    category: "emotion"
  },
  {
    id: "occasions",
    title: "Occasions",
    icon: SectionIcons.occasions,
    category: "occasion"
  },
  {
    id: "color",
    title: "Color",
    icon: SectionIcons.color,
    category: "color"
  },
  {
    id: "scent-family",
    title: "Advanced",
    icon: SectionIcons.scentFamily,
    category: "Scent Family"
  }
];
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: {},
    id: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CheckboxRoot), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CheckboxIndicator), { class: "flex h-full w-full items-center justify-center text-current" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(ssrRenderComponent(unref(CheckIcon), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode(unref(CheckIcon), { class: "h-4 w-4" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CheckboxIndicator), { class: "flex h-full w-full items-center justify-center text-current" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode(unref(CheckIcon), { class: "h-4 w-4" })
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/checkbox/Checkbox.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "CheckboxGroup",
  __ssrInlineRender: true,
  props: {
    title: {},
    options: {},
    selectedOptions: {},
    otherValue: {}
  },
  emits: ["optionToggle", "update:otherValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const otherInputValue = computed({
      get: () => props.otherValue,
      set: (value) => {
        emit("update:otherValue", value);
        if (value && !props.selectedOptions.includes("Other")) {
          emit("optionToggle", "Other");
        }
      }
    });
    const handleOtherToggle = () => {
      emit("optionToggle", "Other");
      if (props.selectedOptions.includes("Other")) {
        emit("update:otherValue", "");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$v), { class: "text-primary-foreground text-sm font-medium" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-2"><!--[-->`);
      ssrRenderList(_ctx.options, (option) => {
        _push(`<div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(_sfc_main$k), {
          id: option,
          checked: _ctx.selectedOptions.includes(option),
          "onUpdate:checked": () => _ctx.$emit("optionToggle", option),
          class: "border-muted-foreground/20 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
        }, null, _parent));
        _push(ssrRenderComponent(unref(_sfc_main$v), {
          for: option,
          class: "text-primary-foreground font-normal text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(option)}`);
            } else {
              return [
                createTextVNode(toDisplayString(option), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$k), {
        id: "other",
        checked: _ctx.selectedOptions.includes("Other"),
        "onUpdate:checked": handleOtherToggle,
        class: "border-muted-foreground/20 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$w), {
        modelValue: otherInputValue.value,
        "onUpdate:modelValue": ($event) => otherInputValue.value = $event,
        placeholder: "Other...",
        class: "flex-1 h-8 px-3 text-sm text-primary-foreground border-muted-foreground/20"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/sections/demographics/components/CheckboxGroup.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "SelectionButton",
  __ssrInlineRender: true,
  props: {
    value: {},
    description: {},
    isSelected: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$x), mergeProps({
        onClick: ($event) => _ctx.$emit("click"),
        class: [
          "group cursor-pointer transition-all w-full",
          _ctx.isSelected ? "bg-blue-500/50 border-blue-500" : "bg-transparent border-muted-foreground/20 hover:bg-muted-foreground/10"
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 space-y-2"${_scopeId}><div class="${ssrRenderClass([
              "text-sm font-medium text-primary-foreground",
              _ctx.isSelected ? "text-muted" : ""
            ])}"${_scopeId}>${ssrInterpolate(_ctx.value)}</div><p class="text-xs text-primary-foreground line-clamp-2"${_scopeId}>${ssrInterpolate(_ctx.description)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 space-y-2" }, [
                createVNode("div", {
                  class: [
                    "text-sm font-medium text-primary-foreground",
                    _ctx.isSelected ? "text-muted" : ""
                  ]
                }, toDisplayString(_ctx.value), 3),
                createVNode("p", { class: "text-xs text-primary-foreground line-clamp-2" }, toDisplayString(_ctx.description), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/sections/demographics/components/SelectionButton.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<textarea${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", props.class)
      }, _attrs), "textarea")}>${ssrInterpolate(unref(modelValue))}</textarea>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/textarea/Textarea.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "StoryInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const textContent = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$v), { class: "text-primary-foreground text-sm font-medium" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` What story should your perfume tell? `);
          } else {
            return [
              createTextVNode(" What story should your perfume tell? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$h), {
        modelValue: textContent.value,
        "onUpdate:modelValue": ($event) => textContent.value = $event,
        placeholder: "E.g., A walk through a Mediterranean garden at sunset...",
        class: "h-24 px-4 py-3 text-primary-foreground border-muted-foreground/20 resize-none placeholder:text-primary-foreground focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/sections/demographics/components/StoryInput.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const GENDERS = [
  {
    value: "Male",
    description: "Masculine fragrances with bold, distinctive character"
  },
  {
    value: "Female",
    description: "Feminine scents with elegant, sophisticated notes"
  },
  {
    value: "Unisex",
    description: "Versatile fragrances that transcend traditional boundaries"
  }
];
const AGE_GROUPS = [
  {
    value: "Young",
    description: "18-25 years"
  },
  {
    value: "Adult",
    description: "26-45 years"
  },
  {
    value: "Mature",
    description: "46+ years"
  }
];
const NATURE_SCENTS = [
  "Pine forests",
  "Ocean breeze",
  "Fresh rain",
  "Mountain air",
  "Garden flowers",
  "Desert sage"
];
const STYLE_INSPIRATIONS = [
  "Minimalist",
  "Bohemian",
  "Classic",
  "Avant-garde",
  "Romantic",
  "Urban"
];
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Demographics",
  __ssrInlineRender: true,
  props: {
    selectedTags: {}
  },
  emits: ["select", "preferenceUpdate"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const story = ref("");
    const selectedNatureScents = ref([]);
    const otherNatureScent = ref("");
    const selectedStyles = ref([]);
    const otherStyle = ref("");
    const handleStoryChange = (value) => {
      story.value = value;
      if (value.trim()) {
        emit("select", value, "Story");
        emit("preferenceUpdate", "Story", value);
      } else {
        emit("select", "", "Story");
        emit("preferenceUpdate", "Story", "");
      }
    };
    const handleNatureScentToggle = (scent) => {
      const index = selectedNatureScents.value.indexOf(scent);
      if (index === -1) {
        selectedNatureScents.value.push(scent);
      } else {
        selectedNatureScents.value.splice(index, 1);
      }
      const scentsToInclude = selectedNatureScents.value.filter((s) => s !== "Other").concat(otherNatureScent.value ? ["Other"] : []);
      const value = scentsToInclude.map((s) => s === "Other" ? otherNatureScent.value : s).join(", ");
      emit("select", value, "Nature");
      emit("preferenceUpdate", "Nature", value);
    };
    const handleStyleToggle = (style) => {
      const index = selectedStyles.value.indexOf(style);
      if (index === -1) {
        selectedStyles.value.push(style);
      } else {
        selectedStyles.value.splice(index, 1);
      }
      const stylesToInclude = selectedStyles.value.filter((s) => s !== "Other").concat(otherStyle.value ? ["Other"] : []);
      const value = stylesToInclude.map((s) => s === "Other" ? otherStyle.value : s).join(", ");
      emit("select", value, "Style");
      emit("preferenceUpdate", "Style", value);
    };
    const isSelected = (category, value) => {
      return props.selectedTags.some(
        (tag) => tag.category === category && tag.text === value
      );
    };
    const handleBasicToggle = (value, category) => {
      if (isSelected(category, value)) {
        emit("select", "", category);
      } else {
        emit("select", value, category);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><div class="space-y-4"><h3 class="text-primary-foreground text-sm font-medium">Gender</h3><div class="grid grid-cols-3 gap-3"><!--[-->`);
      ssrRenderList(unref(GENDERS), ({ value, description }) => {
        _push(ssrRenderComponent(unref(_sfc_main$i), {
          key: value,
          value,
          description,
          "is-selected": isSelected("gender", value),
          onClick: () => handleBasicToggle(value, "gender")
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="space-y-4"><h3 class="text-primary-foreground text-sm font-medium">Age Group</h3><div class="grid grid-cols-3 gap-3"><!--[-->`);
      ssrRenderList(unref(AGE_GROUPS), ({ value, description }) => {
        _push(ssrRenderComponent(unref(_sfc_main$i), {
          key: value,
          value,
          description,
          "is-selected": isSelected("age", value),
          onClick: () => handleBasicToggle(value, "age")
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$g), {
        modelValue: story.value,
        "onUpdate:modelValue": handleStoryChange
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$j), {
        title: "What scents in nature appeal to you most?",
        options: unref(NATURE_SCENTS),
        "selected-options": selectedNatureScents.value,
        "other-value": otherNatureScent.value,
        onOptionToggle: handleNatureScentToggle,
        "onUpdate:otherValue": (value) => otherNatureScent.value = value
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$j), {
        title: "What's your style inspiration?",
        options: unref(STYLE_INSPIRATIONS),
        "selected-options": selectedStyles.value,
        "other-value": otherStyle.value,
        onOptionToggle: handleStyleToggle,
        "onUpdate:otherValue": ($event) => otherNatureScent.value = $event
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/sections/demographics/Demographics.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleSection",
  __ssrInlineRender: true,
  props: {
    title: {},
    defaultExpanded: { type: Boolean, default: false },
    icon: {},
    selectedTags: { default: () => [] },
    category: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const isExpanded = ref(props.defaultExpanded);
    const selectedOptions = computed(() => {
      if (!props.category || !props.selectedTags.length) return null;
      const relevantTags = props.selectedTags.filter(
        (tag) => props.category === "demographics" ? tag.category === "gender" || tag.category === "age" : tag.category.toLowerCase() === props.category.toLowerCase()
      );
      if (!relevantTags.length) return null;
      return {
        tags: relevantTags.map((tag) => {
          if (props.category === "Scent Family") {
            const match = tag.text.match(/^(.*?)\s*\((\d+)%\)/);
            if (match) {
              const [_, name, intensity] = match;
              return `${name.trim()} (${intensity}%)`;
            }
          }
          return tag.text;
        }),
        color: props.category === "color" ? relevantTags[0].color : null
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-card-foreground rounded-2xl h-full transition-all duration-300 space-y-0" }, _attrs))}><button class="w-full h-full flex items-center justify-between p-6 group"><div class="flex items-center"><div class="flex items-center gap-2 mr-3">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.icon), { class: "w-5 h-5 text-blue-500" }, null), _parent);
      _push(`<h3 class="text-primary-foreground font-medium">${ssrInterpolate(_ctx.title)}</h3></div>`);
      if (selectedOptions.value) {
        _push(`<div class="flex items-center gap-2">`);
        if (selectedOptions.value.color) {
          _push(`<div class="w-3 h-3 rounded-sm shadow-sm" style="${ssrRenderStyle({ backgroundColor: selectedOptions.value.color })}"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="text-sm font-normal text-muted-foreground">${ssrInterpolate(selectedOptions.value.tags.join(", "))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(unref(ChevronDown), {
        size: 20,
        class: ["text-white transition-transform duration-300", { "rotate-180": isExpanded.value }]
      }, null, _parent));
      _push(`</button><div class="${ssrRenderClass([{
        "max-h-[2000px] opacity-100": isExpanded.value,
        "max-h-0 opacity-0": !isExpanded.value
      }, "overflow-hidden transition-all duration-300 ease-in-out"])}"><div class="p-6 border-t border-muted-foreground/20">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/sections/CollapsibleSection.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Tooltip",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tooltip/Tooltip.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "TooltipContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TooltipContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TooltipContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tooltip/TooltipContent.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TooltipProvider",
  __ssrInlineRender: true,
  props: {
    delayDuration: {},
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipProvider), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tooltip/TooltipProvider.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TooltipTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipTrigger), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tooltip/TooltipTrigger.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const emotionCategories = [
  {
    id: "positive",
    title: "Joy & Happiness",
    description: "Uplifting emotions that bring pleasure and contentment",
    emotions: [
      {
        name: "Joy",
        description: "Pure happiness and delight"
      },
      {
        name: "Comfort",
        description: "Familiar warmth and security"
      },
      {
        name: "Nostalgia",
        description: "Memories of cherished moments"
      }
    ]
  },
  {
    id: "calming",
    title: "Peace & Tranquility",
    description: "Soothing emotions for relaxation and inner peace",
    emotions: [
      {
        name: "Relaxation",
        description: "Deep sense of calm"
      },
      {
        name: "Tranquility",
        description: "Peaceful state of mind"
      },
      {
        name: "Serenity",
        description: "Complete peace and harmony"
      }
    ]
  },
  {
    id: "confidence",
    title: "Power & Confidence",
    description: "Empowering emotions that boost self-assurance",
    emotions: [
      {
        name: "Confidence",
        description: "Self-assured strength"
      },
      {
        name: "Empowerment",
        description: "Inner strength and capability"
      },
      {
        name: "Assertiveness",
        description: "Bold self-expression"
      }
    ]
  },
  {
    id: "sensual",
    title: "Sensuality & Attraction",
    description: "Seductive emotions that enhance allure",
    emotions: [
      {
        name: "Sensuality",
        description: "Physical and emotional attraction"
      },
      {
        name: "Passion",
        description: "Intense romantic desire"
      },
      {
        name: "Allurement",
        description: "Magnetic attraction"
      }
    ]
  },
  {
    id: "energetic",
    title: "Energy & Vitality",
    description: "Invigorating emotions that stimulate and refresh",
    emotions: [
      {
        name: "Energy",
        description: "Physical and mental vitality"
      },
      {
        name: "Focus",
        description: "Mental clarity and concentration"
      },
      {
        name: "Enthusiasm",
        description: "Excited anticipation"
      }
    ]
  },
  {
    id: "ethereal",
    title: "Dreams & Romance",
    description: "Ethereal emotions that inspire imagination",
    emotions: [
      {
        name: "Dreaminess",
        description: "Lost in pleasant thoughts"
      },
      {
        name: "Romance",
        description: "Tender affection"
      },
      {
        name: "Mystery",
        description: "Intriguing allure"
      }
    ]
  }
];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "EmotionIcon",
  __ssrInlineRender: true,
  props: {
    category: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const iconMap = {
      "Joy & Happiness": Sparkles,
      "Peace & Tranquility": Moon,
      "Power & Confidence": Crown,
      "Sensuality & Attraction": Heart,
      "Energy & Vitality": Zap,
      "Dreams & Romance": Cloud
    };
    const Icon = computed(() => iconMap[props.category] || Leaf);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(Icon.value), mergeProps({ class: _ctx.class }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/sections/emotions/components/EmotionIcon.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "EmotionsSelector",
  __ssrInlineRender: true,
  props: {
    selectedTags: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const hoveredEmotion = ref(null);
    const selectedCategories = computed(() => {
      const categories = new Set(
        props.selectedTags.filter((tag) => tag.category === "emotion").map((tag) => {
          for (const category of emotionCategories) {
            if (category.emotions.some((e) => e.name === tag.text)) {
              return category.id;
            }
          }
          return null;
        }).filter(Boolean)
      );
      return categories;
    });
    const showWarning = computed(() => selectedCategories.value.size > 3);
    const isSelected = (emotionName) => {
      return props.selectedTags.some(
        (tag) => tag.category === "emotion" && tag.text === emotionName
      );
    };
    const handleMouseEnter = (emotion) => {
      hoveredEmotion.value = emotion;
    };
    const handleMouseLeave = () => {
      hoveredEmotion.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))} data-v-fa09cd6c>`);
      if (showWarning.value) {
        _push(ssrRenderComponent(unref(_sfc_main$y), {
          variant: "warning",
          class: "bg-amber-50 border-amber-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(AlertTriangle), { class: "h-4 w-4 text-amber-600" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(_sfc_main$z), { class: "text-amber-600" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Selecting more than 3 emotion categories might create a confusing scent profile `);
                  } else {
                    return [
                      createTextVNode(" Selecting more than 3 emotion categories might create a confusing scent profile ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(AlertTriangle), { class: "h-4 w-4 text-amber-600" }),
                createVNode(unref(_sfc_main$z), { class: "text-amber-600" }, {
                  default: withCtx(() => [
                    createTextVNode(" Selecting more than 3 emotion categories might create a confusing scent profile ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-2 gap-6" data-v-fa09cd6c><!--[-->`);
      ssrRenderList(unref(emotionCategories), (category) => {
        _push(ssrRenderComponent(unref(_sfc_main$x), {
          key: category.id,
          class: "bg-transparent border-muted-foreground/20"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-4 space-y-2" data-v-fa09cd6c${_scopeId}><div class="flex items-center gap-2 mb-3" data-v-fa09cd6c${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$9), {
                category: category.title,
                class: "text-blue-500 w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(`<h4 class="text-primary-foreground text-sm font-medium" data-v-fa09cd6c${_scopeId}>${ssrInterpolate(category.title)}</h4></div><div class="flex flex-wrap gap-2" data-v-fa09cd6c${_scopeId}><!--[-->`);
              ssrRenderList(category.emotions, (emotion) => {
                _push2(ssrRenderComponent(unref(_sfc_main$b), {
                  key: emotion.name
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(_sfc_main$d), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(_sfc_main$a), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(_sfc_main$u), {
                                    class: [
                                      "px-3 py-1.5 h-auto rounded-full transition-all text-xs border",
                                      isSelected(emotion.name) ? "bg-blue-500/50 border-blue-500 hover:bg-blue-500/50" : "bg-muted-foreground border-foreground/80 hover:bg-muted-foreground/80"
                                    ],
                                    onClick: () => _ctx.$emit("select", emotion.name),
                                    onMouseenter: () => handleMouseEnter(emotion.name),
                                    onMouseleave: handleMouseLeave
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(emotion.name)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(emotion.name), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(_sfc_main$u), {
                                      class: [
                                        "px-3 py-1.5 h-auto rounded-full transition-all text-xs border",
                                        isSelected(emotion.name) ? "bg-blue-500/50 border-blue-500 hover:bg-blue-500/50" : "bg-muted-foreground border-foreground/80 hover:bg-muted-foreground/80"
                                      ],
                                      onClick: () => _ctx.$emit("select", emotion.name),
                                      onMouseenter: () => handleMouseEnter(emotion.name),
                                      onMouseleave: handleMouseLeave
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(emotion.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class", "onClick", "onMouseenter"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(unref(_sfc_main$c), {
                              side: "top",
                              class: "bg-white text-gray-700 text-sm p-3 w-64 shadow-apple-lg border border-gray-200"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(emotion.description)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(emotion.description), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(_sfc_main$a), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$u), {
                                    class: [
                                      "px-3 py-1.5 h-auto rounded-full transition-all text-xs border",
                                      isSelected(emotion.name) ? "bg-blue-500/50 border-blue-500 hover:bg-blue-500/50" : "bg-muted-foreground border-foreground/80 hover:bg-muted-foreground/80"
                                    ],
                                    onClick: () => _ctx.$emit("select", emotion.name),
                                    onMouseenter: () => handleMouseEnter(emotion.name),
                                    onMouseleave: handleMouseLeave
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(emotion.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "onClick", "onMouseenter"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$c), {
                                side: "top",
                                class: "bg-white text-gray-700 text-sm p-3 w-64 shadow-apple-lg border border-gray-200"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(emotion.description), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(_sfc_main$d), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$a), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$u), {
                                  class: [
                                    "px-3 py-1.5 h-auto rounded-full transition-all text-xs border",
                                    isSelected(emotion.name) ? "bg-blue-500/50 border-blue-500 hover:bg-blue-500/50" : "bg-muted-foreground border-foreground/80 hover:bg-muted-foreground/80"
                                  ],
                                  onClick: () => _ctx.$emit("select", emotion.name),
                                  onMouseenter: () => handleMouseEnter(emotion.name),
                                  onMouseleave: handleMouseLeave
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(emotion.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class", "onClick", "onMouseenter"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$c), {
                              side: "top",
                              class: "bg-white text-gray-700 text-sm p-3 w-64 shadow-apple-lg border border-gray-200"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(emotion.description), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-4 space-y-2" }, [
                  createVNode("div", { class: "flex items-center gap-2 mb-3" }, [
                    createVNode(unref(_sfc_main$9), {
                      category: category.title,
                      class: "text-blue-500 w-5 h-5"
                    }, null, 8, ["category"]),
                    createVNode("h4", { class: "text-primary-foreground text-sm font-medium" }, toDisplayString(category.title), 1)
                  ]),
                  createVNode("div", { class: "flex flex-wrap gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(category.emotions, (emotion) => {
                      return openBlock(), createBlock(unref(_sfc_main$b), {
                        key: emotion.name
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$d), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$a), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$u), {
                                    class: [
                                      "px-3 py-1.5 h-auto rounded-full transition-all text-xs border",
                                      isSelected(emotion.name) ? "bg-blue-500/50 border-blue-500 hover:bg-blue-500/50" : "bg-muted-foreground border-foreground/80 hover:bg-muted-foreground/80"
                                    ],
                                    onClick: () => _ctx.$emit("select", emotion.name),
                                    onMouseenter: () => handleMouseEnter(emotion.name),
                                    onMouseleave: handleMouseLeave
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(emotion.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "onClick", "onMouseenter"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(unref(_sfc_main$c), {
                                side: "top",
                                class: "bg-white text-gray-700 text-sm p-3 w-64 shadow-apple-lg border border-gray-200"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(emotion.description), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/sections/emotions/EmotionsSelector.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const EmotionsSelector = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-fa09cd6c"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "OccasionIcon",
  __ssrInlineRender: true,
  props: {
    occasion: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const icon = computed(() => {
      switch (props.occasion.toLowerCase()) {
        case "daily wear":
          return Sun;
        case "special occasions":
          return Crown;
        case "work/office":
          return Briefcase;
        case "leisure":
          return Home;
        case "social events":
          return PartyPopper;
        case "romantic":
          return Heart;
        case "sports/gym":
          return Dumbbell;
        case "formal events":
          return GraduationCap;
        case "celebrations":
          return PartyPopper;
        case "travel":
          return Plane;
        case "intimacy":
          return Moon;
        default:
          return Sun;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(icon.value), mergeProps({ class: _ctx.class }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/sections/occasion/components/OccasionIcon.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "OccasionSelector",
  __ssrInlineRender: true,
  props: {
    selectedTags: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const occasions = [
      {
        name: "Work/Office",
        description: "Subtle, professional scents projecting confidence",
        image: "https://images.unsplash.com/photo-1600880292203-02c6d4f3cb96?w=800&auto=format&fit=crop"
      },
      {
        name: "Social Event",
        description: "Memorable fragrances that make a statement",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop"
      },
      {
        name: "Date Night",
        description: "Sensual, alluring scents for intimate moments",
        image: "https://images.unsplash.com/photo-1513104890138-7c749a32e3b6?w=800&auto=format&fit=crop"
      },
      {
        name: "Relaxation/Home",
        description: "Calming, comforting scents for unwinding",
        image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&auto=format&fit=crop"
      },
      {
        name: "Outdoor Activities",
        description: "Fresh, invigorating scents for nature and adventure",
        image: "https://images.unsplash.com/photo-1601225210029-347bc5ca1b38?w=800&auto=format&fit=crop"
      },
      {
        name: "Gym/Fitness",
        description: "Energizing scents for active lifestyles",
        image: "https://images.unsplash.com/photo-1571902943202-4c7c28c8b991?w=800&auto=format&fit=crop"
      },
      {
        name: "Travel",
        description: "Versatile fragrances for any destination",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop"
      },
      {
        name: "Everyday/Casual",
        description: "Light, refreshing scents for daily wear",
        image: "https://images.unsplash.com/photo-1488161628813-04466f6be2e5?w=800&auto=format&fit=crop"
      }
    ];
    const isSelected = (name) => {
      return props.selectedTags.some(
        (tag) => tag.category === "occasion" && tag.text === name
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 gap-6" }, _attrs))} data-v-9809653b><!--[-->`);
      ssrRenderList(occasions, ({ name, description, image }) => {
        _push(ssrRenderComponent(unref(_sfc_main$u), {
          key: name,
          variant: "ghost",
          class: "p-0 h-auto block",
          onClick: () => _ctx.$emit("select", name)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([[
                isSelected(name) ? "ring-2 ring-primary-500 scale-[1.02] shadow-glass-strong" : "border border-foreground/80 hover:border-foreground/80"
              ], "group relative overflow-hidden rounded-lg transition-all duration-300"])}" data-v-9809653b${_scopeId}><div class="aspect-video relative" data-v-9809653b${_scopeId}><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", name)} class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" data-v-9809653b${_scopeId}></div><div class="relative p-4 bg-muted-foreground backdrop-blur-sm" data-v-9809653b${_scopeId}><div class="flex items-center gap-2" data-v-9809653b${_scopeId}>`);
              _push2(ssrRenderComponent(unref(_sfc_main$7), {
                occasion: name,
                class: [
                  "w-5 h-5",
                  isSelected(name) ? "text-blue-500" : "text-primary-foreground"
                ]
              }, null, _parent2, _scopeId));
              _push2(`<div class="${ssrRenderClass([isSelected(name) ? "text-blue-500" : "text-primary-foreground", "text-sm font-medium"])}" data-v-9809653b${_scopeId}>${ssrInterpolate(name)}</div></div><div class="text-xs text-muted mt-1 line-clamp-2 text-left" data-v-9809653b${_scopeId}>${ssrInterpolate(description)}</div></div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["group relative overflow-hidden rounded-lg transition-all duration-300", [
                    isSelected(name) ? "ring-2 ring-primary-500 scale-[1.02] shadow-glass-strong" : "border border-foreground/80 hover:border-foreground/80"
                  ]]
                }, [
                  createVNode("div", { class: "aspect-video relative" }, [
                    createVNode("img", {
                      src: image,
                      alt: name,
                      class: "absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", { class: "relative p-4 bg-muted-foreground backdrop-blur-sm" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(unref(_sfc_main$7), {
                        occasion: name,
                        class: [
                          "w-5 h-5",
                          isSelected(name) ? "text-blue-500" : "text-primary-foreground"
                        ]
                      }, null, 8, ["occasion", "class"]),
                      createVNode("div", {
                        class: ["text-sm font-medium", isSelected(name) ? "text-blue-500" : "text-primary-foreground"]
                      }, toDisplayString(name), 3)
                    ]),
                    createVNode("div", { class: "text-xs text-muted mt-1 line-clamp-2 text-left" }, toDisplayString(description), 1)
                  ])
                ], 2)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/sections/occasion/OccasionSelector.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const OccasionSelector = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-9809653b"]]);
const colors = [
  // Reds
  { name: "Red", hex: "#FF0000" },
  { name: "DarkRed", hex: "#8B0000" },
  { name: "Maroon", hex: "#800000" },
  // Pinks
  { name: "Pink", hex: "#FFC0CB" },
  { name: "HotPink", hex: "#FF69B4" },
  { name: "DeepPink", hex: "#FF1493" },
  // Purples
  { name: "Purple", hex: "#800080" },
  { name: "Indigo", hex: "#4B0082" },
  { name: "Violet", hex: "#EE82EE" },
  { name: "DarkViolet", hex: "#9400D3" },
  { name: "Magenta", hex: "#FF00FF" },
  // Blues
  { name: "Blue", hex: "#0000FF" },
  { name: "RoyalBlue", hex: "#4169E1" },
  { name: "Navy", hex: "#000080" },
  { name: "SkyBlue", hex: "#87CEEB" },
  { name: "CornflowerBlue", hex: "#6495ED" },
  // Cyans
  { name: "Cyan", hex: "#00FFFF" },
  { name: "Turquoise", hex: "#40E0D0" },
  { name: "Teal", hex: "#008080" },
  // Greens
  { name: "Green", hex: "#008000" },
  { name: "ForestGreen", hex: "#228B22" },
  { name: "SpringGreen", hex: "#00FF7F" },
  { name: "LimeGreen", hex: "#32CD32" },
  { name: "Olive", hex: "#808000" },
  // Yellows
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Gold", hex: "#FFD700" },
  { name: "Khaki", hex: "#F0E68C" },
  // Oranges
  { name: "Orange", hex: "#FFA500" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "OrangeRed", hex: "#FF4500" },
  // Browns
  { name: "Brown", hex: "#A52A2A" },
  { name: "SaddleBrown", hex: "#8B4513" },
  { name: "Peru", hex: "#CD853F" },
  { name: "Chocolate", hex: "#D2691E" },
  // Whites
  { name: "White", hex: "#FFFFFF" },
  { name: "Ivory", hex: "#FFFFF0" },
  { name: "AntiqueWhite", hex: "#FAEBD7" },
  // Grays
  { name: "Gray", hex: "#808080" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "DarkSlateGray", hex: "#2F4F4F" },
  { name: "Black", hex: "#000000" }
];
const colorDescriptions = {
  AliceBlue: "A gossamer-light blend of white tea, cucumber water, and fresh linen, capturing the essence of morning frost on delicate petals.",
  AntiqueWhite: "A nostalgic composition of dried vanilla pods, aged parchment, and powdered iris root, evoking memories of vintage love letters.",
  Aqua: "A crystalline fusion of sea spray, frozen mint, and water lily, creating the sensation of diving into a pristine mountain lake.",
  Aquamarine: "A refreshing blend of sea salt, green melon, and fresh eucalyptus, reminiscent of ocean breezes on a summer morning.",
  Azure: "An ethereal combination of cloud mist, white sage, and clean ozone, capturing the essence of the sky after rain.",
  Beige: "A subtle harmony of blonde woods, creamy sandalwood, and soft suede, offering sophisticated neutrality.",
  Bisque: "A delicate blend of warm milk, toasted almonds, and vanilla cream, suggesting comfort and elegance.",
  Black: "An intense fusion of rare oud, black amber, and midnight jasmine, embodying ultimate mystery and power.",
  BlanchedAlmond: "A gentle mix of sweet almond milk, white honey, and fresh cream, creating a soft, nurturing embrace.",
  Blue: "A profound blend of deep ocean accord, arctic pine, and cool minerals, expressing infinite depth.",
  BlueViolet: "A mysterious combination of midnight orchid, wild blueberry, and incense smoke, suggesting royal opulence.",
  Brown: "A rich fusion of roasted coffee beans, aged leather, and tobacco leaf, offering warmth and sophistication.",
  BurlyWood: "A robust blend of cedar wood, raw honey, and weathered leather, evoking natural strength and character.",
  CadetBlue: "A disciplined mix of sea minerals, juniper berry, and crisp uniform linen, suggesting military precision.",
  Chartreuse: "An electric combination of fresh lime zest, young ginger, and spring leaves, creating vibrant energy.",
  Chocolate: "A decadent fusion of dark cacao, vanilla bourbon, and warm spices, embracing rich indulgence.",
  Coral: "A vibrant blend of blood orange, tropical flowers, and warm sand accord, capturing sunset on tropical shores.",
  CornflowerBlue: "A romantic mix of blue cornflower, morning dew, and fresh cotton, suggesting pastoral beauty.",
  Cornsilk: "A delicate harmony of fresh corn silk, sweet hay, and summer air, evoking sun-drenched farm fields.",
  Crimson: "A passionate blend of red roses, spiced berries, and dark musk, expressing intense desire.",
  Cyan: "A pure fusion of glacial water, frozen mint, and crystal accord, suggesting perfect clarity.",
  DarkBlue: "A profound mix of night-blooming water lily, deep sea accord, and black ink, expressing oceanic depths.",
  DarkCyan: "An mysterious blend of deep aquatic notes, dark seaweed, and cold stone, suggesting hidden depths.",
  DarkGoldenRod: "A rich combination of golden amber, toasted spices, and medieval honey wine, evoking ancient treasures.",
  DarkGray: "A sophisticated blend of silver musk, cool stone, and graphite accord, suggesting urban elegance.",
  DarkGreen: "An intense fusion of forest floor, crushed pine needles, and wet moss, capturing primeval woods.",
  DarkKhaki: "A rugged blend of dried herbs, sun-baked earth, and weathered canvas, suggesting adventure.",
  DarkMagenta: "A bewitching mix of black orchid, purple incense, and dark berries, expressing mysterious allure.",
  DarkOliveGreen: "An earthy combination of crushed olive leaves, vetiver root, and fresh herbs, evoking Mediterranean gardens.",
  DarkOrange: "An intense blend of bitter orange peel, warm amber, and exotic spices, suggesting tropical heat.",
  DarkOrchid: "A luxurious fusion of rare orchids, purple incense, and midnight rain, expressing exotic mystery.",
  DarkRed: "A powerful mix of black roses, dragon's blood incense, and dark woods, suggesting primal intensity.",
  DarkSalmon: "A gentle blend of pink grapefruit, coral flowers, and warm skin musk, evoking sunset warmth.",
  DarkSeaGreen: "A calming fusion of sea moss, green algae, and salt water, capturing ocean depths.",
  DarkSlateBlue: "A mysterious combination of night-blooming flowers, dark incense, and wet slate, suggesting hidden wisdom.",
  DarkSlateGray: "A profound blend of wet stone, dark moss, and mineral accord, evoking ancient foundations.",
  DarkTurquoise: "An intense mix of deep sea minerals, frozen aqua, and crystal musk, expressing ocean mysteries.",
  DarkViolet: "A seductive blend of purple flowers, dark berries, and midnight incense, suggesting royal mysteries.",
  DeepPink: "An intense fusion of hot pink pepper, electric rose, and vibrant musk, expressing bold femininity.",
  DeepSkyBlue: "A soaring blend of high altitude air, blue ozone, and crystal waters, capturing infinite skies.",
  DimGray: "A subtle mix of grey amber, smoke, and cool musk, suggesting understated elegance.",
  DodgerBlue: "An energetic combination of fresh air, blue water, and clean ozone, evoking summer sports.",
  FireBrick: "An intense blend of red clay, burning wood, and hot spices, suggesting architectural strength.",
  FloralWhite: "A delicate mix of white flowers, clean linen, and fresh air, expressing pure elegance.",
  ForestGreen: "A verdant fusion of pine needles, wild ferns, and forest air, capturing woodland depths.",
  Fuchsia: "An electric blend of exotic flowers, pink pepper, and sparkling aldehydes, expressing vivid energy.",
  Gainsboro: "A refined mix of silver musk, clean linen, and fresh air, suggesting quiet sophistication.",
  GhostWhite: "An ethereal blend of white musk, cold air, and translucent flowers, evoking spectral presence.",
  Gold: "A luxurious fusion of precious saffron, golden honey, and warm amber, expressing opulent wealth.",
  GoldenRod: "A warm blend of golden wheat, summer honey, and sun-warmed wood, suggesting harvest bounty.",
  Gray: "A balanced mix of silver sage, cool stone, and neutral musk, expressing perfect neutrality.",
  Green: "A vibrant fusion of fresh leaves, cut grass, and morning dew, capturing natural vitality.",
  GreenYellow: "An energetic blend of lime zest, young leaves, and morning air, suggesting spring awakening.",
  HoneyDew: "A sweet combination of fresh melon, morning dew, and cucumber water, evoking garden freshness.",
  HotPink: "An exuberant mix of pink pepper, electric rose, and bright berries, expressing playful energy.",
  IndianRed: "A rich blend of red clay, warm spices, and desert flowers, suggesting earthen warmth.",
  Indigo: "A profound fusion of night-blooming jasmine, dark ink, and deep musk, expressing mysterious depths.",
  Ivory: "A precious blend of white flowers, clean musk, and powdered vanilla, suggesting pure luxury.",
  Khaki: "A utilitarian mix of dried grass, warm canvas, and desert air, evoking military adventures.",
  Lavender: "A soothing blend of French lavender, soft powder, and white tea, offering gentle tranquility.",
  LavenderBlush: "A delicate fusion of pink lavender, rose petals, and soft powder, expressing romantic innocence.",
  LawnGreen: "A fresh blend of cut grass, morning dew, and clean air, capturing perfect summer mornings.",
  LemonChiffon: "A delicate mix of lemon zest, vanilla cream, and fresh air, suggesting light desserts.",
  LightBlue: "A gentle blend of sky mist, clean cotton, and fresh air, evoking spring mornings.",
  LightCoral: "A soft fusion of pink flowers, sea spray, and warm sand, suggesting tropical shores.",
  LightCyan: "A fresh combination of water lily, cool mint, and clean air, expressing aquatic clarity.",
  LightGoldenRodYellow: "A gentle mix of summer flowers, warm hay, and golden light, suggesting pastoral scenes.",
  LightGray: "A subtle blend of silver musk, clean linen, and morning air, expressing quiet elegance.",
  LightGreen: "A bright fusion of fresh leaves, sweet grass, and morning dew, capturing spring vitality.",
  LightPink: "A tender blend of rose petals, pink sugar, and soft musk, suggesting gentle romance.",
  LightSalmon: "A fresh mix of pink grapefruit, coral flowers, and sea spray, evoking coastal mornings.",
  LightSeaGreen: "A refreshing blend of sea minerals, green algae, and fresh water, suggesting tropical shores.",
  LightSkyBlue: "A bright combination of clean ozone, fresh air, and water mist, expressing open skies.",
  LightSlateGray: "A sophisticated mix of grey amber, cool stone, and clean musk, suggesting urban elegance.",
  LightSteelBlue: "A metallic blend of cool water, clean air, and silver musk, evoking industrial precision.",
  LightYellow: "A gentle fusion of lemon blossom, fresh air, and white musk, suggesting morning light.",
  Lime: "An intense blend of fresh lime zest, green leaves, and cool mint, expressing zesty energy.",
  LimeGreen: "A vibrant mix of lime peel, fresh herbs, and green leaves, suggesting tropical vitality.",
  Linen: "A clean blend of fresh cotton, warm air, and white flowers, evoking fresh laundry.",
  Magenta: "An electric fusion of exotic flowers, pink pepper, and bright berries, expressing bold energy.",
  Maroon: "A rich blend of aged wine, dark berries, and smoky wood, suggesting vintage luxury.",
  MediumAquaMarine: "A balanced mix of sea minerals, green algae, and fresh water, capturing ocean depths.",
  MediumBlue: "A deep blend of ocean water, arctic pine, and cool minerals, expressing maritime power.",
  MediumOrchid: "A luxurious mix of purple orchids, sweet berries, and exotic spices, suggesting tropical nights.",
  MediumPurple: "A royal blend of purple flowers, sweet incense, and dark musk, expressing mysterious allure.",
  MediumSeaGreen: "A fresh fusion of sea moss, green algae, and salt air, capturing coastal vitality.",
  MediumSlateBlue: "A mysterious mix of blue flowers, night air, and cool stone, suggesting twilight magic.",
  MediumSpringGreen: "A vibrant blend of fresh leaves, spring water, and young shoots, expressing new growth.",
  MediumTurquoise: "A fresh combination of sea minerals, aqua mist, and clean ozone, suggesting tropical waters.",
  MediumVioletRed: "A bold fusion of red violets, dark berries, and hot spices, expressing passionate intensity.",
  MidnightBlue: "A profound blend of night flowers, dark water, and cool air, capturing nocturnal mystery.",
  MintCream: "A fresh mix of sweet mint, cream, and clean air, suggesting cool desserts.",
  MistyRose: "A delicate blend of rose petals, morning mist, and soft powder, evoking romantic mornings.",
  Moccasin: "A warm fusion of leather, sweet suede, and desert flowers, suggesting Native American heritage.",
  NavajoWhite: "A earthy blend of desert sand, dry wood, and warm air, evoking southwestern landscapes.",
  Navy: "A disciplined mix of ocean depth, clean uniform, and cool air, suggesting military precision.",
  OldLace: "A vintage blend of antique fabric, dried flowers, and soft powder, expressing nostalgic elegance.",
  Olive: "A rich fusion of pressed olives, mediterranean herbs, and warm earth, capturing ancient groves.",
  OliveDrab: "A military blend of crushed leaves, canvas, and earth, suggesting camouflage in nature.",
  Orange: "A bright fusion of sweet orange, warm amber, and golden honey, expressing solar energy.",
  OrangeRed: "An intense blend of blood orange, hot spices, and warm amber, suggesting fiery heat.",
  Orchid: "A exotic mix of rare orchids, sweet vanilla, and tropical rain, expressing exotic beauty.",
  PaleGoldenRod: "A gentle blend of summer wheat, warm honey, and soft air, suggesting sunlit fields.",
  PaleGreen: "A soft fusion of young leaves, morning dew, and fresh air, expressing spring gentleness.",
  PaleTurquoise: "A delicate mix of sea spray, morning mist, and fresh water, suggesting coastal dawns.",
  PaleVioletRed: "A tender blend of pink roses, soft violet, and warm musk, evoking romantic twilight.",
  PapayaWhip: "A tropical fusion of ripe papaya, coconut cream, and warm vanilla, suggesting exotic desserts.",
  PeachPuff: "A soft blend of fresh peach skin, cream, and sweet powder, expressing gentle warmth.",
  Peru: "A rich mix of ancient wood, terra cotta, and wild vanilla, suggesting South American mysteries.",
  Pink: "A sweet blend of rose petals, cotton candy, and soft powder, expressing innocent joy.",
  Plum: "A rich fusion of ripe plums, purple flowers, and dark honey, suggesting opulent fruit.",
  PowderBlue: "A soft mix of clean linen, fresh air, and cool water, evoking pristine freshness.",
  Purple: "A royal blend of dark violets, black currant, and midnight incense, expressing majestic mystery.",
  RebeccaPurple: "A memorable fusion of purple flowers, night rain, and sweet memories, honoring Rebecca.",
  Red: "An intense blend of red roses, hot spices, and passionate musk, expressing pure energy.",
  RosyBrown: "A vintage mix of dried roses, old wood, and soft powder, suggesting antique elegance.",
  RoyalBlue: "A majestic blend of blue lotus, crown jewels, and noble incense, expressing regal power.",
  SaddleBrown: "A rich fusion of aged leather, polished wood, and tobacco, suggesting equestrian luxury.",
  Salmon: "A fresh blend of pink citrus, ocean spray, and warm sand, evoking coastal sunsets.",
  SandyBrown: "A warm mix of beach sand, coconut, and sun-warmed wood, suggesting tropical shores.",
  SeaGreen: "A fresh fusion of ocean flora, green algae, and salt spray, capturing maritime depths.",
  SeaShell: "A delicate blend of ocean shells, salt air, and warm sand, expressing beach memories.",
  Sienna: "An earthy mix of red clay, autumn leaves, and warm spices, suggesting Italian earth.",
  Silver: "A metallic blend of cool minerals, clean rain, and frost, expressing modern elegance.",
  SkyBlue: "A fresh fusion of clean ozone, morning air, and water mist, capturing open horizons.",
  SlateBlue: "A deep blend of blue flowers, wet stone, and cool mist, suggesting twilight mystery.",
  SlateGray: "A sophisticated mix of grey amber, rain-wet stone, and cool air, expressing urban refinement.",
  Snow: "A pure blend of frozen air, white musk, and clean cotton, suggesting winter freshness.",
  SpringGreen: "A vibrant fusion of young leaves, fresh grass, and morning dew, expressing new beginnings.",
  SteelBlue: "A metallic mix of cool water, industrial air, and clean metal, suggesting modern strength.",
  Tan: "A warm blend of beach sand, soft leather, and sun-warmed skin, evoking summer memories.",
  Teal: "A deep fusion of ocean minerals, dark seaweed, and cool mist, suggesting mysterious depths.",
  Thistle: "A wild blend of Scottish flowers, mountain air, and purple herbs, expressing untamed beauty.",
  Tomato: "A fresh mix of vine-ripened tomatoes, basil leaves, and Mediterranean herbs, suggesting garden harvest.",
  Turquoise: "A bright blend of ocean spray, tropical waters, and crystal minerals, expressing exotic shores.",
  Violet: "A sweet fusion of fresh violets, spring rain, and soft powder, suggesting delicate beauty.",
  Wheat: "A warm blend of golden grain, summer hay, and hot sun, evoking harvest fields.",
  White: "A pure fusion of white lily, clean cotton, and fresh snow, expressing absolute clarity.",
  WhiteSmoke: "A subtle mix of white musk, clean air, and soft incense, suggesting gentle mystery.",
  Yellow: "A bright blend of fresh citrus, golden sunshine, and clean air, expressing pure joy.",
  YellowGreen: "A fresh fusion of young leaves, spring pollen, and morning dew, suggesting new growth."
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ColorPicker",
  __ssrInlineRender: true,
  props: {
    selectedColor: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const description = ref("");
    const handleColorSelect = (name, hex) => {
      if (props.selectedColor === hex) {
        description.value = "";
        emit("select", "", "");
        return;
      }
      const desc = colorDescriptions[name] || `A unique fragrance inspired by ${name}`;
      description.value = desc;
      emit("select", hex, name);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))} data-v-0e18b972>`);
      _push(ssrRenderComponent(unref(_sfc_main$x), { class: "bg-transparent border-muted-foreground/20" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4" data-v-0e18b972${_scopeId}>`);
            if (_ctx.selectedColor) {
              _push2(`<div class="flex items-center gap-4" data-v-0e18b972${_scopeId}><div class="w-12 h-12 rounded-lg border-2 border-muted-foreground/20 shadow-apple shrink-0" style="${ssrRenderStyle({ backgroundColor: _ctx.selectedColor })}" data-v-0e18b972${_scopeId}></div><p class="text-primary-foreground text-sm italic leading-relaxed" data-v-0e18b972${_scopeId}>${ssrInterpolate(description.value)}</p></div>`);
            } else {
              _push2(`<p class="text-primary-foreground text-sm italic" data-v-0e18b972${_scopeId}> Select a color to see its fragrance inspiration </p>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-4" }, [
                _ctx.selectedColor ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center gap-4"
                }, [
                  createVNode("div", {
                    class: "w-12 h-12 rounded-lg border-2 border-muted-foreground/20 shadow-apple shrink-0",
                    style: { backgroundColor: _ctx.selectedColor }
                  }, null, 4),
                  createVNode("p", { class: "text-primary-foreground text-sm italic leading-relaxed" }, toDisplayString(description.value), 1)
                ])) : (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-primary-foreground text-sm italic"
                }, " Select a color to see its fragrance inspiration "))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-8 gap-2" data-v-0e18b972>`);
      _push(ssrRenderComponent(unref(_sfc_main$b), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(colors), (color) => {
              _push2(ssrRenderComponent(unref(_sfc_main$d), {
                key: color.hex
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$a), { asChild: "" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$u), {
                            variant: "outline",
                            class: ["relative aspect-square p-0 group border border-muted-foreground/20 transition-all hover:scale-110", [
                              _ctx.selectedColor === color.hex ? "ring-2 ring-muted-foreground/20 scale-110 shadow-apple" : "ring-1 ring-border"
                            ]],
                            style: { backgroundColor: color.hex },
                            onClick: () => handleColorSelect(color.name, color.hex)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="sr-only" data-v-0e18b972${_scopeId4}>${ssrInterpolate(color.name)}</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "sr-only" }, toDisplayString(color.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$u), {
                              variant: "outline",
                              class: ["relative aspect-square p-0 group border border-muted-foreground/20 transition-all hover:scale-110", [
                                _ctx.selectedColor === color.hex ? "ring-2 ring-muted-foreground/20 scale-110 shadow-apple" : "ring-1 ring-border"
                              ]],
                              style: { backgroundColor: color.hex },
                              onClick: () => handleColorSelect(color.name, color.hex)
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "sr-only" }, toDisplayString(color.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["class", "style", "onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$c), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p data-v-0e18b972${_scopeId3}>${ssrInterpolate(color.name)}</p>`);
                        } else {
                          return [
                            createVNode("p", null, toDisplayString(color.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$a), { asChild: "" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$u), {
                            variant: "outline",
                            class: ["relative aspect-square p-0 group border border-muted-foreground/20 transition-all hover:scale-110", [
                              _ctx.selectedColor === color.hex ? "ring-2 ring-muted-foreground/20 scale-110 shadow-apple" : "ring-1 ring-border"
                            ]],
                            style: { backgroundColor: color.hex },
                            onClick: () => handleColorSelect(color.name, color.hex)
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "sr-only" }, toDisplayString(color.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["class", "style", "onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$c), null, {
                        default: withCtx(() => [
                          createVNode("p", null, toDisplayString(color.name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(colors), (color) => {
                return openBlock(), createBlock(unref(_sfc_main$d), {
                  key: color.hex
                }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$a), { asChild: "" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$u), {
                          variant: "outline",
                          class: ["relative aspect-square p-0 group border border-muted-foreground/20 transition-all hover:scale-110", [
                            _ctx.selectedColor === color.hex ? "ring-2 ring-muted-foreground/20 scale-110 shadow-apple" : "ring-1 ring-border"
                          ]],
                          style: { backgroundColor: color.hex },
                          onClick: () => handleColorSelect(color.name, color.hex)
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "sr-only" }, toDisplayString(color.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["class", "style", "onClick"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$c), null, {
                      default: withCtx(() => [
                        createVNode("p", null, toDisplayString(color.name), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/sections/color/ColorPicker.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0e18b972"]]);
const SCENT_FAMILIES = [
  {
    name: "Floral",
    notes: "Rose, Jasmine, Lily, Orange Blossom"
  },
  {
    name: "Oriental",
    notes: "Vanilla, Amber, Musk, Spices"
  },
  {
    name: "Woody",
    notes: "Sandalwood, Cedar, Vetiver, Patchouli"
  },
  {
    name: "Fresh",
    notes: "Citrus, Marine, Green Notes, Aromatics"
  },
  {
    name: "Fougère",
    notes: "Lavender, Oakmoss, Coumarin, Geranium"
  },
  {
    name: "Chypre",
    notes: "Bergamot, Oakmoss, Labdanum, Patchouli"
  },
  {
    name: "Gourmand",
    notes: "Vanilla, Chocolate, Caramel, Coffee"
  },
  {
    name: "Aquatic",
    notes: "Sea Salt, Ocean Breeze, Water Lily, Marine Notes"
  }
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ScentFamilySelector",
  __ssrInlineRender: true,
  props: {
    selectedTags: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const localIntensities = ref({});
    const getSelectionState = (familyName) => {
      const tag = props.selectedTags.find(
        (t) => t.category === "Scent Family" && t.text.startsWith(familyName)
      );
      return {
        isSelected: !!tag,
        intensity: localIntensities.value[familyName] || 0
      };
    };
    const handleIntensitySelect = (family, value, oldValue) => {
      if (value === 0) {
        emit("remove", `${family} (${oldValue}% intensity)`, "Scent Family");
        return;
      }
      localIntensities.value = { [family]: value };
      emit("select", `${family} (${value}% intensity)`, "Scent Family");
    };
    const families = computed(() => {
      return SCENT_FAMILIES.map(({ name, notes }) => {
        const { isSelected, intensity } = getSelectionState(name);
        return {
          name,
          notes,
          isSelected,
          intensity
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}><!--[-->`);
      ssrRenderList(families.value, ({ name, notes, intensity, isSelected }) => {
        _push(ssrRenderComponent(unref(ScentFamily), {
          key: name,
          name,
          notes,
          intensity,
          "is-selected": isSelected,
          onToggle: (newValue) => handleIntensitySelect(name, newValue, intensity)
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/sections/advanced/components/ScentFamilySelector.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ScentFamily",
  __ssrInlineRender: true,
  props: {
    name: {},
    notes: {},
    intensity: {},
    isSelected: { type: Boolean }
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    const OPTIONS = [
      { value: 0, label: "No" },
      { value: 25, label: "Low" },
      { value: 50, label: "Normal" },
      { value: 75, label: "High" },
      { value: 100, label: "Highest" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$x), mergeProps({ class: "bg-transparent border-muted-foreground/2 space-y-3" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4" data-v-cfd911b3${_scopeId}><div class="flex items-center justify-between" data-v-cfd911b3${_scopeId}><div data-v-cfd911b3${_scopeId}><h4 class="text-primary-foreground font-medium" data-v-cfd911b3${_scopeId}>${ssrInterpolate(_ctx.name)}</h4><p class="text-sm text-muted-foreground mt-1" data-v-cfd911b3${_scopeId}>${ssrInterpolate(_ctx.notes)}</p></div>`);
            if (_ctx.isSelected) {
              _push2(`<span class="text-primary-foreground text-sm font-medium" data-v-cfd911b3${_scopeId}>${ssrInterpolate(_ctx.intensity)}% intensity </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex flex-wrap gap-2 mt-4" data-v-cfd911b3${_scopeId}><!--[-->`);
            ssrRenderList(OPTIONS, ({ value, label }) => {
              _push2(ssrRenderComponent(unref(_sfc_main$u), {
                key: value,
                variant: "outline",
                size: "sm",
                class: [
                  "rounded-full transition-all text-primary-foreground hover:text-primary-foreground",
                  _ctx.isSelected && _ctx.intensity === value ? "bg-blue-500/50 border-blue-500 hover:bg-blue-500/50" : "bg-muted-foreground border-foreground/80 hover:bg-muted-foreground/80"
                ],
                onClick: () => _ctx.$emit("toggle", value)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            if (_ctx.isSelected) {
              _push2(`<div class="mt-3" data-v-cfd911b3${_scopeId}><div class="h-1.5 bg-muted-foreground dark:bg-gray-700 rounded-full overflow-hidden" data-v-cfd911b3${_scopeId}><div class="h-full bg-blue-500 transition-all duration-300" style="${ssrRenderStyle({ width: `${_ctx.intensity}%` })}" data-v-cfd911b3${_scopeId}></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-4" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode("h4", { class: "text-primary-foreground font-medium" }, toDisplayString(_ctx.name), 1),
                    createVNode("p", { class: "text-sm text-muted-foreground mt-1" }, toDisplayString(_ctx.notes), 1)
                  ]),
                  _ctx.isSelected ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-primary-foreground text-sm font-medium"
                  }, toDisplayString(_ctx.intensity) + "% intensity ", 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "flex flex-wrap gap-2 mt-4" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(OPTIONS, ({ value, label }) => {
                    return createVNode(unref(_sfc_main$u), {
                      key: value,
                      variant: "outline",
                      size: "sm",
                      class: [
                        "rounded-full transition-all text-primary-foreground hover:text-primary-foreground",
                        _ctx.isSelected && _ctx.intensity === value ? "bg-blue-500/50 border-blue-500 hover:bg-blue-500/50" : "bg-muted-foreground border-foreground/80 hover:bg-muted-foreground/80"
                      ],
                      onClick: () => _ctx.$emit("toggle", value)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(label), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "onClick"]);
                  }), 64))
                ]),
                _ctx.isSelected ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-3"
                }, [
                  createVNode("div", { class: "h-1.5 bg-muted-foreground dark:bg-gray-700 rounded-full overflow-hidden" }, [
                    createVNode("div", {
                      class: "h-full bg-blue-500 transition-all duration-300",
                      style: { width: `${_ctx.intensity}%` }
                    }, null, 4)
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/sections/advanced/components/ScentFamily.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ScentFamily = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-cfd911b3"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AdvancedSelector",
  __ssrInlineRender: true,
  props: {
    selectedTags: {}
  },
  emits: ["select", "remove"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$4), mergeProps({
        "selected-tags": _ctx.selectedTags,
        onSelect: (text) => emit("select", text, "Scent Family"),
        onRemove: (text) => emit("remove", text, "Scent Family")
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/sections/advanced/AdvancedSelector.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PerfumeCrafter",
  __ssrInlineRender: true,
  setup(__props) {
    const perfumeCrafterStore = usePerfumeCrafterStore();
    const {
      selectedTags,
      customValues,
      showResult,
      composition,
      description,
      isLoading,
      product,
      isProductLoading,
      sortedTags,
      hasSelection
    } = storeToRefs(perfumeCrafterStore);
    const openSections = ref(
      sections.reduce((acc, section) => ({
        ...acc,
        [section.id]: false
      }), {})
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "perfume-crafter",
        class: "bg-black min-h-screen"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$m), {
        containerClass: "py-12 md:py-24 px-4 md:px-0",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto text-center text-white max-w-screen-xl px-4 md:px-0 space-y-6"${_scopeId}><h2 class="font-title font-bold text-5xl md:text-6xl bg-gradient-to-r from-white via-gray-300 to-gray-400 text-transparent bg-clip-text"${_scopeId}> Create Your Perfect Scent </h2><p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"${_scopeId}> Personalize your fragrance journey by selecting preferences and let our AI craft your signature scent. </p></div><div class="mx-auto max-w-screen-lg space-y-8"${_scopeId}><div class="min-h-screen py-12 px-4"${_scopeId}><div class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(sections), (section) => {
              _push2(ssrRenderComponent(unref(_sfc_main$e), {
                key: section.id,
                modelValue: openSections.value[section.id],
                "onUpdate:modelValue": ($event) => openSections.value[section.id] = $event,
                title: section.title,
                icon: section.icon,
                category: section.category,
                "selected-tags": unref(selectedTags),
                class: "space-y-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    if (section.id === "about-you") {
                      _push3(ssrRenderComponent(unref(_sfc_main$f), {
                        "selected-tags": unref(selectedTags),
                        onSelect: unref(perfumeCrafterStore).addTag,
                        onPreferenceUpdate: unref(perfumeCrafterStore).updateCustomValue
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (section.id === "emotions") {
                      _push3(ssrRenderComponent(unref(EmotionsSelector), {
                        "selected-tags": unref(selectedTags),
                        onSelect: (emotion) => unref(perfumeCrafterStore).addTag(emotion, "emotion")
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (section.id === "occasions") {
                      _push3(ssrRenderComponent(unref(OccasionSelector), {
                        "selected-tags": unref(selectedTags),
                        onSelect: (occasion) => unref(perfumeCrafterStore).addTag(occasion, "occasion")
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (section.id === "color") {
                      _push3(ssrRenderComponent(unref(ColorPicker), {
                        "selected-color": (_a = unref(selectedTags).find((tag) => tag.category === "color")) == null ? void 0 : _a.color,
                        onSelect: (color, name) => unref(perfumeCrafterStore).addTag(name, "color", color)
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (section.id === "scent-family") {
                      _push3(ssrRenderComponent(unref(_sfc_main$2), {
                        "selected-tags": unref(selectedTags),
                        onSelect: unref(perfumeCrafterStore).addTag,
                        onRemove: (text) => unref(perfumeCrafterStore).removeTag({ text, category: "Scent Family" })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      section.id === "about-you" ? (openBlock(), createBlock(unref(_sfc_main$f), {
                        key: 0,
                        "selected-tags": unref(selectedTags),
                        onSelect: unref(perfumeCrafterStore).addTag,
                        onPreferenceUpdate: unref(perfumeCrafterStore).updateCustomValue
                      }, null, 8, ["selected-tags", "onSelect", "onPreferenceUpdate"])) : createCommentVNode("", true),
                      section.id === "emotions" ? (openBlock(), createBlock(unref(EmotionsSelector), {
                        key: 1,
                        "selected-tags": unref(selectedTags),
                        onSelect: (emotion) => unref(perfumeCrafterStore).addTag(emotion, "emotion")
                      }, null, 8, ["selected-tags", "onSelect"])) : createCommentVNode("", true),
                      section.id === "occasions" ? (openBlock(), createBlock(unref(OccasionSelector), {
                        key: 2,
                        "selected-tags": unref(selectedTags),
                        onSelect: (occasion) => unref(perfumeCrafterStore).addTag(occasion, "occasion")
                      }, null, 8, ["selected-tags", "onSelect"])) : createCommentVNode("", true),
                      section.id === "color" ? (openBlock(), createBlock(unref(ColorPicker), {
                        key: 3,
                        "selected-color": (_b = unref(selectedTags).find((tag) => tag.category === "color")) == null ? void 0 : _b.color,
                        onSelect: (color, name) => unref(perfumeCrafterStore).addTag(name, "color", color)
                      }, null, 8, ["selected-color", "onSelect"])) : createCommentVNode("", true),
                      section.id === "scent-family" ? (openBlock(), createBlock(unref(_sfc_main$2), {
                        key: 4,
                        "selected-tags": unref(selectedTags),
                        onSelect: unref(perfumeCrafterStore).addTag,
                        onRemove: (text) => unref(perfumeCrafterStore).removeTag({ text, category: "Scent Family" })
                      }, null, 8, ["selected-tags", "onSelect", "onRemove"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto text-center text-white max-w-screen-xl px-4 md:px-0 space-y-6" }, [
                createVNode("h2", { class: "font-title font-bold text-5xl md:text-6xl bg-gradient-to-r from-white via-gray-300 to-gray-400 text-transparent bg-clip-text" }, " Create Your Perfect Scent "),
                createVNode("p", { class: "text-lg md:text-xl text-gray-300 max-w-2xl mx-auto" }, " Personalize your fragrance journey by selecting preferences and let our AI craft your signature scent. ")
              ]),
              createVNode("div", { class: "mx-auto max-w-screen-lg space-y-8" }, [
                createVNode("div", { class: "min-h-screen py-12 px-4" }, [
                  createVNode("div", { class: "space-y-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(sections), (section) => {
                      return openBlock(), createBlock(unref(_sfc_main$e), {
                        key: section.id,
                        modelValue: openSections.value[section.id],
                        "onUpdate:modelValue": ($event) => openSections.value[section.id] = $event,
                        title: section.title,
                        icon: section.icon,
                        category: section.category,
                        "selected-tags": unref(selectedTags),
                        class: "space-y-4"
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            section.id === "about-you" ? (openBlock(), createBlock(unref(_sfc_main$f), {
                              key: 0,
                              "selected-tags": unref(selectedTags),
                              onSelect: unref(perfumeCrafterStore).addTag,
                              onPreferenceUpdate: unref(perfumeCrafterStore).updateCustomValue
                            }, null, 8, ["selected-tags", "onSelect", "onPreferenceUpdate"])) : createCommentVNode("", true),
                            section.id === "emotions" ? (openBlock(), createBlock(unref(EmotionsSelector), {
                              key: 1,
                              "selected-tags": unref(selectedTags),
                              onSelect: (emotion) => unref(perfumeCrafterStore).addTag(emotion, "emotion")
                            }, null, 8, ["selected-tags", "onSelect"])) : createCommentVNode("", true),
                            section.id === "occasions" ? (openBlock(), createBlock(unref(OccasionSelector), {
                              key: 2,
                              "selected-tags": unref(selectedTags),
                              onSelect: (occasion) => unref(perfumeCrafterStore).addTag(occasion, "occasion")
                            }, null, 8, ["selected-tags", "onSelect"])) : createCommentVNode("", true),
                            section.id === "color" ? (openBlock(), createBlock(unref(ColorPicker), {
                              key: 3,
                              "selected-color": (_a = unref(selectedTags).find((tag) => tag.category === "color")) == null ? void 0 : _a.color,
                              onSelect: (color, name) => unref(perfumeCrafterStore).addTag(name, "color", color)
                            }, null, 8, ["selected-color", "onSelect"])) : createCommentVNode("", true),
                            section.id === "scent-family" ? (openBlock(), createBlock(unref(_sfc_main$2), {
                              key: 4,
                              "selected-tags": unref(selectedTags),
                              onSelect: unref(perfumeCrafterStore).addTag,
                              onRemove: (text) => unref(perfumeCrafterStore).removeTag({ text, category: "Scent Family" })
                            }, null, 8, ["selected-tags", "onSelect", "onRemove"])) : createCommentVNode("", true)
                          ];
                        }),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue", "title", "icon", "category", "selected-tags"]);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/home/perfume-crafter/PerfumeCrafter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$A), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hero), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Personalized), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Journey), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(FragranceCreation), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Testimonials), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(IridescentCollection), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$n), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Hero)),
              createVNode(unref(Personalized)),
              createVNode(unref(_sfc_main$1)),
              createVNode(unref(Journey)),
              createVNode(unref(FragranceCreation)),
              createVNode(unref(Testimonials)),
              createVNode(unref(IridescentCollection)),
              createVNode(unref(_sfc_main$n))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

import { defineComponent, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { usePage, Head, router } from "@inertiajs/vue3";
import { f as _sfc_main$1, _ as _sfc_main$2 } from "./index-DBcC5thU.js";
import { a as _sfc_main$3, b as _sfc_main$4, _ as _sfc_main$5 } from "./TrustFeatures-67q0ByD3.js";
import "class-variance-authority";
import "radix-vue";
import "@radix-icons/vue";
import "lucide-vue-next";
import "laravel-vue-i18n";
import "pinia";
import "@vueuse/core";
import "clsx";
import "tailwind-merge";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = computed(() => usePage().props.cart);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Cart" }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section id="cart" class="max-w-screen-2xl container px-4 sm:px-6 lg:px-12 min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-neutral-950 dark:to-black"${_scopeId}><div class="pt-32 pb-12"${_scopeId}><div class="flex items-center justify-between mb-8"${_scopeId}><h1 class="text-4xl text-foreground font-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("cart.title"))}</h1><span class="text-sm text-muted-foreground"${_scopeId}>${ssrInterpolate(_ctx.$t("cart.items_count", { count: cart.value.count }))}</span></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"${_scopeId}><div class="lg:col-span-2 space-y-6"${_scopeId}>`);
            if (cart.value.items.length <= 0) {
              _push2(`<div class="text-center py-12"${_scopeId}><h2 class="text-2xl font-semibold text-foreground"${_scopeId}>${ssrInterpolate(_ctx.$t("cart.empty_message"))}</h2><p class="text-muted-foreground mt-4"${_scopeId}>${ssrInterpolate(_ctx.$t("cart.empty_suggestion"))}</p>`);
              _push2(ssrRenderComponent(unref(_sfc_main$2), {
                class: "mt-6 px-6 py-3 transition-colors duration-300",
                onClick: ($event) => unref(router).visit(_ctx.route("home"))
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("cart.continue_shopping"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("cart.continue_shopping")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent2, _scopeId));
            _push2(`</div><div class="lg:col-span-1"${_scopeId}><div class="sticky top-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent2, _scopeId));
            _push2(`</div></div></div></div></section>`);
          } else {
            return [
              createVNode("section", {
                id: "cart",
                class: "max-w-screen-2xl container px-4 sm:px-6 lg:px-12 min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-neutral-950 dark:to-black"
              }, [
                createVNode("div", { class: "pt-32 pb-12" }, [
                  createVNode("div", { class: "flex items-center justify-between mb-8" }, [
                    createVNode("h1", { class: "text-4xl text-foreground font-bold" }, toDisplayString(_ctx.$t("cart.title")), 1),
                    createVNode("span", { class: "text-sm text-muted-foreground" }, toDisplayString(_ctx.$t("cart.items_count", { count: cart.value.count })), 1)
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, [
                    createVNode("div", { class: "lg:col-span-2 space-y-6" }, [
                      cart.value.items.length <= 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-center py-12"
                      }, [
                        createVNode("h2", { class: "text-2xl font-semibold text-foreground" }, toDisplayString(_ctx.$t("cart.empty_message")), 1),
                        createVNode("p", { class: "text-muted-foreground mt-4" }, toDisplayString(_ctx.$t("cart.empty_suggestion")), 1),
                        createVNode(unref(_sfc_main$2), {
                          class: "mt-6 px-6 py-3 transition-colors duration-300",
                          onClick: ($event) => unref(router).visit(_ctx.route("home"))
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("cart.continue_shopping")), 1)
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])) : (openBlock(), createBlock(unref(_sfc_main$3), { key: 1 })),
                      createVNode(unref(_sfc_main$4))
                    ]),
                    createVNode("div", { class: "lg:col-span-1" }, [
                      createVNode("div", { class: "sticky top-6" }, [
                        createVNode(unref(_sfc_main$5))
                      ])
                    ])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/cart/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

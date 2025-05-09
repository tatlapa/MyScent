import { defineComponent, ref, watch, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, createVNode, useSSRContext, computed, resolveComponent, Fragment, renderList, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderVNode } from "vue/server-renderer";
import { usePage, router, Link } from "@inertiajs/vue3";
import { a as _sfc_main$4, _ as _sfc_main$5, d as _sfc_main$6, e as _sfc_main$7, b as _sfc_main$8, h as _sfc_main$9, i as _sfc_main$a, k as _sfc_main$b } from "./index-DBcC5thU.js";
import { Loader2, X, ArrowRight, Minus, Plus, Trash2, ShieldCheck, Truck, ArrowLeftRight, HeartHandshake } from "lucide-vue-next";
import { wTrans } from "laravel-vue-i18n";
const visa = "/build/assets/visa-DS3B3I1A.svg";
const mastercard = "/build/assets/mastercard-CENMZqJ9.svg";
const paypal = "/build/assets/paypal-D6R05u4W.svg";
const amex = "/build/assets/amex-ChXhcif8.svg";
const promptpay = "/build/assets/promptpay-CLI0zcqU.png";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PromoCode",
  __ssrInlineRender: true,
  emits: ["apply"],
  setup(__props, { emit: __emit }) {
    const page = usePage();
    const code = ref("");
    const loading = ref(false);
    const error = ref(null);
    const isApplied = ref(false);
    const emit = __emit;
    const handleSubmit = () => {
      if (!code.value) return;
      loading.value = true;
      error.value = null;
      emit("apply", code.value);
    };
    watch(() => page.props.flash, (newFlash) => {
      loading.value = false;
      if (newFlash.error) {
        error.value = newFlash.error;
        isApplied.value = false;
      }
      if (newFlash.status === "error") {
        error.value = newFlash.message;
        isApplied.value = false;
      }
      if (newFlash.status === "success") {
        error.value = null;
        isApplied.value = true;
        code.value = "";
      }
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div class="flex space-x-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$4), {
        modelValue: code.value,
        "onUpdate:modelValue": ($event) => code.value = $event,
        placeholder: _ctx.$t("cart.promo_code.title"),
        disabled: loading.value,
        onKeyup: handleSubmit
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$5), {
        class: "whitespace-nowrap",
        disabled: !code.value || loading.value,
        onClick: handleSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (loading.value) {
              _push2(ssrRenderComponent(unref(Loader2), { class: "w-4 h-4 animate-spin mr-2" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(_ctx.$t("cart.promo_code.button"))}`);
          } else {
            return [
              loading.value ? (openBlock(), createBlock(unref(Loader2), {
                key: 0,
                class: "w-4 h-4 animate-spin mr-2"
              })) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(_ctx.$t("cart.promo_code.button")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (error.value) {
        _push(ssrRenderComponent(unref(_sfc_main$6), {
          variant: "destructive",
          class: "mt-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$7), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(error.value)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(error.value), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$7), null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(error.value), 1)
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
      if (isApplied.value && unref(page).props.promo) {
        _push(`<div class="flex items-center justify-between p-2 bg-gray-50 rounded"><div><p class="font-medium">Code promo appliqué</p><p class="text-sm text-gray-500"> -${ssrInterpolate(_ctx.formatPrice(unref(page).props.promo.discount, unref(page).props.cart.currency))}</p></div>`);
        _push(ssrRenderComponent(unref(_sfc_main$5), {
          variant: "ghost",
          size: "icon",
          onClick: _ctx.handleRemove
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(X), { class: "w-4 h-4" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/cart/PromoCode.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const formatPrice = (price, currency) => {
  return new Intl.NumberFormat(void 0, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OrderSummary",
  __ssrInlineRender: true,
  setup(__props) {
    usePage();
    const cart = computed(() => usePage().props.cart);
    const handleApplyPromoCode = (code) => {
      router.post(route("cart.promo.apply"), {
        code
      }, {
        preserveScroll: true,
        preserveState: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Separator = resolveComponent("Separator");
      _push(ssrRenderComponent(unref(_sfc_main$8), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$9), { class: "pb-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$a), { class: "text-xl font-bold" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.$t("cart.order_summary.title"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.$t("cart.order_summary.title")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$a), { class: "text-xl font-bold" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("cart.order_summary.title")), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$b), { class: "space-y-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4"${_scopeId2}><div class="flex justify-between text-sm"${_scopeId2}><span class="text-muted-foreground"${_scopeId2}>${ssrInterpolate(_ctx.$t("cart.order_summary.subtotal"))}</span><span class="font-medium"${_scopeId2}>${ssrInterpolate(unref(formatPrice)(cart.value.subtotal, cart.value.currency))}</span></div><!--[-->`);
                  ssrRenderList(cart.value.conditions, (condition) => {
                    _push3(`<div class="flex justify-between text-sm"${_scopeId2}>`);
                    if (condition.type === "promo") {
                      _push3(`<div class="flex justify-between w-full"${_scopeId2}><div${_scopeId2}><span class="text-green-600"${_scopeId2}>${ssrInterpolate(condition.name)} <span class="text-sm text-green-500"${_scopeId2}> (${ssrInterpolate(condition.value.includes("%") ? condition.value : unref(formatPrice)(Math.abs(Number(condition.value)), cart.value.currency))}) </span></span></div><div class="flex items-center gap-2"${_scopeId2}><span class="font-medium text-green-600"${_scopeId2}> -${ssrInterpolate(unref(formatPrice)(condition.calculatedValue, cart.value.currency))}</span>`);
                      _push3(ssrRenderComponent(unref(_sfc_main$5), {
                        variant: "ghost",
                        size: "icon",
                        class: "h-6 w-6",
                        onClick: ($event) => unref(router).delete(_ctx.route("cart.promo.remove"), {
                          preserveScroll: true,
                          preserveState: true
                        })
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(unref(X), { class: "h-4 w-4" })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else if (condition.type === "shipping") {
                      _push3(`<!--[--><span class="text-gray-600"${_scopeId2}>${ssrInterpolate(_ctx.$t("cart.order_summary.shipping"))}</span><span class="font-medium"${_scopeId2}>${ssrInterpolate(unref(formatPrice)(condition.calculatedValue, cart.value.currency))}</span><!--]-->`);
                    } else if (condition.type === "tax") {
                      _push3(`<!--[--><span class="text-gray-600"${_scopeId2}>${ssrInterpolate(_ctx.$t("cart.order_summary.tax"))}</span><span class="font-medium"${_scopeId2}>${ssrInterpolate(unref(formatPrice)(condition.calculatedValue, cart.value.currency))}</span><!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div>`);
                  _push3(ssrRenderComponent(_component_Separator, { class: "bg-gray-200" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3), {
                    currency: cart.value.currency,
                    onApply: handleApplyPromoCode
                  }, null, _parent3, _scopeId2));
                  if (_ctx.discount) {
                    _push3(`<div class="flex justify-between text-sm text-green-600"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(_ctx.$t("cart.order_summary.discount"))}</span><span${_scopeId2}>-${ssrInterpolate(unref(formatPrice)(_ctx.discount, cart.value.currency))}</span></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_Separator, { class: "bg-gray-200" }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex justify-between items-center"${_scopeId2}><span class="text-lg font-semibold"${_scopeId2}>${ssrInterpolate(_ctx.$t("cart.order_summary.total"))}</span><span class="text-3xl font-bold"${_scopeId2}>${ssrInterpolate(unref(formatPrice)(cart.value.total, cart.value.currency))}</span></div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$5), {
                    "as-child": "",
                    class: "w-full h-14 text-lg font-medium",
                    size: "lg"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Link), {
                          href: _ctx.route("cart.checkout")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.$t("cart.order_summary.checkout"))} `);
                              _push5(ssrRenderComponent(unref(ArrowRight), { class: "ml-2 w-5 h-5" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.$t("cart.order_summary.checkout")) + " ", 1),
                                createVNode(unref(ArrowRight), { class: "ml-2 w-5 h-5" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Link), {
                            href: _ctx.route("cart.checkout")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("cart.order_summary.checkout")) + " ", 1),
                              createVNode(unref(ArrowRight), { class: "ml-2 w-5 h-5" })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center justify-center gap-4 pt-4 text-gray-500"${_scopeId2}><img${ssrRenderAttr("src", unref(visa))} alt="Visa" class="h-6"${_scopeId2}><img${ssrRenderAttr("src", unref(mastercard))} alt="Mastercard" class="h-6"${_scopeId2}><img${ssrRenderAttr("src", unref(amex))} alt="American Express" class="h-6"${_scopeId2}><img${ssrRenderAttr("src", unref(paypal))} alt="Paypal" class="h-8"${_scopeId2}><img${ssrRenderAttr("src", unref(promptpay))} alt="Promptpay" class="h-10"${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "flex justify-between text-sm" }, [
                        createVNode("span", { class: "text-muted-foreground" }, toDisplayString(_ctx.$t("cart.order_summary.subtotal")), 1),
                        createVNode("span", { class: "font-medium" }, toDisplayString(unref(formatPrice)(cart.value.subtotal, cart.value.currency)), 1)
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(cart.value.conditions, (condition) => {
                        return openBlock(), createBlock("div", {
                          key: condition.name,
                          class: "flex justify-between text-sm"
                        }, [
                          condition.type === "promo" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex justify-between w-full"
                          }, [
                            createVNode("div", null, [
                              createVNode("span", { class: "text-green-600" }, [
                                createTextVNode(toDisplayString(condition.name) + " ", 1),
                                createVNode("span", { class: "text-sm text-green-500" }, " (" + toDisplayString(condition.value.includes("%") ? condition.value : unref(formatPrice)(Math.abs(Number(condition.value)), cart.value.currency)) + ") ", 1)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("span", { class: "font-medium text-green-600" }, " -" + toDisplayString(unref(formatPrice)(condition.calculatedValue, cart.value.currency)), 1),
                              createVNode(unref(_sfc_main$5), {
                                variant: "ghost",
                                size: "icon",
                                class: "h-6 w-6",
                                onClick: ($event) => unref(router).delete(_ctx.route("cart.promo.remove"), {
                                  preserveScroll: true,
                                  preserveState: true
                                })
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(X), { class: "h-4 w-4" })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ])) : condition.type === "shipping" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode("span", { class: "text-gray-600" }, toDisplayString(_ctx.$t("cart.order_summary.shipping")), 1),
                            createVNode("span", { class: "font-medium" }, toDisplayString(unref(formatPrice)(condition.calculatedValue, cart.value.currency)), 1)
                          ], 64)) : condition.type === "tax" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                            createVNode("span", { class: "text-gray-600" }, toDisplayString(_ctx.$t("cart.order_summary.tax")), 1),
                            createVNode("span", { class: "font-medium" }, toDisplayString(unref(formatPrice)(condition.calculatedValue, cart.value.currency)), 1)
                          ], 64)) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ]),
                    createVNode(_component_Separator, { class: "bg-gray-200" }),
                    createVNode(unref(_sfc_main$3), {
                      currency: cart.value.currency,
                      onApply: handleApplyPromoCode
                    }, null, 8, ["currency"]),
                    _ctx.discount ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex justify-between text-sm text-green-600"
                    }, [
                      createVNode("span", null, toDisplayString(_ctx.$t("cart.order_summary.discount")), 1),
                      createVNode("span", null, "-" + toDisplayString(unref(formatPrice)(_ctx.discount, cart.value.currency)), 1)
                    ])) : createCommentVNode("", true),
                    createVNode(_component_Separator, { class: "bg-gray-200" }),
                    createVNode("div", { class: "flex justify-between items-center" }, [
                      createVNode("span", { class: "text-lg font-semibold" }, toDisplayString(_ctx.$t("cart.order_summary.total")), 1),
                      createVNode("span", { class: "text-3xl font-bold" }, toDisplayString(unref(formatPrice)(cart.value.total, cart.value.currency)), 1)
                    ]),
                    createVNode(unref(_sfc_main$5), {
                      "as-child": "",
                      class: "w-full h-14 text-lg font-medium",
                      size: "lg"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Link), {
                          href: _ctx.route("cart.checkout")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("cart.order_summary.checkout")) + " ", 1),
                            createVNode(unref(ArrowRight), { class: "ml-2 w-5 h-5" })
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center justify-center gap-4 pt-4 text-gray-500" }, [
                      createVNode("img", {
                        src: unref(visa),
                        alt: "Visa",
                        class: "h-6"
                      }, null, 8, ["src"]),
                      createVNode("img", {
                        src: unref(mastercard),
                        alt: "Mastercard",
                        class: "h-6"
                      }, null, 8, ["src"]),
                      createVNode("img", {
                        src: unref(amex),
                        alt: "American Express",
                        class: "h-6"
                      }, null, 8, ["src"]),
                      createVNode("img", {
                        src: unref(paypal),
                        alt: "Paypal",
                        class: "h-8"
                      }, null, 8, ["src"]),
                      createVNode("img", {
                        src: unref(promptpay),
                        alt: "Promptpay",
                        class: "h-10"
                      }, null, 8, ["src"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$9), { class: "pb-4" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$a), { class: "text-xl font-bold" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("cart.order_summary.title")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$b), { class: "space-y-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "flex justify-between text-sm" }, [
                      createVNode("span", { class: "text-muted-foreground" }, toDisplayString(_ctx.$t("cart.order_summary.subtotal")), 1),
                      createVNode("span", { class: "font-medium" }, toDisplayString(unref(formatPrice)(cart.value.subtotal, cart.value.currency)), 1)
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(cart.value.conditions, (condition) => {
                      return openBlock(), createBlock("div", {
                        key: condition.name,
                        class: "flex justify-between text-sm"
                      }, [
                        condition.type === "promo" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex justify-between w-full"
                        }, [
                          createVNode("div", null, [
                            createVNode("span", { class: "text-green-600" }, [
                              createTextVNode(toDisplayString(condition.name) + " ", 1),
                              createVNode("span", { class: "text-sm text-green-500" }, " (" + toDisplayString(condition.value.includes("%") ? condition.value : unref(formatPrice)(Math.abs(Number(condition.value)), cart.value.currency)) + ") ", 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("span", { class: "font-medium text-green-600" }, " -" + toDisplayString(unref(formatPrice)(condition.calculatedValue, cart.value.currency)), 1),
                            createVNode(unref(_sfc_main$5), {
                              variant: "ghost",
                              size: "icon",
                              class: "h-6 w-6",
                              onClick: ($event) => unref(router).delete(_ctx.route("cart.promo.remove"), {
                                preserveScroll: true,
                                preserveState: true
                              })
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(X), { class: "h-4 w-4" })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ])) : condition.type === "shipping" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createVNode("span", { class: "text-gray-600" }, toDisplayString(_ctx.$t("cart.order_summary.shipping")), 1),
                          createVNode("span", { class: "font-medium" }, toDisplayString(unref(formatPrice)(condition.calculatedValue, cart.value.currency)), 1)
                        ], 64)) : condition.type === "tax" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                          createVNode("span", { class: "text-gray-600" }, toDisplayString(_ctx.$t("cart.order_summary.tax")), 1),
                          createVNode("span", { class: "font-medium" }, toDisplayString(unref(formatPrice)(condition.calculatedValue, cart.value.currency)), 1)
                        ], 64)) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ]),
                  createVNode(_component_Separator, { class: "bg-gray-200" }),
                  createVNode(unref(_sfc_main$3), {
                    currency: cart.value.currency,
                    onApply: handleApplyPromoCode
                  }, null, 8, ["currency"]),
                  _ctx.discount ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex justify-between text-sm text-green-600"
                  }, [
                    createVNode("span", null, toDisplayString(_ctx.$t("cart.order_summary.discount")), 1),
                    createVNode("span", null, "-" + toDisplayString(unref(formatPrice)(_ctx.discount, cart.value.currency)), 1)
                  ])) : createCommentVNode("", true),
                  createVNode(_component_Separator, { class: "bg-gray-200" }),
                  createVNode("div", { class: "flex justify-between items-center" }, [
                    createVNode("span", { class: "text-lg font-semibold" }, toDisplayString(_ctx.$t("cart.order_summary.total")), 1),
                    createVNode("span", { class: "text-3xl font-bold" }, toDisplayString(unref(formatPrice)(cart.value.total, cart.value.currency)), 1)
                  ]),
                  createVNode(unref(_sfc_main$5), {
                    "as-child": "",
                    class: "w-full h-14 text-lg font-medium",
                    size: "lg"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Link), {
                        href: _ctx.route("cart.checkout")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("cart.order_summary.checkout")) + " ", 1),
                          createVNode(unref(ArrowRight), { class: "ml-2 w-5 h-5" })
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex items-center justify-center gap-4 pt-4 text-gray-500" }, [
                    createVNode("img", {
                      src: unref(visa),
                      alt: "Visa",
                      class: "h-6"
                    }, null, 8, ["src"]),
                    createVNode("img", {
                      src: unref(mastercard),
                      alt: "Mastercard",
                      class: "h-6"
                    }, null, 8, ["src"]),
                    createVNode("img", {
                      src: unref(amex),
                      alt: "American Express",
                      class: "h-6"
                    }, null, 8, ["src"]),
                    createVNode("img", {
                      src: unref(paypal),
                      alt: "Paypal",
                      class: "h-8"
                    }, null, 8, ["src"]),
                    createVNode("img", {
                      src: unref(promptpay),
                      alt: "Promptpay",
                      class: "h-10"
                    }, null, 8, ["src"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/cart/OrderSummary.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CartItem",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = computed(() => usePage().props.cart);
    const updateQuantity = (itemId, change) => {
      const item = cart.value.items[itemId];
      if (item) {
        const newQuantity = item.quantity + change;
        if (newQuantity > 0) {
          router.patch(route("cart.updateQuantity", itemId), {
            quantity: newQuantity
          }, {
            preserveScroll: true,
            preserveState: true
          });
        }
      }
    };
    const removeItem = (itemId) => {
      router.delete(route("cart.remove", itemId), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(cart.value.items, (item) => {
        _push(ssrRenderComponent(unref(_sfc_main$8), {
          key: item.id,
          class: "overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$b), { class: "p-6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex gap-6"${_scopeId2}><div class="relative w-32 h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden bg-gray-100"${_scopeId2}><img src="https://placehold.co/400x400"${ssrRenderAttr("alt", item.name)} class="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"${_scopeId2}><div class="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"${_scopeId2}></div></div><div class="flex-1 flex flex-col justify-between"${_scopeId2}><div${_scopeId2}><div class="flex justify-between items-start"${_scopeId2}><div${_scopeId2}><p class="text-sm text-gray-500 mb-1"${_scopeId2}>${ssrInterpolate(item.category)}</p><h3 class="text-xl font-semibold text-gray-900"${_scopeId2}>${ssrInterpolate(item.name)}</h3><p class="text-sm text-gray-500 mt-1"${_scopeId2}>dsfdsfdsfsdfds</p></div><p class="text-2xl font-bold"${_scopeId2}>${ssrInterpolate(unref(formatPrice)(item.attributes.display_price, cart.value.currency))}</p></div></div><div class="flex items-center justify-between mt-6"${_scopeId2}><div class="flex items-center space-x-4 bg-white shadow-sm rounded-lg p-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      variant: "ghost",
                      size: "icon",
                      class: "h-8 w-8 hover:bg-gray-100",
                      onClick: ($event) => updateQuantity(item.id, -1)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Minus), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Minus), { class: "w-4 h-4" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<span class="w-12 text-center font-medium text-lg"${_scopeId2}>${ssrInterpolate(item.quantity)}</span>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      variant: "ghost",
                      size: "icon",
                      class: "h-8 w-8 hover:bg-gray-100",
                      onClick: ($event) => updateQuantity(item.id, 1)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Plus), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Plus), { class: "w-4 h-4" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$5), {
                      variant: "ghost",
                      size: "icon",
                      class: "text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors duration-300",
                      onClick: ($event) => removeItem(item.id)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Trash2), { class: "w-5 h-5" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Trash2), { class: "w-5 h-5" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex gap-6" }, [
                        createVNode("div", { class: "relative w-32 h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden bg-gray-100" }, [
                          createVNode("img", {
                            src: "https://placehold.co/400x400",
                            alt: item.name,
                            class: "object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                          }, null, 8, ["alt"]),
                          createVNode("div", { class: "absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" })
                        ]),
                        createVNode("div", { class: "flex-1 flex flex-col justify-between" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex justify-between items-start" }, [
                              createVNode("div", null, [
                                createVNode("p", { class: "text-sm text-gray-500 mb-1" }, toDisplayString(item.category), 1),
                                createVNode("h3", { class: "text-xl font-semibold text-gray-900" }, toDisplayString(item.name), 1),
                                createVNode("p", { class: "text-sm text-gray-500 mt-1" }, "dsfdsfdsfsdfds")
                              ]),
                              createVNode("p", { class: "text-2xl font-bold" }, toDisplayString(unref(formatPrice)(item.attributes.display_price, cart.value.currency)), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center justify-between mt-6" }, [
                            createVNode("div", { class: "flex items-center space-x-4 bg-white shadow-sm rounded-lg p-1" }, [
                              createVNode(unref(_sfc_main$5), {
                                variant: "ghost",
                                size: "icon",
                                class: "h-8 w-8 hover:bg-gray-100",
                                onClick: ($event) => updateQuantity(item.id, -1)
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Minus), { class: "w-4 h-4" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode("span", { class: "w-12 text-center font-medium text-lg" }, toDisplayString(item.quantity), 1),
                              createVNode(unref(_sfc_main$5), {
                                variant: "ghost",
                                size: "icon",
                                class: "h-8 w-8 hover:bg-gray-100",
                                onClick: ($event) => updateQuantity(item.id, 1)
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Plus), { class: "w-4 h-4" })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            createVNode(unref(_sfc_main$5), {
                              variant: "ghost",
                              size: "icon",
                              class: "text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors duration-300",
                              onClick: ($event) => removeItem(item.id)
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Trash2), { class: "w-5 h-5" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$b), { class: "p-6" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex gap-6" }, [
                      createVNode("div", { class: "relative w-32 h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden bg-gray-100" }, [
                        createVNode("img", {
                          src: "https://placehold.co/400x400",
                          alt: item.name,
                          class: "object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                        }, null, 8, ["alt"]),
                        createVNode("div", { class: "absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" })
                      ]),
                      createVNode("div", { class: "flex-1 flex flex-col justify-between" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "flex justify-between items-start" }, [
                            createVNode("div", null, [
                              createVNode("p", { class: "text-sm text-gray-500 mb-1" }, toDisplayString(item.category), 1),
                              createVNode("h3", { class: "text-xl font-semibold text-gray-900" }, toDisplayString(item.name), 1),
                              createVNode("p", { class: "text-sm text-gray-500 mt-1" }, "dsfdsfdsfsdfds")
                            ]),
                            createVNode("p", { class: "text-2xl font-bold" }, toDisplayString(unref(formatPrice)(item.attributes.display_price, cart.value.currency)), 1)
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center justify-between mt-6" }, [
                          createVNode("div", { class: "flex items-center space-x-4 bg-white shadow-sm rounded-lg p-1" }, [
                            createVNode(unref(_sfc_main$5), {
                              variant: "ghost",
                              size: "icon",
                              class: "h-8 w-8 hover:bg-gray-100",
                              onClick: ($event) => updateQuantity(item.id, -1)
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Minus), { class: "w-4 h-4" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode("span", { class: "w-12 text-center font-medium text-lg" }, toDisplayString(item.quantity), 1),
                            createVNode(unref(_sfc_main$5), {
                              variant: "ghost",
                              size: "icon",
                              class: "h-8 w-8 hover:bg-gray-100",
                              onClick: ($event) => updateQuantity(item.id, 1)
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Plus), { class: "w-4 h-4" })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          createVNode(unref(_sfc_main$5), {
                            variant: "ghost",
                            size: "icon",
                            class: "text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors duration-300",
                            onClick: ($event) => removeItem(item.id)
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Trash2), { class: "w-5 h-5" })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/cart/CartItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TrustFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const trustFeatures = [
      {
        icon: ShieldCheck,
        title: wTrans("cart.trust_features.secure_payment.title"),
        description: wTrans("cart.trust_features.secure_payment.description")
      },
      {
        icon: Truck,
        title: wTrans("cart.trust_features.express_delivery.title"),
        description: wTrans("cart.trust_features.express_delivery.description")
      },
      {
        icon: ArrowLeftRight,
        title: wTrans("cart.trust_features.free_returns.title"),
        description: wTrans("cart.trust_features.free_returns.description")
      },
      {
        icon: HeartHandshake,
        title: wTrans("cart.trust_features.customer_service.title"),
        description: wTrans("cart.trust_features.customer_service.description")
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-12" }, _attrs))}><!--[-->`);
      ssrRenderList(trustFeatures, (feature) => {
        _push(ssrRenderComponent(unref(_sfc_main$8), {
          key: feature.title
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(_sfc_main$b), { class: "p-6 flex items-start space-x-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(feature.icon), { class: "w-8 h-8 text-muted-foreground shrink-0" }, null), _parent3, _scopeId2);
                    _push3(`<div${_scopeId2}><h3 class="font-semibold text-foreground"${_scopeId2}>${ssrInterpolate(feature.title)}</h3><p class="text-sm text-muted-foreground mt-1"${_scopeId2}>${ssrInterpolate(feature.description)}</p></div>`);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(feature.icon), { class: "w-8 h-8 text-muted-foreground shrink-0" })),
                      createVNode("div", null, [
                        createVNode("h3", { class: "font-semibold text-foreground" }, toDisplayString(feature.title), 1),
                        createVNode("p", { class: "text-sm text-muted-foreground mt-1" }, toDisplayString(feature.description), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(_sfc_main$b), { class: "p-6 flex items-start space-x-4" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(feature.icon), { class: "w-8 h-8 text-muted-foreground shrink-0" })),
                    createVNode("div", null, [
                      createVNode("h3", { class: "font-semibold text-foreground" }, toDisplayString(feature.title), 1),
                      createVNode("p", { class: "text-sm text-muted-foreground mt-1" }, toDisplayString(feature.description), 1)
                    ])
                  ]),
                  _: 2
                }, 1024)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/cart/TrustFeatures.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$2 as _,
  _sfc_main$1 as a,
  _sfc_main as b
};

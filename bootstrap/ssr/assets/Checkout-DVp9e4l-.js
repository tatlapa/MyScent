import { defineComponent, computed, unref, mergeProps, withCtx, renderSlot, useSSRContext, createVNode, createTextVNode, ref, toDisplayString, openBlock, createBlock, watch, Fragment, renderList, withDirectives, vModelCheckbox, createCommentVNode, onMounted, onBeforeUnmount, withModifiers, vShow } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { c as cn, a as _sfc_main$p, g as _sfc_main$q, _ as _sfc_main$r, b as _sfc_main$s, h as _sfc_main$t, i as _sfc_main$u, j as _sfc_main$v, k as _sfc_main$w, l as _sfc_main$x, f as _sfc_main$y } from "./index-DBcC5thU.js";
import { useForm, Link, usePage, Head, router } from "@inertiajs/vue3";
import { MoveLeft } from "lucide-vue-next";
import { _ as _sfc_main$z } from "./TrustFeatures-67q0ByD3.js";
import { _ as _sfc_main$o } from "./Label-Bg3AjaYj.js";
import { useForwardPropsEmits, RadioGroupRoot, useForwardProps, RadioGroupItem, RadioGroupIndicator, TabsRoot, TabsContent, TabsList, TabsTrigger, DialogRoot, DialogClose, DialogPortal, DialogOverlay, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "radix-vue";
import { CheckIcon, Cross2Icon } from "@radix-icons/vue";
import { getCountries, getCountryCallingCode, AsYouType, parsePhoneNumber } from "libphonenumber-js";
import "class-variance-authority";
import "laravel-vue-i18n";
import "pinia";
import "@vueuse/core";
import "clsx";
import "tailwind-merge";
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "RadioGroup",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RadioGroupRoot), mergeProps({
        class: unref(cn)("grid gap-2", props.class)
      }, unref(forwarded), _attrs), {
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
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/radio-group/RadioGroup.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "RadioGroupItem",
  __ssrInlineRender: true,
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RadioGroupItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RadioGroupIndicator), { class: "flex items-center justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckIcon), { class: "h-3.5 w-3.5 fill-primary" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CheckIcon), { class: "h-3.5 w-3.5 fill-primary" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(RadioGroupIndicator), { class: "flex items-center justify-center" }, {
                default: withCtx(() => [
                  createVNode(unref(CheckIcon), { class: "h-3.5 w-3.5 fill-primary" })
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
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/radio-group/RadioGroupItem.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$o), { for: "email" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Email`);
          } else {
            return [
              createTextVNode("Email")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$p), {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        type: "email",
        id: "email",
        placeholder: "john@example.com"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$q), {
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$o), { for: "password" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Password`);
          } else {
            return [
              createTextVNode("Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$p), {
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        id: "password"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$q), {
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-between"><div class="flex items-center gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).remember) ? ssrLooseContain(unref(form).remember, null) : unref(form).remember) ? " checked" : ""} type="checkbox" id="remember" class="rounded border-gray-300">`);
      _push(ssrRenderComponent(unref(_sfc_main$o), {
        for: "remember",
        class: "text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Remember me`);
          } else {
            return [
              createTextVNode("Remember me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><a href="#" class="text-sm text-primary hover:underline"> Forgot password? </a></div>`);
      _push(ssrRenderComponent(unref(_sfc_main$r), {
        type: "submit",
        disabled: unref(form).processing,
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign in`);
          } else {
            return [
              createTextVNode("Sign in")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/checkout/auth/Login.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_confirmation: "",
      remember: false
    });
    const agreeTerms = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div class="grid grid-cols-2 gap-4"><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$o), { for: "firstName" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`First name`);
          } else {
            return [
              createTextVNode("First name")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$p), {
        modelValue: unref(form).firstname,
        "onUpdate:modelValue": ($event) => unref(form).firstname = $event,
        type: "text",
        id: "firstName"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$q), {
        message: unref(form).errors.firstname
      }, null, _parent));
      _push(`</div><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$o), { for: "lastName" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Last name`);
          } else {
            return [
              createTextVNode("Last name")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$p), {
        modelValue: unref(form).lastname,
        "onUpdate:modelValue": ($event) => unref(form).lastname = $event,
        type: "text",
        id: "lastName"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$q), {
        message: unref(form).errors.lastname
      }, null, _parent));
      _push(`</div></div><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$o), { for: "email" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Email`);
          } else {
            return [
              createTextVNode("Email")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$p), {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        type: "email",
        id: "email",
        placeholder: "john@example.com"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$q), {
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$o), { for: "password" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Password`);
          } else {
            return [
              createTextVNode("Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$p), {
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        id: "password"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$q), {
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="space-y-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$o), { for: "confirmPassword" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Confirm password`);
          } else {
            return [
              createTextVNode("Confirm password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$p), {
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        type: "password",
        id: "confirmPassword"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$q), {
        message: unref(form).errors.password_confirmation
      }, null, _parent));
      _push(`</div><div class="flex items-start gap-2"><input${ssrIncludeBooleanAttr(Array.isArray(agreeTerms.value) ? ssrLooseContain(agreeTerms.value, null) : agreeTerms.value) ? " checked" : ""} type="checkbox" id="terms" class="mt-1 rounded border-gray-300">`);
      _push(ssrRenderComponent(unref(_sfc_main$o), {
        for: "terms",
        class: "text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I agree to the <a href="#" class="text-primary hover:underline"${_scopeId}>Terms of Service</a> and <a href="#" class="text-primary hover:underline"${_scopeId}>Privacy Policy</a>`);
          } else {
            return [
              createTextVNode(" I agree to the "),
              createVNode("a", {
                href: "#",
                class: "text-primary hover:underline"
              }, "Terms of Service"),
              createTextVNode(" and "),
              createVNode("a", {
                href: "#",
                class: "text-primary hover:underline"
              }, "Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(_sfc_main$r), {
        type: "submit",
        disabled: !agreeTerms.value || unref(form).processing,
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Create account`);
          } else {
            return [
              createTextVNode("Create account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/checkout/auth/Register.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tabs/Tabs.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "TabsContent",
  __ssrInlineRender: true,
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsContent), mergeProps({
        class: unref(cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", props.class)
      }, delegatedProps.value, _attrs), {
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tabs/TabsContent.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "TabsList",
  __ssrInlineRender: true,
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsList), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
          props.class
        )
      }, _attrs), {
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
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tabs/TabsList.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "TabsTrigger",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="truncate"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "truncate" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/tabs/TabsTrigger.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Auth",
  __ssrInlineRender: true,
  props: {
    currentStep: {},
    loading: { type: Boolean, default: false },
    error: { default: null }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: _ctx.currentStep === 1 ? null : { display: "none" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$s), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$t), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$u), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Connexion ou création de compte`);
                      } else {
                        return [
                          createTextVNode("Connexion ou création de compte")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$v), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Connectez-vous à votre compte ou créez-en un nouveau pour continuer `);
                      } else {
                        return [
                          createTextVNode(" Connectez-vous à votre compte ou créez-en un nouveau pour continuer ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$u), null, {
                      default: withCtx(() => [
                        createTextVNode("Connexion ou création de compte")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$v), null, {
                      default: withCtx(() => [
                        createTextVNode(" Connectez-vous à votre compte ou créez-en un nouveau pour continuer ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (!_ctx.$page.props.auth.user) {
              _push2(ssrRenderComponent(unref(_sfc_main$w), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$j), { defaultValue: "login" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$h), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$g), { value: "login" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Connexion`);
                                    } else {
                                      return [
                                        createTextVNode("Connexion")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(_sfc_main$g), { value: "register" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Création de compte`);
                                    } else {
                                      return [
                                        createTextVNode("Création de compte")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$g), { value: "login" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Connexion")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(_sfc_main$g), { value: "register" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Création de compte")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$i), {
                            value: "login",
                            class: "mt-6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$l), null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$l))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(_sfc_main$i), {
                            value: "register",
                            class: "mt-6"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$k), null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$k))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$h), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$g), { value: "login" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Connexion")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$g), { value: "register" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Création de compte")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$i), {
                              value: "login",
                              class: "mt-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$l))
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$i), {
                              value: "register",
                              class: "mt-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$k))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$j), { defaultValue: "login" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$h), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$g), { value: "login" }, {
                                default: withCtx(() => [
                                  createTextVNode("Connexion")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$g), { value: "register" }, {
                                default: withCtx(() => [
                                  createTextVNode("Création de compte")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$i), {
                            value: "login",
                            class: "mt-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$l))
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$i), {
                            value: "register",
                            class: "mt-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$k))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(_sfc_main$w), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$v), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center"${_scopeId3}><p${_scopeId3}>Vous etes actuellement connecte en tant que <b${_scopeId3}>${ssrInterpolate(_ctx.$page.props.auth.user.firstname)} ${ssrInterpolate(_ctx.$page.props.auth.user.lastname)}</b>.</p>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$r), {
                            "as-child": "",
                            variant: "link",
                            size: "sm",
                            class: "ml-2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(Link), {
                                  href: _ctx.route("logout"),
                                  method: "post"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Se déconnecter `);
                                    } else {
                                      return [
                                        createTextVNode(" Se déconnecter ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("logout"),
                                    method: "post"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Se déconnecter ")
                                    ]),
                                    _: 1
                                  }, 8, ["href"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode("p", null, [
                                createTextVNode("Vous etes actuellement connecte en tant que "),
                                createVNode("b", null, toDisplayString(_ctx.$page.props.auth.user.firstname) + " " + toDisplayString(_ctx.$page.props.auth.user.lastname), 1),
                                createTextVNode(".")
                              ]),
                              createVNode(unref(_sfc_main$r), {
                                "as-child": "",
                                variant: "link",
                                size: "sm",
                                class: "ml-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Link), {
                                    href: _ctx.route("logout"),
                                    method: "post"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Se déconnecter ")
                                    ]),
                                    _: 1
                                  }, 8, ["href"])
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$v), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("p", null, [
                              createTextVNode("Vous etes actuellement connecte en tant que "),
                              createVNode("b", null, toDisplayString(_ctx.$page.props.auth.user.firstname) + " " + toDisplayString(_ctx.$page.props.auth.user.lastname), 1),
                              createTextVNode(".")
                            ]),
                            createVNode(unref(_sfc_main$r), {
                              "as-child": "",
                              variant: "link",
                              size: "sm",
                              class: "ml-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Link), {
                                  href: _ctx.route("logout"),
                                  method: "post"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Se déconnecter ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              createVNode(unref(_sfc_main$t), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$u), null, {
                    default: withCtx(() => [
                      createTextVNode("Connexion ou création de compte")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$v), null, {
                    default: withCtx(() => [
                      createTextVNode(" Connectez-vous à votre compte ou créez-en un nouveau pour continuer ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              !_ctx.$page.props.auth.user ? (openBlock(), createBlock(unref(_sfc_main$w), { key: 0 }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$j), { defaultValue: "login" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$h), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$g), { value: "login" }, {
                            default: withCtx(() => [
                              createTextVNode("Connexion")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$g), { value: "register" }, {
                            default: withCtx(() => [
                              createTextVNode("Création de compte")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$i), {
                        value: "login",
                        class: "mt-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$l))
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$i), {
                        value: "register",
                        class: "mt-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$k))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : (openBlock(), createBlock(unref(_sfc_main$w), { key: 1 }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$v), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("p", null, [
                          createTextVNode("Vous etes actuellement connecte en tant que "),
                          createVNode("b", null, toDisplayString(_ctx.$page.props.auth.user.firstname) + " " + toDisplayString(_ctx.$page.props.auth.user.lastname), 1),
                          createTextVNode(".")
                        ]),
                        createVNode(unref(_sfc_main$r), {
                          "as-child": "",
                          variant: "link",
                          size: "sm",
                          class: "ml-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Link), {
                              href: _ctx.route("logout"),
                              method: "post"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Se déconnecter ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/checkout/Auth.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Shipping",
  __ssrInlineRender: true,
  props: {
    currentStep: {},
    loading: { type: Boolean, default: false },
    error: { default: null },
    savedAddresses: {},
    selectedAddress: { default: null },
    billingAddress: { default: null }
  },
  emits: ["update:selectedAddress"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const useShippingAsBilling = ref(false);
    const showAddressModal = ref(false);
    watch(useShippingAsBilling, (newValue) => {
      if (newValue && props.billingAddress) {
        emit("update:selectedAddress", props.billingAddress);
      } else {
        emit("update:selectedAddress", null);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: _ctx.currentStep === 3 ? null : { display: "none" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$s), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$t), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$u), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Adresse de livraison`);
                      } else {
                        return [
                          createTextVNode("Adresse de livraison")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$u), null, {
                      default: withCtx(() => [
                        createTextVNode("Adresse de livraison")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$w), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4"${_scopeId2}><div class="flex items-center space-x-2"${_scopeId2}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(useShippingAsBilling.value) ? ssrLooseContain(useShippingAsBilling.value, null) : useShippingAsBilling.value) ? " checked" : ""} class="rounded border-gray-300"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$o), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Utiliser l&#39;adresse de facturation`);
                      } else {
                        return [
                          createTextVNode("Utiliser l'adresse de facturation")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (!useShippingAsBilling.value) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(_sfc_main$n), {
                      "model-value": _ctx.selectedAddress,
                      "onUpdate:modelValue": (address) => emit("update:selectedAddress", address)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="space-y-4"${_scopeId3}><!--[-->`);
                          ssrRenderList(_ctx.savedAddresses, (address) => {
                            _push4(`<div class="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$m), { value: address }, null, _parent4, _scopeId3));
                            _push4(`<div${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$o), { class: "font-medium" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(address.street)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(address.street), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<p class="text-sm text-gray-500"${_scopeId3}>${ssrInterpolate(address.city)}, ${ssrInterpolate(address.postal_code)} <br${_scopeId3}> ${ssrInterpolate(address.state)} ${ssrInterpolate(address.country)}</p></div></div>`);
                          });
                          _push4(`<!--]--><div class="pt-4"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$r), {
                            variant: "outline",
                            onClick: ($event) => showAddressModal.value = true
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` + Ajouter une nouvelle adresse `);
                              } else {
                                return [
                                  createTextVNode(" + Ajouter une nouvelle adresse ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "space-y-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.savedAddresses, (address) => {
                                return openBlock(), createBlock("div", {
                                  key: address.id,
                                  class: "flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50"
                                }, [
                                  createVNode(unref(_sfc_main$m), { value: address }, null, 8, ["value"]),
                                  createVNode("div", null, [
                                    createVNode(unref(_sfc_main$o), { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(address.street), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("p", { class: "text-sm text-gray-500" }, [
                                      createTextVNode(toDisplayString(address.city) + ", " + toDisplayString(address.postal_code) + " ", 1),
                                      createVNode("br"),
                                      createTextVNode(" " + toDisplayString(address.state) + " " + toDisplayString(address.country), 1)
                                    ])
                                  ])
                                ]);
                              }), 128)),
                              createVNode("div", { class: "pt-4" }, [
                                createVNode(unref(_sfc_main$r), {
                                  variant: "outline",
                                  onClick: ($event) => showAddressModal.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" + Ajouter une nouvelle adresse ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    open: showAddressModal.value,
                    "onUpdate:open": ($event) => showAddressModal.value = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        withDirectives(createVNode("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": ($event) => useShippingAsBilling.value = $event,
                          class: "rounded border-gray-300"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelCheckbox, useShippingAsBilling.value]
                        ]),
                        createVNode(unref(_sfc_main$o), null, {
                          default: withCtx(() => [
                            createTextVNode("Utiliser l'adresse de facturation")
                          ]),
                          _: 1
                        })
                      ]),
                      !useShippingAsBilling.value ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode(unref(_sfc_main$n), {
                          "model-value": _ctx.selectedAddress,
                          "onUpdate:modelValue": (address) => emit("update:selectedAddress", address)
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.savedAddresses, (address) => {
                                return openBlock(), createBlock("div", {
                                  key: address.id,
                                  class: "flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50"
                                }, [
                                  createVNode(unref(_sfc_main$m), { value: address }, null, 8, ["value"]),
                                  createVNode("div", null, [
                                    createVNode(unref(_sfc_main$o), { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(address.street), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("p", { class: "text-sm text-gray-500" }, [
                                      createTextVNode(toDisplayString(address.city) + ", " + toDisplayString(address.postal_code) + " ", 1),
                                      createVNode("br"),
                                      createTextVNode(" " + toDisplayString(address.state) + " " + toDisplayString(address.country), 1)
                                    ])
                                  ])
                                ]);
                              }), 128)),
                              createVNode("div", { class: "pt-4" }, [
                                createVNode(unref(_sfc_main$r), {
                                  variant: "outline",
                                  onClick: ($event) => showAddressModal.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" + Ajouter une nouvelle adresse ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["model-value", "onUpdate:modelValue"])
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode(unref(_sfc_main$1), {
                      open: showAddressModal.value,
                      "onUpdate:open": ($event) => showAddressModal.value = $event
                    }, null, 8, ["open", "onUpdate:open"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$t), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$u), null, {
                    default: withCtx(() => [
                      createTextVNode("Adresse de livraison")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$w), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "flex items-center space-x-2" }, [
                      withDirectives(createVNode("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": ($event) => useShippingAsBilling.value = $event,
                        class: "rounded border-gray-300"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelCheckbox, useShippingAsBilling.value]
                      ]),
                      createVNode(unref(_sfc_main$o), null, {
                        default: withCtx(() => [
                          createTextVNode("Utiliser l'adresse de facturation")
                        ]),
                        _: 1
                      })
                    ]),
                    !useShippingAsBilling.value ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(unref(_sfc_main$n), {
                        "model-value": _ctx.selectedAddress,
                        "onUpdate:modelValue": (address) => emit("update:selectedAddress", address)
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.savedAddresses, (address) => {
                              return openBlock(), createBlock("div", {
                                key: address.id,
                                class: "flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50"
                              }, [
                                createVNode(unref(_sfc_main$m), { value: address }, null, 8, ["value"]),
                                createVNode("div", null, [
                                  createVNode(unref(_sfc_main$o), { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(address.street), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("p", { class: "text-sm text-gray-500" }, [
                                    createTextVNode(toDisplayString(address.city) + ", " + toDisplayString(address.postal_code) + " ", 1),
                                    createVNode("br"),
                                    createTextVNode(" " + toDisplayString(address.state) + " " + toDisplayString(address.country), 1)
                                  ])
                                ])
                              ]);
                            }), 128)),
                            createVNode("div", { class: "pt-4" }, [
                              createVNode(unref(_sfc_main$r), {
                                variant: "outline",
                                onClick: ($event) => showAddressModal.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" + Ajouter une nouvelle adresse ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["model-value", "onUpdate:modelValue"])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode(unref(_sfc_main$1), {
                    open: showAddressModal.value,
                    "onUpdate:open": ($event) => showAddressModal.value = $event
                  }, null, 8, ["open", "onUpdate:open"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/checkout/Shipping.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Billing",
  __ssrInlineRender: true,
  props: {
    currentStep: {},
    loading: { type: Boolean, default: false },
    error: { default: null },
    savedAddresses: {},
    selectedAddress: { default: null }
  },
  emits: ["update:selectedAddress"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const showAddressModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: _ctx.currentStep === 2 ? null : { display: "none" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$s), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$t), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$u), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Adresse de facturation`);
                      } else {
                        return [
                          createTextVNode("Adresse de facturation")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$v), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Sélectionnez une adresse existante ou ajoutez-en une nouvelle `);
                      } else {
                        return [
                          createTextVNode(" Sélectionnez une adresse existante ou ajoutez-en une nouvelle ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$u), null, {
                      default: withCtx(() => [
                        createTextVNode("Adresse de facturation")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$v), null, {
                      default: withCtx(() => [
                        createTextVNode(" Sélectionnez une adresse existante ou ajoutez-en une nouvelle ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$w), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$n), {
                    "model-value": _ctx.selectedAddress,
                    "onUpdate:modelValue": (address) => emit("update:selectedAddress", address)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(_ctx.savedAddresses, (address) => {
                          _push4(`<div class="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$m), { value: address }, null, _parent4, _scopeId3));
                          _push4(`<div${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$o), { class: "font-medium" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(address.street)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(address.street), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<p class="text-sm text-gray-500"${_scopeId3}>${ssrInterpolate(address.city)}, ${ssrInterpolate(address.postal_code)} <br${_scopeId3}> ${ssrInterpolate(address.state)} ${ssrInterpolate(address.country)}</p></div></div>`);
                        });
                        _push4(`<!--]--><div class="pt-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$r), {
                          variant: "outline",
                          onClick: ($event) => showAddressModal.value = true
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` + Ajouter une nouvelle adresse `);
                            } else {
                              return [
                                createTextVNode(" + Ajouter une nouvelle adresse ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.savedAddresses, (address) => {
                              return openBlock(), createBlock("div", {
                                key: address.id,
                                class: "flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50"
                              }, [
                                createVNode(unref(_sfc_main$m), { value: address }, null, 8, ["value"]),
                                createVNode("div", null, [
                                  createVNode(unref(_sfc_main$o), { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(address.street), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("p", { class: "text-sm text-gray-500" }, [
                                    createTextVNode(toDisplayString(address.city) + ", " + toDisplayString(address.postal_code) + " ", 1),
                                    createVNode("br"),
                                    createTextVNode(" " + toDisplayString(address.state) + " " + toDisplayString(address.country), 1)
                                  ])
                                ])
                              ]);
                            }), 128)),
                            createVNode("div", { class: "pt-4" }, [
                              createVNode(unref(_sfc_main$r), {
                                variant: "outline",
                                onClick: ($event) => showAddressModal.value = true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" + Ajouter une nouvelle adresse ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    open: showAddressModal.value,
                    "onUpdate:open": ($event) => showAddressModal.value = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$n), {
                      "model-value": _ctx.selectedAddress,
                      "onUpdate:modelValue": (address) => emit("update:selectedAddress", address)
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.savedAddresses, (address) => {
                            return openBlock(), createBlock("div", {
                              key: address.id,
                              class: "flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50"
                            }, [
                              createVNode(unref(_sfc_main$m), { value: address }, null, 8, ["value"]),
                              createVNode("div", null, [
                                createVNode(unref(_sfc_main$o), { class: "font-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(address.street), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("p", { class: "text-sm text-gray-500" }, [
                                  createTextVNode(toDisplayString(address.city) + ", " + toDisplayString(address.postal_code) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" " + toDisplayString(address.state) + " " + toDisplayString(address.country), 1)
                                ])
                              ])
                            ]);
                          }), 128)),
                          createVNode("div", { class: "pt-4" }, [
                            createVNode(unref(_sfc_main$r), {
                              variant: "outline",
                              onClick: ($event) => showAddressModal.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" + Ajouter une nouvelle adresse ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["model-value", "onUpdate:modelValue"]),
                    createVNode(unref(_sfc_main$1), {
                      open: showAddressModal.value,
                      "onUpdate:open": ($event) => showAddressModal.value = $event
                    }, null, 8, ["open", "onUpdate:open"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$t), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$u), null, {
                    default: withCtx(() => [
                      createTextVNode("Adresse de facturation")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$v), null, {
                    default: withCtx(() => [
                      createTextVNode(" Sélectionnez une adresse existante ou ajoutez-en une nouvelle ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$w), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$n), {
                    "model-value": _ctx.selectedAddress,
                    "onUpdate:modelValue": (address) => emit("update:selectedAddress", address)
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "space-y-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.savedAddresses, (address) => {
                          return openBlock(), createBlock("div", {
                            key: address.id,
                            class: "flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50"
                          }, [
                            createVNode(unref(_sfc_main$m), { value: address }, null, 8, ["value"]),
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$o), { class: "font-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(address.street), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("p", { class: "text-sm text-gray-500" }, [
                                createTextVNode(toDisplayString(address.city) + ", " + toDisplayString(address.postal_code) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" " + toDisplayString(address.state) + " " + toDisplayString(address.country), 1)
                              ])
                            ])
                          ]);
                        }), 128)),
                        createVNode("div", { class: "pt-4" }, [
                          createVNode(unref(_sfc_main$r), {
                            variant: "outline",
                            onClick: ($event) => showAddressModal.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" + Ajouter une nouvelle adresse ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["model-value", "onUpdate:modelValue"]),
                  createVNode(unref(_sfc_main$1), {
                    open: showAddressModal.value,
                    "onUpdate:open": ($event) => showAddressModal.value = $event
                  }, null, 8, ["open", "onUpdate:open"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/checkout/Billing.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Dialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/Dialog.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "DialogClose",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogClose), mergeProps(props, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogClose.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DialogContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps(unref(forwarded), {
              class: unref(cn)(
                "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Cross2Icon), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Close</span>`);
                      } else {
                        return [
                          createVNode(unref(Cross2Icon), { class: "w-4 h-4" }),
                          createVNode("span", { class: "sr-only" }, "Close")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                      default: withCtx(() => [
                        createVNode(unref(Cross2Icon), { class: "w-4 h-4" }),
                        createVNode("span", { class: "sr-only" }, "Close")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
              createVNode(unref(DialogContent), mergeProps(unref(forwarded), {
                class: unref(cn)(
                  "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                    default: withCtx(() => [
                      createVNode(unref(Cross2Icon), { class: "w-4 h-4" }),
                      createVNode("span", { class: "sr-only" }, "Close")
                    ]),
                    _: 1
                  })
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogContent.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "DialogDescription",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogDescription), mergeProps(unref(forwardedProps), {
        class: unref(cn)("text-sm text-muted-foreground", props.class)
      }, _attrs), {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogDescription.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DialogFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogFooter.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DialogHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex flex-col gap-y-1.5 text-center sm:text-left", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogHeader.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DialogScrollContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    class: unref(cn)(
                      "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                      props.class
                    )
                  }, unref(forwarded), {
                    onPointerDownOutside: (event) => {
                      const originalEvent = event.detail.originalEvent;
                      const target = originalEvent.target;
                      if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
                        event.preventDefault();
                      }
                    }
                  }), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        _push4(ssrRenderComponent(unref(DialogClose), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Cross2Icon), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                              _push5(`<span class="sr-only"${_scopeId4}>Close</span>`);
                            } else {
                              return [
                                createVNode(unref(Cross2Icon), { class: "w-4 h-4" }),
                                createVNode("span", { class: "sr-only" }, "Close")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default"),
                          createVNode(unref(DialogClose), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                            default: withCtx(() => [
                              createVNode(unref(Cross2Icon), { class: "w-4 h-4" }),
                              createVNode("span", { class: "sr-only" }, "Close")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(DialogContent), mergeProps({
                      class: unref(cn)(
                        "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                        props.class
                      )
                    }, unref(forwarded), {
                      onPointerDownOutside: (event) => {
                        const originalEvent = event.detail.originalEvent;
                        const target = originalEvent.target;
                        if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
                          event.preventDefault();
                        }
                      }
                    }), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default"),
                        createVNode(unref(DialogClose), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                          default: withCtx(() => [
                            createVNode(unref(Cross2Icon), { class: "w-4 h-4" }),
                            createVNode("span", { class: "sr-only" }, "Close")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 3
                    }, 16, ["class", "onPointerDownOutside"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
                default: withCtx(() => [
                  createVNode(unref(DialogContent), mergeProps({
                    class: unref(cn)(
                      "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                      props.class
                    )
                  }, unref(forwarded), {
                    onPointerDownOutside: (event) => {
                      const originalEvent = event.detail.originalEvent;
                      const target = originalEvent.target;
                      if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
                        event.preventDefault();
                      }
                    }
                  }), {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default"),
                      createVNode(unref(DialogClose), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                        default: withCtx(() => [
                          createVNode(unref(Cross2Icon), { class: "w-4 h-4" }),
                          createVNode("span", { class: "sr-only" }, "Close")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 3
                  }, 16, ["class", "onPointerDownOutside"])
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogScrollContent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DialogTitle",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTitle), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "text-lg font-semibold leading-none tracking-tight",
          props.class
        )
      }, _attrs), {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogTitle.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DialogTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTrigger), mergeProps(props, _attrs), {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dialog/DialogTrigger.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Flag",
  __ssrInlineRender: true,
  props: {
    country: { default: "" },
    countryName: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const flagSrc = computed(() => {
      if (!props.country) return null;
      const countryCode = props.country.toUpperCase();
      return `https://catamphetamine.gitlab.io/country-flag-icons/3x2/${countryCode}.svg`;
    });
    const imageError = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "flex h-4 w-6 overflow-hidden rounded-sm" }, _attrs))}>`);
      if (flagSrc.value && !imageError.value) {
        _push(`<img${ssrRenderAttr("src", flagSrc.value)}${ssrRenderAttr("alt", _ctx.countryName)} class="h-full w-full object-cover">`);
      } else {
        _push(`<span class="h-full w-full bg-gray-200 flex items-center justify-center text-xs">${ssrInterpolate(_ctx.country)}</span>`);
      }
      _push(`</span>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/input-tel/Flag.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InputTel",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    className: { default: "" },
    inputClassName: { default: "" },
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const phoneNumber = ref(props.modelValue);
    const selectedCountry = ref("FR");
    const isMounted = ref(false);
    const countryOptions = computed(() => getCountries().map((country) => ({
      value: country,
      label: new Intl.DisplayNames(["fr"], { type: "region" }).of(country),
      dialCode: getCountryCallingCode(country)
    })));
    onMounted(() => {
      isMounted.value = true;
    });
    onBeforeUnmount(() => {
      isMounted.value = false;
    });
    watch(() => props.modelValue, (newValue) => {
      if (isMounted.value) {
        phoneNumber.value = newValue;
      }
    }, { immediate: true });
    const handleInput = () => {
      if (!isMounted.value) return;
      if (phoneNumber.value === void 0) return;
      const asYouType = new AsYouType();
      const formattedNumber = asYouType.input(phoneNumber.value);
      phoneNumber.value = formattedNumber;
      if (formattedNumber.startsWith("+")) {
        const parsedNumber = parsePhoneNumber(formattedNumber, { extract: true });
        if (parsedNumber && parsedNumber.country) {
          selectedCountry.value = parsedNumber.country;
        }
      }
      emit("update:modelValue", formattedNumber);
    };
    const selectedCountryOption = computed(
      () => countryOptions.value.find((c) => c.value === selectedCountry.value)
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex items-center", props.className]
      }, _attrs))}><div class="relative w-full">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        country: selectedCountry.value,
        "country-name": (_a = selectedCountryOption.value) == null ? void 0 : _a.label,
        class: "absolute left-3 top-1/2 transform -translate-y-1/2"
      }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$p), {
        modelValue: phoneNumber.value,
        "onUpdate:modelValue": ($event) => phoneNumber.value = $event,
        class: ["pl-12", props.inputClassName],
        disabled: props.disabled,
        onInput: handleInput,
        placeholder: `+${((_b = selectedCountryOption.value) == null ? void 0 : _b.dialCode) || ""} xxxxxxxx`
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/input-tel/InputTel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddressDialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const addressForm = useForm({
      firstname: "",
      lastname: "",
      phone: "",
      street: "",
      city: "",
      postal_code: "",
      country: "",
      state: ""
    });
    const handleSubmit = () => {
      addressForm.post(route("addresses.store"), {
        onSuccess: () => {
          emit("update:open", false);
          addressForm.reset();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$c), mergeProps({
        open: _ctx.open,
        "onUpdate:open": (value) => emit("update:open", value)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$a), { class: "sm:max-w-[425px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$7), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Ajouter une nouvelle adresse`);
                            } else {
                              return [
                                createTextVNode("Ajouter une nouvelle adresse")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(_sfc_main$9), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Remplissez les informations pour ajouter une nouvelle adresse. `);
                            } else {
                              return [
                                createTextVNode(" Remplissez les informations pour ajouter une nouvelle adresse. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$5), null, {
                            default: withCtx(() => [
                              createTextVNode("Ajouter une nouvelle adresse")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => [
                              createTextVNode(" Remplissez les informations pour ajouter une nouvelle adresse. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<form class="space-y-4"${_scopeId2}><div class="grid grid-cols-2 gap-4"${_scopeId2}><div class="space-y-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$o), { for: "firstname" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Prénom`);
                      } else {
                        return [
                          createTextVNode("Prénom")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$p), {
                    id: "firstname",
                    modelValue: unref(addressForm).firstname,
                    "onUpdate:modelValue": ($event) => unref(addressForm).firstname = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$q), {
                    message: unref(addressForm).errors.firstname
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="space-y-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$o), { for: "lastname" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Nom`);
                      } else {
                        return [
                          createTextVNode("Nom")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$p), {
                    id: "lastname",
                    modelValue: unref(addressForm).lastname,
                    "onUpdate:modelValue": ($event) => unref(addressForm).lastname = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$q), {
                    message: unref(addressForm).errors.lastname
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="space-y-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$o), { for: "street" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Téléphone`);
                      } else {
                        return [
                          createTextVNode("Téléphone")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), {
                    id: "phone",
                    modelValue: unref(addressForm).phone,
                    "onUpdate:modelValue": ($event) => unref(addressForm).phone = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$q), {
                    message: unref(addressForm).errors.phone
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="space-y-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$o), { for: "street" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Rue`);
                      } else {
                        return [
                          createTextVNode("Rue")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$x), {
                    modelValue: unref(addressForm).street,
                    "onUpdate:modelValue": ($event) => unref(addressForm).street = $event,
                    "onUpdate:zipCode": ($event) => unref(addressForm).postal_code = $event,
                    "onUpdate:city": ($event) => unref(addressForm).city = $event,
                    "onUpdate:state": ($event) => unref(addressForm).state = $event,
                    "onUpdate:country": ($event) => unref(addressForm).country = $event,
                    placeholder: "Entrez l'adresse"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$q), {
                    message: unref(addressForm).errors.street
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-2 gap-4"${_scopeId2}><div class="space-y-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$o), { for: "postal_code" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Code postal`);
                      } else {
                        return [
                          createTextVNode("Code postal")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$p), {
                    id: "postal_code",
                    modelValue: unref(addressForm).postal_code,
                    "onUpdate:modelValue": ($event) => unref(addressForm).postal_code = $event,
                    disabled: unref(addressForm).processing
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$q), {
                    message: unref(addressForm).errors.postal_code
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="space-y-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$o), { for: "city" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ville`);
                      } else {
                        return [
                          createTextVNode("Ville")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$p), {
                    id: "city",
                    modelValue: unref(addressForm).city,
                    "onUpdate:modelValue": ($event) => unref(addressForm).city = $event,
                    disabled: unref(addressForm).processing
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$q), {
                    message: unref(addressForm).errors.city
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-2 gap-4"${_scopeId2}><div class="space-y-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$o), { for: "state" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`État/Région`);
                      } else {
                        return [
                          createTextVNode("État/Région")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$p), {
                    id: "state",
                    modelValue: unref(addressForm).state,
                    "onUpdate:modelValue": ($event) => unref(addressForm).state = $event,
                    disabled: unref(addressForm).processing
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$q), {
                    message: unref(addressForm).errors.state
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="space-y-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$o), { for: "country" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Pays`);
                      } else {
                        return [
                          createTextVNode("Pays")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$p), {
                    id: "country",
                    modelValue: unref(addressForm).country,
                    "onUpdate:modelValue": ($event) => unref(addressForm).country = $event,
                    disabled: unref(addressForm).processing
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$q), {
                    message: unref(addressForm).errors.country
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="flex justify-end gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$r), {
                    type: "button",
                    variant: "outline",
                    onClick: ($event) => emit("update:open", false)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Annuler `);
                      } else {
                        return [
                          createTextVNode(" Annuler ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$r), {
                    type: "submit",
                    disabled: unref(addressForm).processing
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(addressForm).processing ? "Enregistrement..." : "Enregistrer")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(addressForm).processing ? "Enregistrement..." : "Enregistrer"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                } else {
                  return [
                    createVNode(unref(_sfc_main$7), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$5), null, {
                          default: withCtx(() => [
                            createTextVNode("Ajouter une nouvelle adresse")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$9), null, {
                          default: withCtx(() => [
                            createTextVNode(" Remplissez les informations pour ajouter une nouvelle adresse. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("form", {
                      onSubmit: withModifiers(handleSubmit, ["prevent"]),
                      class: "space-y-4"
                    }, [
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(_sfc_main$o), { for: "firstname" }, {
                            default: withCtx(() => [
                              createTextVNode("Prénom")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$p), {
                            id: "firstname",
                            modelValue: unref(addressForm).firstname,
                            "onUpdate:modelValue": ($event) => unref(addressForm).firstname = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$q), {
                            message: unref(addressForm).errors.firstname
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(_sfc_main$o), { for: "lastname" }, {
                            default: withCtx(() => [
                              createTextVNode("Nom")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$p), {
                            id: "lastname",
                            modelValue: unref(addressForm).lastname,
                            "onUpdate:modelValue": ($event) => unref(addressForm).lastname = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(_sfc_main$q), {
                            message: unref(addressForm).errors.lastname
                          }, null, 8, ["message"])
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode(unref(_sfc_main$o), { for: "street" }, {
                          default: withCtx(() => [
                            createTextVNode("Téléphone")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$2), {
                          id: "phone",
                          modelValue: unref(addressForm).phone,
                          "onUpdate:modelValue": ($event) => unref(addressForm).phone = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$q), {
                          message: unref(addressForm).errors.phone
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode(unref(_sfc_main$o), { for: "street" }, {
                          default: withCtx(() => [
                            createTextVNode("Rue")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$x), {
                          modelValue: unref(addressForm).street,
                          "onUpdate:modelValue": ($event) => unref(addressForm).street = $event,
                          "onUpdate:zipCode": ($event) => unref(addressForm).postal_code = $event,
                          "onUpdate:city": ($event) => unref(addressForm).city = $event,
                          "onUpdate:state": ($event) => unref(addressForm).state = $event,
                          "onUpdate:country": ($event) => unref(addressForm).country = $event,
                          placeholder: "Entrez l'adresse"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onUpdate:zipCode", "onUpdate:city", "onUpdate:state", "onUpdate:country"]),
                        createVNode(unref(_sfc_main$q), {
                          message: unref(addressForm).errors.street
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(_sfc_main$o), { for: "postal_code" }, {
                            default: withCtx(() => [
                              createTextVNode("Code postal")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$p), {
                            id: "postal_code",
                            modelValue: unref(addressForm).postal_code,
                            "onUpdate:modelValue": ($event) => unref(addressForm).postal_code = $event,
                            disabled: unref(addressForm).processing
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          createVNode(unref(_sfc_main$q), {
                            message: unref(addressForm).errors.postal_code
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(_sfc_main$o), { for: "city" }, {
                            default: withCtx(() => [
                              createTextVNode("Ville")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$p), {
                            id: "city",
                            modelValue: unref(addressForm).city,
                            "onUpdate:modelValue": ($event) => unref(addressForm).city = $event,
                            disabled: unref(addressForm).processing
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          createVNode(unref(_sfc_main$q), {
                            message: unref(addressForm).errors.city
                          }, null, 8, ["message"])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(_sfc_main$o), { for: "state" }, {
                            default: withCtx(() => [
                              createTextVNode("État/Région")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$p), {
                            id: "state",
                            modelValue: unref(addressForm).state,
                            "onUpdate:modelValue": ($event) => unref(addressForm).state = $event,
                            disabled: unref(addressForm).processing
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          createVNode(unref(_sfc_main$q), {
                            message: unref(addressForm).errors.state
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(unref(_sfc_main$o), { for: "country" }, {
                            default: withCtx(() => [
                              createTextVNode("Pays")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$p), {
                            id: "country",
                            modelValue: unref(addressForm).country,
                            "onUpdate:modelValue": ($event) => unref(addressForm).country = $event,
                            disabled: unref(addressForm).processing
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          createVNode(unref(_sfc_main$q), {
                            message: unref(addressForm).errors.country
                          }, null, 8, ["message"])
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-end gap-4" }, [
                        createVNode(unref(_sfc_main$r), {
                          type: "button",
                          variant: "outline",
                          onClick: ($event) => emit("update:open", false)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Annuler ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(unref(_sfc_main$r), {
                          type: "submit",
                          disabled: unref(addressForm).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(addressForm).processing ? "Enregistrement..." : "Enregistrer"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$a), { class: "sm:max-w-[425px]" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$7), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$5), null, {
                        default: withCtx(() => [
                          createTextVNode("Ajouter une nouvelle adresse")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$9), null, {
                        default: withCtx(() => [
                          createTextVNode(" Remplissez les informations pour ajouter une nouvelle adresse. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("form", {
                    onSubmit: withModifiers(handleSubmit, ["prevent"]),
                    class: "space-y-4"
                  }, [
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode(unref(_sfc_main$o), { for: "firstname" }, {
                          default: withCtx(() => [
                            createTextVNode("Prénom")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$p), {
                          id: "firstname",
                          modelValue: unref(addressForm).firstname,
                          "onUpdate:modelValue": ($event) => unref(addressForm).firstname = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$q), {
                          message: unref(addressForm).errors.firstname
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode(unref(_sfc_main$o), { for: "lastname" }, {
                          default: withCtx(() => [
                            createTextVNode("Nom")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$p), {
                          id: "lastname",
                          modelValue: unref(addressForm).lastname,
                          "onUpdate:modelValue": ($event) => unref(addressForm).lastname = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(unref(_sfc_main$q), {
                          message: unref(addressForm).errors.lastname
                        }, null, 8, ["message"])
                      ])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(unref(_sfc_main$o), { for: "street" }, {
                        default: withCtx(() => [
                          createTextVNode("Téléphone")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$2), {
                        id: "phone",
                        modelValue: unref(addressForm).phone,
                        "onUpdate:modelValue": ($event) => unref(addressForm).phone = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(_sfc_main$q), {
                        message: unref(addressForm).errors.phone
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode(unref(_sfc_main$o), { for: "street" }, {
                        default: withCtx(() => [
                          createTextVNode("Rue")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$x), {
                        modelValue: unref(addressForm).street,
                        "onUpdate:modelValue": ($event) => unref(addressForm).street = $event,
                        "onUpdate:zipCode": ($event) => unref(addressForm).postal_code = $event,
                        "onUpdate:city": ($event) => unref(addressForm).city = $event,
                        "onUpdate:state": ($event) => unref(addressForm).state = $event,
                        "onUpdate:country": ($event) => unref(addressForm).country = $event,
                        placeholder: "Entrez l'adresse"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onUpdate:zipCode", "onUpdate:city", "onUpdate:state", "onUpdate:country"]),
                      createVNode(unref(_sfc_main$q), {
                        message: unref(addressForm).errors.street
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode(unref(_sfc_main$o), { for: "postal_code" }, {
                          default: withCtx(() => [
                            createTextVNode("Code postal")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$p), {
                          id: "postal_code",
                          modelValue: unref(addressForm).postal_code,
                          "onUpdate:modelValue": ($event) => unref(addressForm).postal_code = $event,
                          disabled: unref(addressForm).processing
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        createVNode(unref(_sfc_main$q), {
                          message: unref(addressForm).errors.postal_code
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode(unref(_sfc_main$o), { for: "city" }, {
                          default: withCtx(() => [
                            createTextVNode("Ville")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$p), {
                          id: "city",
                          modelValue: unref(addressForm).city,
                          "onUpdate:modelValue": ($event) => unref(addressForm).city = $event,
                          disabled: unref(addressForm).processing
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        createVNode(unref(_sfc_main$q), {
                          message: unref(addressForm).errors.city
                        }, null, 8, ["message"])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode(unref(_sfc_main$o), { for: "state" }, {
                          default: withCtx(() => [
                            createTextVNode("État/Région")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$p), {
                          id: "state",
                          modelValue: unref(addressForm).state,
                          "onUpdate:modelValue": ($event) => unref(addressForm).state = $event,
                          disabled: unref(addressForm).processing
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        createVNode(unref(_sfc_main$q), {
                          message: unref(addressForm).errors.state
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode(unref(_sfc_main$o), { for: "country" }, {
                          default: withCtx(() => [
                            createTextVNode("Pays")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$p), {
                          id: "country",
                          modelValue: unref(addressForm).country,
                          "onUpdate:modelValue": ($event) => unref(addressForm).country = $event,
                          disabled: unref(addressForm).processing
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        createVNode(unref(_sfc_main$q), {
                          message: unref(addressForm).errors.country
                        }, null, 8, ["message"])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-4" }, [
                      createVNode(unref(_sfc_main$r), {
                        type: "button",
                        variant: "outline",
                        onClick: ($event) => emit("update:open", false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Annuler ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(unref(_sfc_main$r), {
                        type: "submit",
                        disabled: unref(addressForm).processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(addressForm).processing ? "Enregistrement..." : "Enregistrer"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ], 32)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/views/checkout/AddressDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const totalSteps = 5;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Checkout",
  __ssrInlineRender: true,
  setup(__props) {
    computed(() => usePage().props.cart);
    const currentStep = ref(1);
    const billingAddress = ref(null);
    const shippingAddress = ref(null);
    const selectedShippingMethod = ref(null);
    const useShippingAsBilling = ref(false);
    const savedAddresses = computed(() => usePage().props.addresses);
    const shippingMethods = computed(() => usePage().props.shippingMethods);
    const canProceed = computed(() => {
      switch (currentStep.value) {
        case 1:
          return usePage().props.auth.user;
        case 2:
          return billingAddress.value !== null;
        case 3:
          return shippingAddress.value !== null || useShippingAsBilling.value;
        case 4:
          return selectedShippingMethod.value !== null;
        case 5:
          return true;
        default:
          return false;
      }
    });
    const nextStep = () => {
      if (canProceed.value && currentStep.value < totalSteps) {
        currentStep.value++;
      }
    };
    const previousStep = () => {
      if (currentStep.value > 1) {
        currentStep.value--;
      }
    };
    const submitCheckout = () => {
      router.post(route("checkout.process"), {
        billing_address: billingAddress.value,
        shipping_address: useShippingAsBilling.value ? billingAddress.value : shippingAddress.value,
        shipping_method: selectedShippingMethod.value
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Checkout" }, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$y), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section id="checkout" class="max-w-screen-2xl container px-4 sm:px-6 lg:px-12 min-h-screen bg-gradient-to-b from-gray-50 to-white"${_scopeId}><div class="pt-32 pb-12"${_scopeId}><div class="flex items-center gap-x-2 mb-8"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$r), {
              "as-child": "",
              variant: "secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("cart.index")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(MoveLeft), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(MoveLeft))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      href: _ctx.route("cart.index")
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(MoveLeft))
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h1 class="text-4xl font-bold"${_scopeId}> Checkout </h1></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"${_scopeId}><div class="lg:col-span-2 space-y-6"${_scopeId}><div class="relative flex justify-between mb-12"${_scopeId}><div class="absolute top-5 left-0 w-full h-[2px] bg-gray-200 -z-10"${_scopeId}></div><!--[-->`);
            ssrRenderList([
              "Account",
              "Biling",
              "Shipping",
              "Payment",
              "Review"
            ], (step, index) => {
              _push2(`<div class="flex flex-col items-center gap-2"${_scopeId}><div class="${ssrRenderClass([
                "rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium",
                currentStep.value === index + 1 ? "bg-black text-white" : currentStep.value > index + 1 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-400"
              ])}"${_scopeId}>${ssrInterpolate(currentStep.value > index + 1 ? "✓" : index + 1)}</div><span class="text-sm text-gray-600"${_scopeId}>${ssrInterpolate(step)}</span></div>`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$f), { "current-step": currentStep.value }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$d), {
              "current-step": currentStep.value,
              "saved-addresses": savedAddresses.value,
              "selected-address": billingAddress.value,
              "onUpdate:selectedAddress": ($event) => billingAddress.value = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$e), {
              "current-step": currentStep.value,
              "saved-addresses": savedAddresses.value,
              "selected-address": shippingAddress.value,
              "onUpdate:selectedAddress": ($event) => shippingAddress.value = $event,
              "billing-address": billingAddress.value
            }, null, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle(currentStep.value === 4 ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$s), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$t), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$u), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Mode de livraison`);
                            } else {
                              return [
                                createTextVNode("Mode de livraison")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$u), null, {
                            default: withCtx(() => [
                              createTextVNode("Mode de livraison")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$w), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$n), {
                          modelValue: selectedShippingMethod.value,
                          "onUpdate:modelValue": ($event) => selectedShippingMethod.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="space-y-4"${_scopeId4}><!--[-->`);
                              ssrRenderList(shippingMethods.value, (method) => {
                                _push5(`<div class="flex items-center space-x-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(_sfc_main$m), { value: method }, null, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(_sfc_main$o), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(method.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(method.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<p class="text-sm text-gray-500"${_scopeId4}>${ssrInterpolate(method.estimated_days)} - ${ssrInterpolate(method.price)}€ </p></div></div>`);
                              });
                              _push5(`<!--]--></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "space-y-4" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(shippingMethods.value, (method) => {
                                    return openBlock(), createBlock("div", {
                                      key: method.id,
                                      class: "flex items-center space-x-2"
                                    }, [
                                      createVNode(unref(_sfc_main$m), { value: method }, null, 8, ["value"]),
                                      createVNode("div", null, [
                                        createVNode(unref(_sfc_main$o), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(method.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(method.estimated_days) + " - " + toDisplayString(method.price) + "€ ", 1)
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$n), {
                            modelValue: selectedShippingMethod.value,
                            "onUpdate:modelValue": ($event) => selectedShippingMethod.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "space-y-4" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(shippingMethods.value, (method) => {
                                  return openBlock(), createBlock("div", {
                                    key: method.id,
                                    class: "flex items-center space-x-2"
                                  }, [
                                    createVNode(unref(_sfc_main$m), { value: method }, null, 8, ["value"]),
                                    createVNode("div", null, [
                                      createVNode(unref(_sfc_main$o), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(method.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(method.estimated_days) + " - " + toDisplayString(method.price) + "€ ", 1)
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$t), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$u), null, {
                          default: withCtx(() => [
                            createTextVNode("Mode de livraison")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$w), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$n), {
                          modelValue: selectedShippingMethod.value,
                          "onUpdate:modelValue": ($event) => selectedShippingMethod.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(shippingMethods.value, (method) => {
                                return openBlock(), createBlock("div", {
                                  key: method.id,
                                  class: "flex items-center space-x-2"
                                }, [
                                  createVNode(unref(_sfc_main$m), { value: method }, null, 8, ["value"]),
                                  createVNode("div", null, [
                                    createVNode(unref(_sfc_main$o), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(method.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(method.estimated_days) + " - " + toDisplayString(method.price) + "€ ", 1)
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle(currentStep.value === 5 ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$s), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$t), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$u), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Paiement`);
                            } else {
                              return [
                                createTextVNode("Paiement")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$u), null, {
                            default: withCtx(() => [
                              createTextVNode("Paiement")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$w), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$t), null, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$u), null, {
                          default: withCtx(() => [
                            createTextVNode("Paiement")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$w))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-between pt-6"${_scopeId}>`);
            if (currentStep.value > 1) {
              _push2(ssrRenderComponent(unref(_sfc_main$r), {
                onClick: previousStep,
                variant: "outline"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Précédent `);
                  } else {
                    return [
                      createTextVNode(" Précédent ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (currentStep.value < totalSteps) {
              _push2(ssrRenderComponent(unref(_sfc_main$r), {
                onClick: nextStep,
                disabled: !canProceed.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Suivant `);
                  } else {
                    return [
                      createTextVNode(" Suivant ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (currentStep.value === totalSteps) {
              _push2(ssrRenderComponent(unref(_sfc_main$r), {
                onClick: submitCheckout,
                variant: "primary"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Commander `);
                  } else {
                    return [
                      createTextVNode(" Commander ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="lg:col-span-1"${_scopeId}><div class="sticky top-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$z), null, null, _parent2, _scopeId));
            _push2(`</div></div></div></div></section>`);
          } else {
            return [
              createVNode("section", {
                id: "checkout",
                class: "max-w-screen-2xl container px-4 sm:px-6 lg:px-12 min-h-screen bg-gradient-to-b from-gray-50 to-white"
              }, [
                createVNode("div", { class: "pt-32 pb-12" }, [
                  createVNode("div", { class: "flex items-center gap-x-2 mb-8" }, [
                    createVNode(unref(_sfc_main$r), {
                      "as-child": "",
                      variant: "secondary"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Link), {
                          href: _ctx.route("cart.index")
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(MoveLeft))
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 1
                    }),
                    createVNode("h1", { class: "text-4xl font-bold" }, " Checkout ")
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, [
                    createVNode("div", { class: "lg:col-span-2 space-y-6" }, [
                      createVNode("div", { class: "relative flex justify-between mb-12" }, [
                        createVNode("div", { class: "absolute top-5 left-0 w-full h-[2px] bg-gray-200 -z-10" }),
                        (openBlock(), createBlock(Fragment, null, renderList([
                          "Account",
                          "Biling",
                          "Shipping",
                          "Payment",
                          "Review"
                        ], (step, index) => {
                          return createVNode("div", {
                            key: index,
                            class: "flex flex-col items-center gap-2"
                          }, [
                            createVNode("div", {
                              class: [
                                "rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium",
                                currentStep.value === index + 1 ? "bg-black text-white" : currentStep.value > index + 1 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-400"
                              ]
                            }, toDisplayString(currentStep.value > index + 1 ? "✓" : index + 1), 3),
                            createVNode("span", { class: "text-sm text-gray-600" }, toDisplayString(step), 1)
                          ]);
                        }), 64))
                      ]),
                      createVNode(unref(_sfc_main$f), { "current-step": currentStep.value }, null, 8, ["current-step"]),
                      createVNode(unref(_sfc_main$d), {
                        "current-step": currentStep.value,
                        "saved-addresses": savedAddresses.value,
                        "selected-address": billingAddress.value,
                        "onUpdate:selectedAddress": ($event) => billingAddress.value = $event
                      }, null, 8, ["current-step", "saved-addresses", "selected-address", "onUpdate:selectedAddress"]),
                      createVNode(unref(_sfc_main$e), {
                        "current-step": currentStep.value,
                        "saved-addresses": savedAddresses.value,
                        "selected-address": shippingAddress.value,
                        "onUpdate:selectedAddress": ($event) => shippingAddress.value = $event,
                        "billing-address": billingAddress.value
                      }, null, 8, ["current-step", "saved-addresses", "selected-address", "onUpdate:selectedAddress", "billing-address"]),
                      withDirectives(createVNode("div", null, [
                        createVNode(unref(_sfc_main$s), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$t), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$u), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Mode de livraison")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$w), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$n), {
                                  modelValue: selectedShippingMethod.value,
                                  "onUpdate:modelValue": ($event) => selectedShippingMethod.value = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "space-y-4" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(shippingMethods.value, (method) => {
                                        return openBlock(), createBlock("div", {
                                          key: method.id,
                                          class: "flex items-center space-x-2"
                                        }, [
                                          createVNode(unref(_sfc_main$m), { value: method }, null, 8, ["value"]),
                                          createVNode("div", null, [
                                            createVNode(unref(_sfc_main$o), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(method.name), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(method.estimated_days) + " - " + toDisplayString(method.price) + "€ ", 1)
                                          ])
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ], 512), [
                        [vShow, currentStep.value === 4]
                      ]),
                      withDirectives(createVNode("div", null, [
                        createVNode(unref(_sfc_main$s), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$t), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$u), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Paiement")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$w))
                          ]),
                          _: 1
                        })
                      ], 512), [
                        [vShow, currentStep.value === 5]
                      ]),
                      createVNode("div", { class: "flex justify-between pt-6" }, [
                        currentStep.value > 1 ? (openBlock(), createBlock(unref(_sfc_main$r), {
                          key: 0,
                          onClick: previousStep,
                          variant: "outline"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Précédent ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        currentStep.value < totalSteps ? (openBlock(), createBlock(unref(_sfc_main$r), {
                          key: 1,
                          onClick: nextStep,
                          disabled: !canProceed.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Suivant ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : createCommentVNode("", true),
                        currentStep.value === totalSteps ? (openBlock(), createBlock(unref(_sfc_main$r), {
                          key: 2,
                          onClick: submitCheckout,
                          variant: "primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Commander ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "lg:col-span-1" }, [
                      createVNode("div", { class: "sticky top-6" }, [
                        createVNode(unref(_sfc_main$z))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/cart/Checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

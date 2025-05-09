import { defineComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext, openBlock, createBlock, createVNode, computed, createTextVNode, toDisplayString, createCommentVNode, Fragment, renderList, ref, onMounted, isRef } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrGetDynamicModelProps } from "vue/server-renderer";
import { Link, usePage, router } from "@inertiajs/vue3";
import { cva } from "class-variance-authority";
import { Primitive, useForwardProps, NavigationMenuViewport, useForwardPropsEmits, NavigationMenuRoot, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, DropdownMenuRoot, DropdownMenuCheckboxItem, DropdownMenuItemIndicator, DropdownMenuPortal, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "radix-vue";
import { ChevronDownIcon, CheckIcon, DotFilledIcon, ChevronRightIcon } from "@radix-icons/vue";
import { Sun, Moon, ShoppingCart, CreditCard, Instagram, Facebook, Twitter, MapPin, Loader2 } from "lucide-vue-next";
import { loadLanguageAsync } from "laravel-vue-i18n";
import { defineStore } from "pinia";
import { useVModel, useDebounceFn } from "@vueuse/core";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "as-child": _ctx.asChild,
        class: unref(cn)(unref(buttonVariants)({ variant: _ctx.variant, size: _ctx.size }), props.class)
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
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/button/Button.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-7 rounded px-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "dark"
  }),
  getters: {},
  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      if (this.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  },
  persist: {
    key: "theme-store",
    storage: localStorage,
    paths: ["theme"]
  }
});
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "Theme",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$F), mergeProps({
        variant: "outline",
        size: "sm",
        onClick: unref(themeStore).toggleTheme,
        class: "h-9 w-9 p-0 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-all duration-300"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(themeStore).theme === "dark") {
              _push2(ssrRenderComponent(unref(Sun), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(Moon), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            }
            _push2(`<span class="sr-only"${_scopeId}>Toggle theme</span>`);
          } else {
            return [
              unref(themeStore).theme === "dark" ? (openBlock(), createBlock(unref(Sun), {
                key: 0,
                class: "h-4 w-4"
              })) : (openBlock(), createBlock(unref(Moon), {
                key: 1,
                class: "h-4 w-4"
              })),
              createVNode("span", { class: "sr-only" }, "Toggle theme")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/default/header/Theme.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "absolute w-full z-50" }, _attrs))}><nav class="max-w-screen-2xl container pt-10 px-4 sm:px-6 lg:px-12"><div class="flex flex-wrap justify-between items-center mx-auto">`);
      _push(ssrRenderComponent(unref(_sfc_main$C), null, null, _parent));
      _push(`<div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_sfc_main$E, null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$e), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$f), null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(_sfc_main$u), null, null, _parent));
      _push(`</div></nav></header>`);
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/default/header/Header.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _imports_0 = "/build/assets/logo-picto-DDGFQlEm.png";
const _imports_1 = "/build/assets/logo-text-Bd9A3oRk.png";
const _imports_2 = "/build/assets/logo-picto-light-Zn0IEUpy.png";
const _imports_3 = "/build/assets/logo-text-light-tM8UFY2n.png";
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "Logo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: _ctx.route("home"),
        class: "flex items-center gap-x-2 text-white select-none"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo Picto" class="h-8 dark:hidden"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="Logo Text" class="h-3 dark:hidden"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="Logo Picto" class="h-8 hidden dark:block"${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="Logo Text" class="h-3 hidden dark:block"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Logo Picto",
                class: "h-8 dark:hidden"
              }),
              createVNode("img", {
                src: _imports_1,
                alt: "Logo Text",
                class: "h-3 dark:hidden"
              }),
              createVNode("img", {
                src: _imports_2,
                alt: "Logo Picto",
                class: "h-8 hidden dark:block"
              }),
              createVNode("img", {
                src: _imports_3,
                alt: "Logo Text",
                class: "h-3 hidden dark:block"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/default/header/Logo.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuViewport",
  __ssrInlineRender: true,
  props: {
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute left-0 top-full flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(NavigationMenuViewport), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "origin-top-center relative mt-1.5 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--radix-navigation-menu-viewport-width]",
          props.class
        )
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/navigation-menu/NavigationMenuViewport.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    orientation: {},
    delayDuration: {},
    skipDelayDuration: {},
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
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
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("relative z-10 flex max-w-max flex-1 items-center justify-center", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$B, null, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(_sfc_main$B)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/navigation-menu/NavigationMenu.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuContent), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
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
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/navigation-menu/NavigationMenuContent.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuItem), mergeProps(props, _attrs), {
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
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/navigation-menu/NavigationMenuItem.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuLink",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuLink), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/navigation-menu/NavigationMenuLink.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuList",
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
      _push(ssrRenderComponent(unref(NavigationMenuList), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "group flex flex-1 list-none items-center justify-center gap-x-1",
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
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/navigation-menu/NavigationMenuList.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuTrigger",
  __ssrInlineRender: true,
  props: {
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
      _push(ssrRenderComponent(unref(NavigationMenuTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(unref(navigationMenuTriggerStyle)(), "group", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(unref(ChevronDownIcon), {
              class: "relative top-px ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(unref(ChevronDownIcon), {
                class: "relative top-px ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
                "aria-hidden": "true"
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/navigation-menu/NavigationMenuTrigger.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const menus = [
      {
        name: "Home",
        href: "/"
      },
      {
        name: "About us",
        href: "/"
      },
      {
        name: "Documentation",
        href: "/"
      },
      {
        name: "Community",
        href: "/"
      },
      {
        name: "Shop",
        href: "/"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden xl:block absolute left-1/2 -translate-x-1/2" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$A), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$w), { class: "rounded-full bg-black/90 border border-neutral-800 px-3 shadow-lg backdrop-blur flex items-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(menus, (menu, index) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$y), { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$x), {
                            href: menu.href,
                            class: "relative block px-3 py-2.5 text-sm font-medium text-white hover:text-blue-300 transition-colors"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(menu.name)} <span class="absolute inset-x-1 -bottom-0.5 h-px bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 opacity-0 transition-all duration-300 scale-x-0 hover:opacity-100 hover:scale-100"${_scopeId4}></span><span class="absolute inset-0 overflow-hidden transition-all duration-300 opacity-0 scale-0 origin-bottom hover:opacity-100 hover:scale-100"${_scopeId4}><span class="absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-blue-500/20 to-transparent blur"${_scopeId4}></span></span>`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(menu.name) + " ", 1),
                                  createVNode("span", { class: "absolute inset-x-1 -bottom-0.5 h-px bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 opacity-0 transition-all duration-300 scale-x-0 hover:opacity-100 hover:scale-100" }),
                                  createVNode("span", { class: "absolute inset-0 overflow-hidden transition-all duration-300 opacity-0 scale-0 origin-bottom hover:opacity-100 hover:scale-100" }, [
                                    createVNode("span", { class: "absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-blue-500/20 to-transparent blur" })
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$x), {
                              href: menu.href,
                              class: "relative block px-3 py-2.5 text-sm font-medium text-white hover:text-blue-300 transition-colors"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(menu.name) + " ", 1),
                                createVNode("span", { class: "absolute inset-x-1 -bottom-0.5 h-px bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 opacity-0 transition-all duration-300 scale-x-0 hover:opacity-100 hover:scale-100" }),
                                createVNode("span", { class: "absolute inset-0 overflow-hidden transition-all duration-300 opacity-0 scale-0 origin-bottom hover:opacity-100 hover:scale-100" }, [
                                  createVNode("span", { class: "absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-blue-500/20 to-transparent blur" })
                                ])
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("cart.index"),
                    class: "relative flex items-center px-3 py-2.5 text-sm font-medium text-white hover:text-blue-300 transition-colors group"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ShoppingCart), { class: "w-5 h-5" }, null, _parent4, _scopeId3));
                        if (_ctx.$page.props.cart.count > 0) {
                          _push4(`<span class="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 rounded-full transform transition-all duration-300 group-hover:scale-110"${_scopeId3}>${ssrInterpolate(_ctx.$page.props.cart.count)}</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<span class="absolute inset-x-1 -bottom-0.5 h-px bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 opacity-0 transition-all duration-300 scale-x-0 group-hover:opacity-100 group-hover:scale-100"${_scopeId3}></span><span class="absolute inset-0 overflow-hidden transition-all duration-300 opacity-0 scale-0 origin-bottom group-hover:opacity-100 group-hover:scale-100"${_scopeId3}><span class="absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-blue-500/20 to-transparent blur"${_scopeId3}></span></span>`);
                      } else {
                        return [
                          createVNode(unref(ShoppingCart), { class: "w-5 h-5" }),
                          _ctx.$page.props.cart.count > 0 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 rounded-full transform transition-all duration-300 group-hover:scale-110"
                          }, toDisplayString(_ctx.$page.props.cart.count), 1)) : createCommentVNode("", true),
                          createVNode("span", { class: "absolute inset-x-1 -bottom-0.5 h-px bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 opacity-0 transition-all duration-300 scale-x-0 group-hover:opacity-100 group-hover:scale-100" }),
                          createVNode("span", { class: "absolute inset-0 overflow-hidden transition-all duration-300 opacity-0 scale-0 origin-bottom group-hover:opacity-100 group-hover:scale-100" }, [
                            createVNode("span", { class: "absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-blue-500/20 to-transparent blur" })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(menus, (menu, index) => {
                      return createVNode(unref(_sfc_main$y), { key: index }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$x), {
                            href: menu.href,
                            class: "relative block px-3 py-2.5 text-sm font-medium text-white hover:text-blue-300 transition-colors"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(menu.name) + " ", 1),
                              createVNode("span", { class: "absolute inset-x-1 -bottom-0.5 h-px bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 opacity-0 transition-all duration-300 scale-x-0 hover:opacity-100 hover:scale-100" }),
                              createVNode("span", { class: "absolute inset-0 overflow-hidden transition-all duration-300 opacity-0 scale-0 origin-bottom hover:opacity-100 hover:scale-100" }, [
                                createVNode("span", { class: "absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-blue-500/20 to-transparent blur" })
                              ])
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64)),
                    createVNode(unref(Link), {
                      href: _ctx.route("cart.index"),
                      class: "relative flex items-center px-3 py-2.5 text-sm font-medium text-white hover:text-blue-300 transition-colors group"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ShoppingCart), { class: "w-5 h-5" }),
                        _ctx.$page.props.cart.count > 0 ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 rounded-full transform transition-all duration-300 group-hover:scale-110"
                        }, toDisplayString(_ctx.$page.props.cart.count), 1)) : createCommentVNode("", true),
                        createVNode("span", { class: "absolute inset-x-1 -bottom-0.5 h-px bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 opacity-0 transition-all duration-300 scale-x-0 group-hover:opacity-100 group-hover:scale-100" }),
                        createVNode("span", { class: "absolute inset-0 overflow-hidden transition-all duration-300 opacity-0 scale-0 origin-bottom group-hover:opacity-100 group-hover:scale-100" }, [
                          createVNode("span", { class: "absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-blue-500/20 to-transparent blur" })
                        ])
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$w), { class: "rounded-full bg-black/90 border border-neutral-800 px-3 shadow-lg backdrop-blur flex items-center" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(menus, (menu, index) => {
                    return createVNode(unref(_sfc_main$y), { key: index }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$x), {
                          href: menu.href,
                          class: "relative block px-3 py-2.5 text-sm font-medium text-white hover:text-blue-300 transition-colors"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(menu.name) + " ", 1),
                            createVNode("span", { class: "absolute inset-x-1 -bottom-0.5 h-px bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 opacity-0 transition-all duration-300 scale-x-0 hover:opacity-100 hover:scale-100" }),
                            createVNode("span", { class: "absolute inset-0 overflow-hidden transition-all duration-300 opacity-0 scale-0 origin-bottom hover:opacity-100 hover:scale-100" }, [
                              createVNode("span", { class: "absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-blue-500/20 to-transparent blur" })
                            ])
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64)),
                  createVNode(unref(Link), {
                    href: _ctx.route("cart.index"),
                    class: "relative flex items-center px-3 py-2.5 text-sm font-medium text-white hover:text-blue-300 transition-colors group"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ShoppingCart), { class: "w-5 h-5" }),
                      _ctx.$page.props.cart.count > 0 ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 rounded-full transform transition-all duration-300 group-hover:scale-110"
                      }, toDisplayString(_ctx.$page.props.cart.count), 1)) : createCommentVNode("", true),
                      createVNode("span", { class: "absolute inset-x-1 -bottom-0.5 h-px bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 opacity-0 transition-all duration-300 scale-x-0 group-hover:opacity-100 group-hover:scale-100" }),
                      createVNode("span", { class: "absolute inset-0 overflow-hidden transition-all duration-300 opacity-0 scale-0 origin-bottom group-hover:opacity-100 group-hover:scale-100" }, [
                        createVNode("span", { class: "absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-blue-500/20 to-transparent blur" })
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"])
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
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/default/header/Menu.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenu.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuCheckboxItem",
  __ssrInlineRender: true,
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select", "update:checked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuCheckboxItem), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DropdownMenuItemIndicator), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckIcon), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CheckIcon), { class: "w-4 h-4" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("span", { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, [
                createVNode(unref(DropdownMenuItemIndicator), null, {
                  default: withCtx(() => [
                    createVNode(unref(CheckIcon), { class: "w-4 h-4" })
                  ]),
                  _: 1
                })
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
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
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
              class: unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
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
              createVNode(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
                class: unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
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
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuContent.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuGroup), mergeProps(props, _attrs), {
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
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuGroup.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "relative flex cursor-default select-none items-center rounded-sm gap-2 px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50  [&>svg]:size-4 [&>svg]:shrink-0",
          _ctx.inset && "pl-8",
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
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuItem.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuLabel",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuLabel), mergeProps(unref(forwardedProps), {
        class: unref(cn)("px-2 py-1.5 text-sm font-semibold", _ctx.inset && "pl-8", props.class)
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
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuLabel.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuRadioGroup",
  __ssrInlineRender: true,
  props: {
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
      _push(ssrRenderComponent(unref(DropdownMenuRadioGroup), mergeProps(unref(forwarded), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuRadioGroup.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuRadioItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRadioItem), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DropdownMenuItemIndicator), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(DotFilledIcon), { class: "h-4 w-4 fill-current" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(DotFilledIcon), { class: "h-4 w-4 fill-current" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("span", { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, [
                createVNode(unref(DropdownMenuItemIndicator), null, {
                  default: withCtx(() => [
                    createVNode(unref(DotFilledIcon), { class: "h-4 w-4 fill-current" })
                  ]),
                  _: 1
                })
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuRadioItem.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSeparator",
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuSeparator), mergeProps(delegatedProps.value, {
        class: unref(cn)("-mx-1 my-1 h-px bg-muted", props.class)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuSeparator.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuShortcut",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: unref(cn)("ml-auto text-xs tracking-widest opacity-60", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuShortcut.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSub",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuSub), mergeProps(unref(forwarded), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuSub.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSubContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuSubContent), mergeProps(unref(forwarded), {
        class: unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuSubContent.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSubTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
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
      _push(ssrRenderComponent(unref(DropdownMenuSubTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(unref(ChevronRightIcon), { class: "ml-auto h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(unref(ChevronRightIcon), { class: "ml-auto h-4 w-4" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuSubTrigger.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    const forwardedProps = useForwardProps(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuTrigger), mergeProps({ class: "outline-none" }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/dropdown-menu/DropdownMenuTrigger.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Currency",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const currencies = computed(() => page.props.available_currencies);
    const selectedCurrency = computed(
      () => currencies.value.find((c) => c.code === page.props.current_currency) || currencies.value[0]
    );
    const changeCurrency = (currency) => {
      router.post(route("currency.update"), {
        currency: currency.code
      }, {
        preserveScroll: true,
        preserveState: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$t), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$g), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$F), {
                    variant: "outline",
                    size: "sm",
                    class: "h-9 px-4 g-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-all duration-300"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(CreditCard), { class: "w-4 h-4 mr-2" }, null, _parent4, _scopeId3));
                        _push4(`<span class="font-medium"${_scopeId3}>${ssrInterpolate(selectedCurrency.value.code)}</span><span class="text-neutral-400 ml-1"${_scopeId3}>(${ssrInterpolate(selectedCurrency.value.symbol)})</span>`);
                      } else {
                        return [
                          createVNode(unref(CreditCard), { class: "w-4 h-4 mr-2" }),
                          createVNode("span", { class: "font-medium" }, toDisplayString(selectedCurrency.value.code), 1),
                          createVNode("span", { class: "text-neutral-400 ml-1" }, "(" + toDisplayString(selectedCurrency.value.symbol) + ")", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$F), {
                      variant: "outline",
                      size: "sm",
                      class: "h-9 px-4 g-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-all duration-300"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(CreditCard), { class: "w-4 h-4 mr-2" }),
                        createVNode("span", { class: "font-medium" }, toDisplayString(selectedCurrency.value.code), 1),
                        createVNode("span", { class: "text-neutral-400 ml-1" }, "(" + toDisplayString(selectedCurrency.value.symbol) + ")", 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$r), { class: "w-32 bg-white/80 backdrop-blur-sm border border-neutral-200/50 dark:bg-neutral-800/80 dark:border-neutral-700/50" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(currencies.value, (currency) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$p), {
                      key: currency.code,
                      onClick: ($event) => changeCurrency(currency),
                      class: [{
                        "bg-neutral-100 dark:bg-neutral-700": selectedCurrency.value.code === currency.code
                      }, "gap-3 cursor-pointer hover:bg-neutral-50 transition-colors duration-200 py-3 dark:hover:bg-neutral-700/50"]
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex flex-col"${_scopeId3}><span class="font-medium"${_scopeId3}>${ssrInterpolate(currency.name)}</span><span class="text-xs text-neutral-500"${_scopeId3}>${ssrInterpolate(currency.symbol)} · ${ssrInterpolate(currency.code)}</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("span", { class: "font-medium" }, toDisplayString(currency.name), 1),
                              createVNode("span", { class: "text-xs text-neutral-500" }, toDisplayString(currency.symbol) + " · " + toDisplayString(currency.code), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(currencies.value, (currency) => {
                      return openBlock(), createBlock(unref(_sfc_main$p), {
                        key: currency.code,
                        onClick: ($event) => changeCurrency(currency),
                        class: [{
                          "bg-neutral-100 dark:bg-neutral-700": selectedCurrency.value.code === currency.code
                        }, "gap-3 cursor-pointer hover:bg-neutral-50 transition-colors duration-200 py-3 dark:hover:bg-neutral-700/50"]
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", { class: "font-medium" }, toDisplayString(currency.name), 1),
                            createVNode("span", { class: "text-xs text-neutral-500" }, toDisplayString(currency.symbol) + " · " + toDisplayString(currency.code), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["onClick", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$g), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$F), {
                    variant: "outline",
                    size: "sm",
                    class: "h-9 px-4 g-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-all duration-300"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(CreditCard), { class: "w-4 h-4 mr-2" }),
                      createVNode("span", { class: "font-medium" }, toDisplayString(selectedCurrency.value.code), 1),
                      createVNode("span", { class: "text-neutral-400 ml-1" }, "(" + toDisplayString(selectedCurrency.value.symbol) + ")", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$r), { class: "w-32 bg-white/80 backdrop-blur-sm border border-neutral-200/50 dark:bg-neutral-800/80 dark:border-neutral-700/50" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(currencies.value, (currency) => {
                    return openBlock(), createBlock(unref(_sfc_main$p), {
                      key: currency.code,
                      onClick: ($event) => changeCurrency(currency),
                      class: [{
                        "bg-neutral-100 dark:bg-neutral-700": selectedCurrency.value.code === currency.code
                      }, "gap-3 cursor-pointer hover:bg-neutral-50 transition-colors duration-200 py-3 dark:hover:bg-neutral-700/50"]
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("span", { class: "font-medium" }, toDisplayString(currency.name), 1),
                          createVNode("span", { class: "text-xs text-neutral-500" }, toDisplayString(currency.symbol) + " · " + toDisplayString(currency.code), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["onClick", "class"]);
                  }), 128))
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
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/default/header/Currency.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Language",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const locales = computed(() => page.props.available_countries);
    const currentLocale = ref(page.props.current_locale);
    const selectedLocale = computed(
      () => locales.value.find((l) => l.code === currentLocale.value) || locales.value[0]
    );
    const countryFlagMap = {
      "en": "gb",
      "fr": "fr",
      "th": "th"
    };
    const changeLocale = (locale) => {
      currentLocale.value = locale.code;
      loadLanguageAsync(locale.code);
      router.post(route("locale.update"), {
        locale: locale.code
      }, {
        preserveScroll: true,
        preserveState: true
      });
    };
    const getFlagPath = (localeCode) => {
      return countryFlagMap[localeCode] || localeCode;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$t), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$g), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$F), {
                    variant: "outline",
                    size: "sm",
                    class: "h-9 px-4 g-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-all duration-300"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="${ssrRenderClass(`fi fi-${getFlagPath(selectedLocale.value.flag_path)} mr-2`)}"${_scopeId3}></span><span class="font-medium"${_scopeId3}>${ssrInterpolate(selectedLocale.value.name)}</span>`);
                      } else {
                        return [
                          createVNode("span", {
                            class: `fi fi-${getFlagPath(selectedLocale.value.flag_path)} mr-2`
                          }, null, 2),
                          createVNode("span", { class: "font-medium" }, toDisplayString(selectedLocale.value.name), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$F), {
                      variant: "outline",
                      size: "sm",
                      class: "h-9 px-4 g-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-all duration-300"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: `fi fi-${getFlagPath(selectedLocale.value.flag_path)} mr-2`
                        }, null, 2),
                        createVNode("span", { class: "font-medium" }, toDisplayString(selectedLocale.value.name), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$r), { class: "w-40 bg-white/80 backdrop-blur-sm border border-neutral-200/50 dark:bg-neutral-800/80 dark:border-neutral-700/50" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(locales.value, (locale) => {
                    _push3(ssrRenderComponent(unref(_sfc_main$p), {
                      key: locale.code,
                      onClick: ($event) => changeLocale(locale),
                      class: [{
                        "bg-neutral-100 dark:bg-neutral-700": selectedLocale.value.code === locale.code
                      }, "gap-3 cursor-pointer hover:bg-neutral-50 transition-colors duration-200 py-3 dark:hover:bg-neutral-700/50"]
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="${ssrRenderClass(`fi fi-${getFlagPath(locale.flag_path)}`)}"${_scopeId3}></span><span class="font-medium"${_scopeId3}>${ssrInterpolate(locale.name)}</span>`);
                        } else {
                          return [
                            createVNode("span", {
                              class: `fi fi-${getFlagPath(locale.flag_path)}`
                            }, null, 2),
                            createVNode("span", { class: "font-medium" }, toDisplayString(locale.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(locales.value, (locale) => {
                      return openBlock(), createBlock(unref(_sfc_main$p), {
                        key: locale.code,
                        onClick: ($event) => changeLocale(locale),
                        class: [{
                          "bg-neutral-100 dark:bg-neutral-700": selectedLocale.value.code === locale.code
                        }, "gap-3 cursor-pointer hover:bg-neutral-50 transition-colors duration-200 py-3 dark:hover:bg-neutral-700/50"]
                      }, {
                        default: withCtx(() => [
                          createVNode("span", {
                            class: `fi fi-${getFlagPath(locale.flag_path)}`
                          }, null, 2),
                          createVNode("span", { class: "font-medium" }, toDisplayString(locale.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$g), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$F), {
                    variant: "outline",
                    size: "sm",
                    class: "h-9 px-4 g-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-all duration-300"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", {
                        class: `fi fi-${getFlagPath(selectedLocale.value.flag_path)} mr-2`
                      }, null, 2),
                      createVNode("span", { class: "font-medium" }, toDisplayString(selectedLocale.value.name), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$r), { class: "w-40 bg-white/80 backdrop-blur-sm border border-neutral-200/50 dark:bg-neutral-800/80 dark:border-neutral-700/50" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(locales.value, (locale) => {
                    return openBlock(), createBlock(unref(_sfc_main$p), {
                      key: locale.code,
                      onClick: ($event) => changeLocale(locale),
                      class: [{
                        "bg-neutral-100 dark:bg-neutral-700": selectedLocale.value.code === locale.code
                      }, "gap-3 cursor-pointer hover:bg-neutral-50 transition-colors duration-200 py-3 dark:hover:bg-neutral-700/50"]
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: `fi fi-${getFlagPath(locale.flag_path)}`
                        }, null, 2),
                        createVNode("span", { class: "font-medium" }, toDisplayString(locale.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick", "class"]);
                  }), 128))
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/default/header/Language.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-black text-white pt-16 pb-8" }, _attrs))}><div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10"><div><h3 class="font-title text-lg font-medium mb-4">Explore</h3><ul class="space-y-3"><li><a href="#" class="text-gray-400 hover:text-white transition-colors">Home</a></li><li><a href="#" class="text-gray-400 hover:text-white transition-colors">Personalized Fragrance</a></li><li><a href="#" class="text-gray-400 hover:text-white transition-colors">Limited Editions</a></li><li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact Us</a></li></ul></div><div><h3 class="font-title text-lg font-medium mb-4">Customer Service</h3><ul class="space-y-3"><li><a href="#" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li><li><a href="#" class="text-gray-400 hover:text-white transition-colors">Shipping &amp; Returns</a></li><li><a href="#" class="text-gray-400 hover:text-white transition-colors">Policies</a></li></ul></div><div><h3 class="font-title text-lg font-medium mb-4">About</h3><ul class="space-y-3"><li><a href="#" class="text-gray-400 hover:text-white transition-colors">Story</a></li><li><a href="#" class="text-gray-400 hover:text-white transition-colors">Vision for the Future</a></li></ul></div><div><h3 class="font-title text-lg font-medium mb-4">Follow Us</h3><div class="flex gap-4"><a href="#" class="text-gray-400 hover:text-white transition-all hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]">`);
      _push(ssrRenderComponent(unref(Instagram), { class: "w-6 h-6" }, null, _parent));
      _push(`</a><a href="#" class="text-gray-400 hover:text-white transition-all hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]">`);
      _push(ssrRenderComponent(unref(Facebook), { class: "w-6 h-6" }, null, _parent));
      _push(`</a><a href="#" class="text-gray-400 hover:text-white transition-all hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]">`);
      _push(ssrRenderComponent(unref(Twitter), { class: "w-6 h-6" }, null, _parent));
      _push(`</a></div></div></div><div class="pt-8 text-center text-gray-400 text-sm"><p>© 2024 MyScent. All rights reserved.</p></div></div></footer>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/default/footer/Footer.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "DefaultLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const locale = computed(() => usePage().props.current_locale);
    onMounted(() => {
      loadLanguageAsync(locale.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$D), null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(unref(_sfc_main$d), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/default/DefaultLayout.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
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
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        class: unref(cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", props.class)
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(modelValue)))))}>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/input/Input.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "InputError",
  __ssrInlineRender: true,
  props: {
    message: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-xs text-red-600 dark:text-red-400">${ssrInterpolate(props.message)}</p></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/input/InputError.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
function addToRemoveQueue(toastId) {
  if (toastTimeouts.has(toastId))
    return;
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}
const state = ref({
  toasts: []
});
function dispatch(action) {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      state.value.toasts = [action.toast, ...state.value.toasts].slice(0, TOAST_LIMIT);
      break;
    case actionTypes.UPDATE_TOAST:
      state.value.toasts = state.value.toasts.map(
        (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
      );
      break;
    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.value.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      state.value.toasts = state.value.toasts.map(
        (t) => t.id === toastId || toastId === void 0 ? {
          ...t,
          open: false
        } : t
      );
      break;
    }
    case actionTypes.REMOVE_TOAST:
      if (action.toastId === void 0)
        state.value.toasts = [];
      else
        state.value.toasts = state.value.toasts.filter((t) => t.id !== action.toastId);
      break;
  }
}
function useToast() {
  return {
    toasts: computed(() => state.value.toasts),
    toast,
    dismiss: (toastId) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId })
  };
}
function toast(props) {
  const id = genId();
  const update = (props2) => dispatch({
    type: actionTypes.UPDATE_TOAST,
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });
  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open)
          dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "InputAddress",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    modelValue: {},
    placeholder: {},
    class: {}
  },
  emits: ["update:modelValue", "update:zipCode", "update:city", "update:state", "update:country"],
  setup(__props, { emit: __emit }) {
    const { toast: toast2 } = useToast();
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    const suggestions = ref([]);
    const showSuggestions = ref(false);
    const isLoading = ref(false);
    let currentRequestId = 0;
    const fetchSuggestions = async (input) => {
      if (input.length < 3) {
        suggestions.value = [];
        showSuggestions.value = false;
        return;
      }
      isLoading.value = true;
      const requestId = ++currentRequestId;
      try {
        const response = await fetch(`/api/geocoder/address-suggestions?query=${encodeURIComponent(input)}`);
        if (requestId !== currentRequestId) return;
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des suggestions");
        }
        const data = await response.json();
        suggestions.value = data;
        showSuggestions.value = data.length > 0;
      } catch (error) {
        console.error("Erreur:", error);
        toast2({
          title: "Uh oh ! Quelque chose s'est mal passé.",
          description: "Erreur lors de la récupération des suggestions",
          variant: "destructive"
        });
        suggestions.value = [];
        showSuggestions.value = false;
      } finally {
        if (requestId === currentRequestId) {
          isLoading.value = false;
        }
      }
    };
    const debouncedFetchSuggestions = useDebounceFn(fetchSuggestions, 300);
    const handleInput = (event) => {
      const value = event.target.value;
      modelValue.value = value;
      if (value) {
        debouncedFetchSuggestions(value);
      } else {
        suggestions.value = [];
        showSuggestions.value = false;
      }
    };
    const formatSuggestion = (suggestion) => {
      const parts = [suggestion.address];
      if (suggestion.city) parts.push(suggestion.city);
      if (suggestion.zipCode) parts.push(suggestion.zipCode);
      if (suggestion.state) parts.push(suggestion.state);
      if (suggestion.country) parts.push(suggestion.country);
      return parts.filter(Boolean).join(", ");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$b), {
        modelValue: unref(modelValue),
        "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : null,
        placeholder: props.placeholder,
        onInput: handleInput,
        id: "address",
        type: "text",
        class: "pl-10"
      }, null, _parent));
      _push(`<span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">`);
      if (!isLoading.value) {
        _push(ssrRenderComponent(unref(MapPin), { class: "w-5 h-5 text-muted-foreground" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Loader2), { class: "w-5 h-5 text-muted-foreground animate-spin" }, null, _parent));
      }
      _push(`</span>`);
      if (showSuggestions.value && suggestions.value.length > 0) {
        _push(`<div class="absolute z-50 w-full mt-1 rounded-xl border bg-card text-card-foreground shadow max-h-60 overflow-auto"><!--[-->`);
        ssrRenderList(suggestions.value, (suggestion) => {
          _push(`<div class="px-4 text-sm py-1 hover:bg-muted cursor-pointer">${ssrInterpolate(formatSuggestion(suggestion))}</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/input/InputAddress.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "rounded-xl border bg-card text-card-foreground shadow",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/Card.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CardContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("p-6 pt-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/CardContent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CardDescription",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        class: unref(cn)("text-sm text-muted-foreground", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/CardDescription.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CardFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex items-center p-6 pt-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/CardFooter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CardHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex flex-col gap-y-1.5 p-6", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/CardHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CardTitle",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({
        class: unref(cn)("font-semibold leading-none tracking-tight", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</h3>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/card/CardTitle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    class: {},
    variant: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(unref(alertVariants)({ variant: _ctx.variant }), props.class),
        role: "alert"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/alert/Alert.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AlertDescription",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("text-sm [&_p]:leading-relaxed", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/alert/AlertDescription.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AlertTitle",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h5${ssrRenderAttrs(mergeProps({
        class: unref(cn)("mb-1 font-medium leading-none tracking-tight", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</h5>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/alert/AlertTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
export {
  _sfc_main$F as _,
  _sfc_main$b as a,
  _sfc_main$8 as b,
  cn as c,
  _sfc_main$2 as d,
  _sfc_main$1 as e,
  _sfc_main$c as f,
  _sfc_main$a as g,
  _sfc_main$4 as h,
  _sfc_main$3 as i,
  _sfc_main$6 as j,
  _sfc_main$7 as k,
  _sfc_main$9 as l
};

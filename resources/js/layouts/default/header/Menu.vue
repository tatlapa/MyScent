<script setup lang="ts">
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { ShoppingCart } from 'lucide-vue-next'
import { Link } from '@inertiajs/vue3'

interface MenuItem {
    name: string
    href: string
}

const menus: MenuItem[] = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About us',
        href: '/',
    },
    {
        name: 'Documentation',
        href: '/',
    },
    {
        name: 'Community',
        href: '/',
    },
    {
        name: 'Shop',
        href: '/',
    }
]
</script>

<template>
    <div class="hidden xl:block absolute left-1/2 -translate-x-1/2">
        <NavigationMenu>
            <NavigationMenuList class="rounded-full bg-black/90 border border-neutral-800 px-3 shadow-lg backdrop-blur flex items-center">
                <NavigationMenuItem v-for="(menu, index) in menus" :key="index">
                    <NavigationMenuLink
                        :href="menu.href"
                        class="relative block px-3 py-2.5 text-sm font-medium text-white hover:text-blue-300 transition-colors"
                    >
                        {{ menu.name }}
                        <span
                            class="absolute inset-x-1 -bottom-0.5 h-px bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 opacity-0 transition-all duration-300 scale-x-0 hover:opacity-100 hover:scale-100"
                        />
                        <span
                            class="absolute inset-0 overflow-hidden transition-all duration-300 opacity-0 scale-0 origin-bottom hover:opacity-100 hover:scale-100"
                        >
                            <span
                                class="absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-blue-500/20 to-transparent blur"
                            />
                        </span>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <Link
                    :href="route('cart.index')"
                    class="relative flex items-center px-3 py-2.5 text-sm font-medium text-white hover:text-blue-300 transition-colors group"
                >
                    <ShoppingCart class="w-5 h-5" />
                    <span v-if="$page.props.cart.count > 0"
                          class="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 rounded-full transform transition-all duration-300 group-hover:scale-110">
                        {{ $page.props.cart.count }}
                    </span>
                    <span
                        class="absolute inset-x-1 -bottom-0.5 h-px bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 opacity-0 transition-all duration-300 scale-x-0 group-hover:opacity-100 group-hover:scale-100"
                    />
                    <span
                        class="absolute inset-0 overflow-hidden transition-all duration-300 opacity-0 scale-0 origin-bottom group-hover:opacity-100 group-hover:scale-100"
                    >
                        <span
                            class="absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-blue-500/20 to-transparent blur"
                        />
                    </span>
                </Link>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
</template>

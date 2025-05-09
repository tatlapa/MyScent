<script setup lang="ts">
import {Logo, Menu, Currency, Language} from './index';
import Theme from "@/layouts/default/header/Theme.vue";
</script>

<template>
    <header class="absolute w-full z-50">
        <nav class="max-w-screen-2xl container pt-10 px-4 sm:px-6 lg:px-12">
            <div class="flex flex-wrap justify-between items-center mx-auto">
                <Logo/>
                <div class="flex items-center space-x-2">
                    <Theme/>
                    <Language/>
                    <Currency/>
                </div>
                <Menu/>
            </div>
        </nav>
    </header>
</template>

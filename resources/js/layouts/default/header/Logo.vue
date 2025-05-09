<script setup lang="ts">
import {Link} from "@inertiajs/vue3";
</script>

<template>
    <Link :href="route('home')" class="flex items-center gap-x-2 text-white select-none">
        <img src="@/../assets/img/logo/logo-picto.png" alt="Logo Picto" class="h-8 dark:hidden"/>
        <img src="@/../assets/img/logo/logo-text.png" alt="Logo Text" class="h-3 dark:hidden"/>
        <img src="@/../assets/img/logo/logo-picto-light.png" alt="Logo Picto" class="h-8 hidden dark:block"/>
        <img src="@/../assets/img/logo/logo-text-light.png" alt="Logo Text" class="h-3 hidden dark:block"/>
    </Link>
</template>

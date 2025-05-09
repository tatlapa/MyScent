<script setup lang="ts">
import { Instagram, Facebook, Twitter } from 'lucide-vue-next'
</script>

<template>
    <footer class="bg-black text-white pt-16 pb-8">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Footer Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
                <!-- Explore -->
                <div>
                    <h3 class="font-title text-lg font-medium mb-4">Explore</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Personalized Fragrance</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Limited Editions</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                <!-- Customer Service -->
                <div>
                    <h3 class="font-title text-lg font-medium mb-4">Customer Service</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Shipping & Returns</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Policies</a></li>
                    </ul>
                </div>

                <!-- About -->
                <div>
                    <h3 class="font-title text-lg font-medium mb-4">About</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Story</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Vision for the Future</a></li>
                    </ul>
                </div>

                <!-- Social Media -->
                <div>
                    <h3 class="font-title text-lg font-medium mb-4">Follow Us</h3>
                    <div class="flex gap-4">
                        <a href="#" class="text-gray-400 hover:text-white transition-all hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            <Instagram class="w-6 h-6" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-all hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            <Facebook class="w-6 h-6" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-all hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            <Twitter class="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="pt-8 text-center text-gray-400 text-sm">
                <p>&copy; 2024 MyScent. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const { theme, toggleTheme } = useTheme()
const menuOpen = ref(false)
</script>



<template>
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
    <div class="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 font-bold text-gray-900 dark:text-white text-lg">
        ⚡ <span>Vue Modern</span>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-6 font-medium">
        <router-link to="/" class="hover:text-blue-600 dark:hover:text-blue-400">Home</router-link>
        <router-link to="/about" class="hover:text-blue-600 dark:hover:text-blue-400">About</router-link>
        <router-link to="/services" class="hover:text-blue-600 dark:hover:text-blue-400">Services</router-link>
        <router-link to="/contact" class="hover:text-blue-600 dark:hover:text-blue-400">Contact</router-link>
      </nav>

      <!-- Actions -->
      
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <nav class="flex flex-col p-4 gap-4 font-medium">
        <router-link to="/" class="hover:text-blue-600 dark:hover:text-blue-400">Home</router-link>
        <router-link to="/about" class="hover:text-blue-600 dark:hover:text-blue-400">About</router-link>
        <router-link to="/services" class="hover:text-blue-600 dark:hover:text-blue-400">Services</router-link>
        <router-link to="/contact" class="hover:text-blue-600 dark:hover:text-blue-400">Contact</router-link>
      </nav>
    </div>
  </header>
</template>
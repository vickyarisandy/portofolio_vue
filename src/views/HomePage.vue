<template>
  <div class="p-6 text-center">
    <h1 class="text-3xl font-bold text-blue-600">Hello Vue 3 + Vite + Tailwind 🚀</h1>
    <p class="mt-2">Go to <router-link to="/about" class="text-red-500 underline">About</router-link></p>

    <div class="mt-4">
      <button @click="counter.increment" class="px-4 py-2 bg-green-500 text-white rounded">
        Count: {{ counter.count }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
const counter = useCounterStore();
</script>

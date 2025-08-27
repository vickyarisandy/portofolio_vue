<template>
  <section 
    class="text-center py-20 transition-all duration-1000 ease-out"
    :class="{'opacity-0 blur-sm': !isVisible, 'opacity-100 blur-0': isVisible}"
  >
    <h1 class="font-geist text-4xl font-bold mb-4">
      Selamat Datang di Vue Modern
    </h1>
    <p class="font-geist text-gray-400">
      Ini adalah halaman utama dengan layout full desktop.
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100) // kasih delay sedikit biar smooth
})
</script>

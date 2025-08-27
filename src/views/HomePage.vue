<template>
  <section class="relative text-center py-20 overflow-hidden">
    <!-- Slider -->
    <div class="relative w-full max-w-4xl mx-auto h-96 rounded-2xl overflow-hidden">
      <transition name="fade-blur" mode="out-in">
        <img 
          :key="currentIndex" 
          :src="images[currentIndex]" 
          alt="Slider Image" 
          class="w-full h-full object-cover"
        />
      </transition>
    </div>

    <!-- Text -->
    <div 
      class="mt-8 transition-all duration-1000 ease-out"
      :class="{'opacity-0 blur-sm': !isVisible, 'opacity-100 blur-0': isVisible}"
    >
      <h1 class="font-geist text-4xl font-bold mb-4">
        Selamat Datang di Vue Modern
      </h1>
      <p class="font-geist text-gray-400">
        Ini adalah halaman utama dengan slider animasi.
      </p>
    </div>

    <!-- Indicator -->
    <div class="flex justify-center mt-4 space-x-2">
      <button
        v-for="(img, idx) in images"
        :key="idx"
        class="w-3 h-3 rounded-full"
        :class="currentIndex === idx ? 'bg-white' : 'bg-gray-500'"
        @click="currentIndex = idx"
      ></button>
    </div>
  </section>
  <CardSlider />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CardSlider from '../components/CardSlider.vue'
const images = [
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1016/800/400",
  "https://picsum.photos/id/1018/800/400",
]

const currentIndex = ref(0)
const isVisible = ref(false)
let intervalId = null

// Fade in text
onMounted(() => {
  setTimeout(() => { isVisible.value = true }, 200)

  // Auto slide setiap 4 detik
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 4000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style>
/* Transition untuk gambar */
.fade-blur-enter-active,
.fade-blur-leave-active {
  transition: all 1s ease;
}
.fade-blur-enter-from {
  opacity: 0;
  filter: blur(10px);
}
.fade-blur-leave-to {
  opacity: 0;
  filter: blur(10px);
}
</style>

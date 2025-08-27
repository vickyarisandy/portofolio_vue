<template>
  <section class="py-16 bg-gray-900 text-white">
    <h2 class="text-3xl font-geist font-bold text-center mb-10">
      Rekomendasi Konten
    </h2>

    <!-- Wrapper slider -->
    <div class="relative">
      <!-- Tombol prev -->
      <button
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full z-10 hover:bg-cyan-500 transition"
        @click="scrollPrev"
      >
        ‹
      </button>

      <!-- Scroll container -->
      <div
        ref="scrollContainer"
        class="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-12 py-4 scrollbar-hide"
      >
        <div
          v-for="(card, idx) in cards"
          :key="idx"
          class="min-w-[280px] md:min-w-[320px] bg-gray-800 rounded-2xl shadow-lg snap-center flex-shrink-0 overflow-hidden"
        >
          <img :src="card.image" alt="card" class="h-40 w-full object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">{{ card.title }}</h3>
            <p class="text-gray-400 mb-3">{{ card.desc }}</p>
            <button class="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition">
              Detail
            </button>
          </div>
        </div>
      </div>

      <!-- Tombol next -->
      <button
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full z-10 hover:bg-cyan-500 transition"
        @click="scrollNext"
      >
        ›
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const cards = [
  {
    title: "Artikel Teknologi",
    desc: "Ikuti tren terbaru dunia teknologi.",
    image: "https://picsum.photos/id/1011/600/400",
  },
  {
    title: "Desain Modern",
    desc: "Inspirasi desain web kekinian.",
    image: "https://picsum.photos/id/1012/600/400",
  },
  {
    title: "Tutorial Vue",
    desc: "Belajar Vue.js dengan mudah.",
    image: "https://picsum.photos/id/1013/600/400",
  },
  {
    title: "Tips Produktivitas",
    desc: "Cara kerja lebih efektif.",
    image: "https://picsum.photos/id/1015/600/400",
  },
  {
    title: "UI/UX Tren",
    desc: "Gaya UI terbaru untuk 2025.",
    image: "https://picsum.photos/id/1016/600/400",
  },
]

const scrollContainer = ref(null)

const scrollNext = () => {
  scrollContainer.value.scrollBy({ left: 340, behavior: 'smooth' })
}
const scrollPrev = () => {
  scrollContainer.value.scrollBy({ left: -340, behavior: 'smooth' })
}
</script>

<style>
/* sembunyikan scrollbar */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

<template>
  <section class="py-16 bg-gray-900 text-white min-h-screen">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Back link -->
      <router-link to="/" class="text-cyan-400 hover:underline">← Kembali</router-link>

      <!-- Detail konten dengan animasi -->
      <transition name="fade-blur" mode="out-in">
        <div :key="currentIndex" class="mt-6 bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <img :src="content.image" alt="detail" class="w-full h-64 object-cover" />
          <div class="p-6">
            <h1 class="text-3xl font-bold mb-4">{{ content.title }}</h1>

            <!-- Meta data -->
            <div class="flex items-center text-sm text-gray-400 space-x-4 mb-4">
              <span>📅 {{ content.date }}</span>
              <span>📂 {{ content.category }}</span>
              <span>✍️ {{ content.author }}</span>
            </div>

            <p class="text-gray-300 leading-relaxed mb-6">{{ content.desc }}</p>
            <p class="text-gray-400 mb-6">
              Konten ini dibuat untuk memberikan informasi lebih lengkap mengenai
              <span class="font-semibold">{{ content.title }}</span>.
            </p>

            <!-- Tombol CTA -->
            <div class="flex gap-4 mt-6">
              <a
                :href="`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(content.title)}`"
                target="_blank"
                class="px-5 py-2 bg-green-600 hover:bg-green-500 rounded-lg transition"
              >
                📲 Pesan via WhatsApp
              </a>
              <button class="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition">
                🔗 Bagikan
              </button>
            </div>
          </div>
        </div>
      </transition>

      <!-- Navigasi Previous & Next -->
      <div class="mt-12 grid md:grid-cols-3 gap-6">
        <!-- Previous Post -->
        <router-link
          v-if="prevPost"
          :to="{ name: 'ContentDetail', params: { id: prevPost.index } }"
          class="block bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition md:col-span-1"
        >
          <img :src="prevPost.data.image" alt="prev" class="w-full h-32 object-cover" />
          <div class="p-4">
            <h4 class="text-sm text-gray-400 mb-1">← Previous</h4>
            <h3 class="text-lg font-semibold">{{ prevPost.data.title }}</h3>
          </div>
        </router-link>

        <!-- Next 2 posts (2 kolom) -->
        <div class="md:col-span-2">
          <h3 class="text-xl font-bold mb-4">Next Posts</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <router-link
              v-for="(item, idx) in nextPosts"
              :key="idx"
              :to="{ name: 'ContentDetail', params: { id: item.index } }"
              class="block bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition"
            >
              <img :src="item.data.image" alt="next" class="w-full h-32 object-cover" />
              <div class="p-4">
                <h4 class="text-sm text-gray-400 mb-1">Next →</h4>
                <h3 class="text-lg font-semibold">{{ item.data.title }}</h3>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Dummy data
const cards = [
  { title: "Artikel Teknologi", desc: "Ikuti tren terbaru dunia teknologi.", image: "https://picsum.photos/id/1011/600/400", date: "12 Jan 2025", category: "Teknologi", author: "Admin" },
  { title: "Desain Modern", desc: "Inspirasi desain web kekinian.", image: "https://picsum.photos/id/1012/600/400", date: "14 Jan 2025", category: "Desain", author: "Ghandiva Team" },
  { title: "Tutorial Vue", desc: "Belajar Vue.js dengan mudah.", image: "https://picsum.photos/id/1013/600/400", date: "16 Jan 2025", category: "Pemrograman", author: "Vicky" },
  { title: "Tips Produktivitas", desc: "Cara kerja lebih efektif.", image: "https://picsum.photos/id/1015/600/400", date: "18 Jan 2025", category: "Produktivitas", author: "Tim Editorial" },
  { title: "UI/UX Tren", desc: "Gaya UI terbaru untuk 2025.", image: "https://picsum.photos/id/1016/600/400", date: "20 Jan 2025", category: "UI/UX", author: "Designer" },
]

const currentIndex = ref(parseInt(route.params.id))
const content = computed(() => cards[currentIndex.value])
const prevPost = computed(() => {
  const idx = (currentIndex.value - 1 + cards.length) % cards.length
  return { index: idx, data: cards[idx] }
})
const nextPosts = computed(() => [
  { index: (currentIndex.value + 1) % cards.length, data: cards[(currentIndex.value + 1) % cards.length] },
  { index: (currentIndex.value + 2) % cards.length, data: cards[(currentIndex.value + 2) % cards.length] },
])

// Watch agar otomatis update saat route berubah (refresh atau klik next)
watch(() => route.params.id, (newId) => {
  currentIndex.value = parseInt(newId)
})
</script>

<style scoped>
/* Animasi blur + fade */
.fade-blur-enter-active, .fade-blur-leave-active {
  transition: all 0.8s ease;
}
.fade-blur-enter-from, .fade-blur-leave-to {
  opacity: 0;
  filter: blur(10px);
}
.fade-blur-enter-to, .fade-blur-leave-from {
  opacity: 1;
  filter: blur(0);
}
</style>

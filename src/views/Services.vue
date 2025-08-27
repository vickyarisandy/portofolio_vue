<script setup>
import { ref } from "vue"

const activeIndex = ref(null)
const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const phone = "6281234567890" // nomor WA kamu

const services = [
  {
    title: "Web Development",
    desc: "Membangun aplikasi web modern dengan teknologi terbaru.",
    price: "Rp 15.000.000",
    features: ["Responsive Design", "Integrasi API", "SEO Friendly"],
    terms: [
      "Harga dapat berubah sesuai kebutuhan fitur tambahan.",
      "Waktu pengerjaan 1-2 bulan.",
      "Pembayaran DP 50% di awal, sisa setelah selesai.",
    ],
  },
  {
    title: "UI/UX Design",
    desc: "Mendesain pengalaman pengguna yang menarik dan intuitif.",
    price: "Rp 8.000.000",
    features: ["Wireframe & Prototyping", "Desain Mobile & Desktop", "Handoff ke Developer"],
    terms: [
      "Revisi maksimal 3 kali.",
      "File akhir diberikan dalam format Figma.",
      "Tidak termasuk implementasi ke kode.",
    ],
  },
  {
    title: "Consulting",
    desc: "Membantu perusahaan mengoptimalkan solusi teknologi.",
    price: "Rp 5.000.000 / sesi",
    features: ["Analisis Bisnis", "Rekomendasi Teknologi", "Dokumentasi Lengkap"],
    terms: [
      "Durasi konsultasi per sesi adalah 2 jam.",
      "Jadwal disesuaikan dengan ketersediaan tim.",
      "Biaya transportasi ditanggung klien (jika onsite).",
    ],
  },
]
</script>

<template>
  <section class="max-w-6xl mx-auto py-20 px-6">
    <h1 class="text-3xl font-bold mb-12 text-center">Layanan & Harga</h1>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="relative bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl transition"
      >
        <!-- Judul & Deskripsi -->
        <h3 class="font-semibold text-xl mb-2 text-gray-900 dark:text-white">
          {{ service.title }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">{{ service.desc }}</p>

        <!-- Harga -->
        <p class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          {{ service.price }}
        </p>

        <!-- Fitur -->
        <ul class="mb-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li v-for="(f, i) in service.features" :key="i" class="flex items-center gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full"></span> {{ f }}
          </li>
        </ul>

        <!-- Tombol WA -->
        <a
          :href="`https://wa.me/${phone}?text=Halo%20saya%20ingin%20memesan%20layanan%20${encodeURIComponent(service.title)}`"
          target="_blank"
          class="block text-center w-full py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-500 transition"
        >
          Pesan Sekarang
        </a>

        <!-- Accordion S&K -->
        <div class="mt-4">
          <button
            class="w-full text-left text-sm font-semibold flex justify-between items-center py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
            @click="toggleAccordion(index)"
          >
            <span>Syarat & Ketentuan</span>
            <span>{{ activeIndex === index ? "−" : "+" }}</span>
          </button>
          <transition name="fade">
            <ul
              v-if="activeIndex === index"
              class="mt-2 pl-4 list-disc space-y-1 text-xs text-gray-500 dark:text-gray-400"
            >
              <li v-for="(t, i) in service.terms" :key="i">{{ t }}</li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>

<template>
  <section class="relative max-w-6xl mx-auto py-20 px-6 overflow-hidden">
    <!-- Background effect -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-50 animate-pulse"
    ></div>

    <!-- Konten utama -->
    <div class="relative text-center mb-12">
      <h1
        class="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent animate-fadeInUp"
      >
        Tentang Kami
      </h1>
      <p
        class="text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-200"
      >
        Kami membangun template modern berbasis <span class="font-semibold text-cyan-400">Vue 3</span> + 
        <span class="font-semibold text-pink-400">TailwindCSS</span> agar developer lebih cepat 
        membangun aplikasi web dengan tampilan profesional.
      </p>
    </div>

    <!-- Tim cards -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10"
    >
      <div
        v-for="(member, i) in team"
        :key="i"
        class="bg-gray-900/60 rounded-2xl shadow-xl p-6 hover:scale-105 hover:shadow-cyan-500/20 transition-transform duration-300 backdrop-blur-md animate-fadeInUp"
        :style="{ animationDelay: `${i * 150}ms` }"
      >
        <img
          :src="member.image"
          class="w-24 h-24 mx-auto rounded-full mb-4 ring-4 ring-cyan-500/30"
          alt="member"
        />
        <h3 class="text-xl font-semibold text-white">{{ member.name }}</h3>
        <p class="text-cyan-400 text-sm mb-2">{{ member.role }}</p>
        <p class="text-gray-400 text-sm">{{ member.desc }}</p>
      </div>
    </div>

    <!-- CTA -->
    <div class="relative mt-12 text-center">
      <router-link
        to="/"
        class="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition"
      >
        Back Home
      </router-link>
    </div>
  </section>
</template>

<script setup>
const team = [
  {
    name: "Vicky Arisandy",
    role: "Founder",
    desc: "Membangun arsitektur modern Vue + Tailwind.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Sarah",
    role: "UI/UX Designer",
    desc: "Menciptakan desain minimalis dan interaktif.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Michael",
    role: "Frontend Dev",
    desc: "Mengimplementasikan komponen modern dengan Vue.",
    image: "https://i.pravatar.cc/150?img=3",
  },
]
</script>

<style scoped>
/* Animasi fade/slide */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInUp {
  animation: fadeInUp 0.8s ease forwards;
}
.animate-fadeIn {
  animation: fadeInUp 1s ease forwards;
}
.delay-200 {
  animation-delay: 200ms;
}
</style>

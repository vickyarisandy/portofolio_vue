<template>
  <section class="relative max-w-5xl mx-auto py-20 px-6 overflow-hidden">
    <!-- Background blur gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-50 animate-pulse"
    ></div>

    <!-- Judul -->
    <div class="relative text-center mb-12">
      <h1
        class="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent animate-fadeInUp"
      >
        Hubungi Kami
      </h1>
      <p
        class="text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fadeIn delay-200"
      >
        Punya pertanyaan atau ide kolaborasi? Silakan isi form di bawah atau
        hubungi kami langsung melalui info kontak.
      </p>
    </div>

    <!-- Kontainer grid -->
    <div class="grid md:grid-cols-2 gap-10 relative z-10">
      <!-- Form Kontak -->
      <form
        class="space-y-4 bg-gray-900/60 p-8 rounded-2xl shadow-xl backdrop-blur-md animate-fadeInUp"
      >
        <input
          type="text"
          placeholder="Nama"
          class="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
        <input
          type="email"
          placeholder="Email"
          class="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
        />
        <textarea
          placeholder="Pesan"
          class="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white h-32 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
        ></textarea>
        <button
          class="px-6 py-3 w-full rounded-lg bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 transition"
        >
          Kirim Pesan
        </button>
      </form>

      <!-- Info Kontak -->
      <div class="space-y-6 animate-fadeInUp" style="animation-delay: 300ms">
        <div
          class="p-6 bg-gray-900/60 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition"
        >
          <h3 class="text-xl font-semibold text-white mb-2">Alamat</h3>
          <p class="text-gray-400">Jl. Modern No. 123, Jakarta</p>
          <!-- Google Maps Embed -->
          <div class="mt-4 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.614976233314!2d106.82718331529583!3d-6.175392495534366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e5f1234567%3A0xabcdef1234567890!2sMonas%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="200"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div
          class="p-6 bg-gray-900/60 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition"
        >
          <h3 class="text-xl font-semibold text-white mb-2">Email</h3>
          <p class="text-gray-400">hello@modernvue.com</p>
        </div>

        <div
          class="p-6 bg-gray-900/60 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition"
        >
          <h3 class="text-xl font-semibold text-white mb-2">Telepon</h3>
          <p class="text-gray-400">+62 812 3456 7890</p>
        </div>
      </div>
    </div>
  </section>
</template>

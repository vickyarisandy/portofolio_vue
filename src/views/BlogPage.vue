<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Blog Page</h1>

    <div class="grid gap-4">
      <div v-for="post in posts" :key="post.id" class="p-4 bg-white shadow rounded">
        <h2 class="text-xl font-semibold">{{ post.title }}</h2>
        <p class="text-gray-600 mt-2">{{ post.excerpt }}</p>
        <router-link
          :to="'/blog/' + post.id"
          class="text-blue-500 underline mt-2 inline-block"
        >
          Read more
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  { id: 1, title: "Belajar Vue 3", excerpt: "Dasar-dasar Vue 3 untuk pemula..." },
  { id: 2, title: "Mengenal Vite", excerpt: "Kenapa Vite lebih cepat dari Webpack..." },
  { id: 3, title: "Tailwind di Vue", excerpt: "Cara integrasi TailwindCSS di Vue 3..." },
];
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-2">Blog Detail</h1>
    <p class="text-gray-700">ID Artikel: {{ id }}</p>
    <router-link to="/blog" class="text-blue-500 underline mt-4 inline-block">
      ⬅ Kembali ke Blog
    </router-link>
  </div>
</template>

<script setup>
defineProps(["id"]);
</script>

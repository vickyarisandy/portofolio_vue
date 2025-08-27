<script setup>
const year = new Date().getFullYear()
</script>


<template>
<footer class="border-t border-gray-800 mt-12">
<div class="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
<p>© {{ year }} Vue Modern. Dibuat dengan ❤ dan Vue 3.</p>
<ul class="flex gap-4">
<li><a href="#kebijakan" class="hover:text-gray-200">Kebijakan</a></li>
<li><a href="#privasi" class="hover:text-gray-200">Privasi</a></li>
<li><a href="#kontak" class="hover:text-gray-200">Kontak</a></li>
</ul>
</div>
</footer>
</template>
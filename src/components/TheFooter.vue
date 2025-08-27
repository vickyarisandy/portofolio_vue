<script setup>
const year = new Date().getFullYear()
</script>

<template>
    <footer class="relative border-t border-gray-800 mt-12 overflow-hidden">
        <!-- Background blur gradient -->
        <div
            class="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-40 animate-pulse">
        </div>

        <!-- Konten -->
        <div
            class="relative max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 animate-fadeInUp">
            <!-- Copyright -->
            <p class="text-sm">
                © {{ year }}
                <a href="https://ghandiva.biz.id/" target="_blank"
                    class="font-semibold text-white hover:text-blue-400 transition">
                    Ghandiva
                </a>.
               
            </p>


            <!-- Menu -->
            <ul class="flex gap-6 text-sm">
                <li>
                    <RouterLink to="/kebijakan" class="relative group hover:text-white transition">
                        Kebijakan
                        <span
                            class="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/privasi" class="relative group hover:text-white transition">
                        Privasi
                        <span
                            class="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact" class="relative group hover:text-white transition">
                        Kontak
                        <span
                            class="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </RouterLink>
                </li>
            </ul>

            <!-- Sosial Media -->
            <div class="flex gap-4">
                <a href="https://github.com" target="_blank"
                    class="text-gray-400 hover:text-white hover:scale-110 transition">
                    <i class="fab fa-github text-xl"></i>
                </a>
                <a href="https://linkedin.com" target="_blank"
                    class="text-gray-400 hover:text-blue-400 hover:scale-110 transition">
                    <i class="fab fa-linkedin text-xl"></i>
                </a>
                <a href="https://instagram.com" target="_blank"
                    class="text-gray-400 hover:text-pink-500 hover:scale-110 transition">
                    <i class="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://twitter.com" target="_blank"
                    class="text-gray-400 hover:text-sky-400 hover:scale-110 transition">
                    <i class="fab fa-twitter text-xl"></i>
                </a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 0.8s ease forwards;
}
</style>

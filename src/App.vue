<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
    <div>
    <!-- Navbar -->
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <router-link to="/" class="text-xl font-bold text-blue-600">
              MyVueApp
            </router-link>
          </div>

          <!-- Menu -->
          <div class="flex space-x-6 items-center">
            <router-link
              to="/"
              class="text-gray-700 hover:text-blue-600"
              active-class="font-semibold text-blue-600"
              exact
            >
              Home
            </router-link>
            <router-link
              to="/about"
              class="text-gray-700 hover:text-blue-600"
              active-class="font-semibold text-blue-600"
            >
              About
            </router-link>
            <router-link
              to="/blog"
              class="text-gray-700 hover:text-blue-600"
              active-class="font-semibold text-blue-600"
            >
              Blog
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import BlogPage from "../views/BlogPage.vue"; // 👉 Tambah import
import BlogDetailPage from "../views/BlogDetailPage.vue"; // 👉 Tambah import


const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: AboutPage },
    { path: "/blog", name: "Blog", component: BlogPage }, // 👉 Tambah route
      { path: "/blog/:id", name: "BlogDetail", component: BlogDetailPage, props: true }, // 👉 route dinamis

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

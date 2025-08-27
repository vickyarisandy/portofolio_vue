import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import BlogPage from "../views/BlogPage.vue"; // 👉 Tambah import
import BlogDetailPage from "../views/BlogDetailPage.vue"; // 👉 Tambah import
import ServicesPage from '../views/Services.vue'
import ContactPage from '../views/Contact.vue'
import KebijakanPage from "../views/KebijakanPage.vue"
import PrivasiPage from "../views/PrivasiPage.vue"
import ContentDetailPage from '../views/ContentDetail.vue'


const routes = [
    { path: "/", name: "Home", component: HomePage },
    { path: "/about", name: "About", component: AboutPage },
    { path: "/blog", name: "Blog", component: BlogPage }, // 👉 Tambah route
    { path: "/blog/:id", name: "BlogDetail", component: BlogDetailPage, props: true }, // 👉 route dinamis
    { path: '/services', name: 'Services', component: ServicesPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
    { path: "/kebijakan", name: "Kebijakan", component: KebijakanPage },
  { path: "/privasi", name: "Privasi", component: PrivasiPage },
   { path: '/content/:id', name: 'ContentDetail', component: ContentDetailPage, props: true },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

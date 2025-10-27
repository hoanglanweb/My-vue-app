import { createRouter, createWebHistory } from "vue-router";
import WebMain from "@/components/WebMain.vue";
import About from "@/pages/about.vue";
import prduct from "@/pages/prduct.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: WebMain,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/product",
    name: "Products",
    component: prduct,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

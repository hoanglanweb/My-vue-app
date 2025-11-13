import { createRouter, createWebHistory } from "vue-router";
import WebMain from "@/components/WebMain.vue";
import About from "@/pages/about.vue";
import ProductsDetails from "@/components/ProductsDetails.vue";
import prduct from "@/pages/prduct.vue";
import ContactPage from "@/pages/contactPage.vue";
import CartShopping from "@/components/CartShopping.vue";

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
    name: "Product",
    component: prduct,
    props: true,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartShopping,
  },
  {
    path: "/product/:id",
    name: "ProductsDetails",
    component: ProductsDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;

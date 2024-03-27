import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import DetailProduct from "@/pages/DetailProduct.vue";
import AllProducts from "@/pages/AllProducts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/detail-product",
      name: "DetailProduct",
      component: DetailProduct,
    },
    {
      path: "/all-product",
      name: "AllProduct",
      component: AllProducts,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import DetailProduct from "@/pages/DetailProduct.vue";
import AllProducts from "@/pages/AllProducts.vue";
import Layout from "@/components/Layout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        layout: Layout,
      },
    },
    {
      path: "/products/:id",
      name: "DetailProduct",
      component: DetailProduct,
      meta: {
        layout: Layout,
      },
    },
    {
      path: "/products",
      name: "AllProduct",
      component: AllProducts,
      meta: {
        layout: Layout,
      },
    },
  ],
});

export default router;

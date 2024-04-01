import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import DetailProduct from "@/pages/DetailProduct.vue";
import AllProducts from "@/pages/AllProducts.vue";
import Layout from "@/components/Layout.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        layout: Layout,
      },
    },
    {
      path: "/products/:id",
      component: DetailProduct,
    },
    {
      path: "/products",
      component: AllProducts,
      meta: {
        layout: Layout,
      },
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
  ],
});

export default router;

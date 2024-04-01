<script setup lang="ts">
import SkeletonAllProducts from "../components/SkeletonAllProducts.vue";
import CardAllProducts from "../components/CardAllProducts.vue";
import Layout from "../components/Layout.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const products = ref(null);
const loading = ref(true);

const fetchData = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    products.value = response.data;
  } catch (error) {
    console.error("Error", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <Layout>
    <!-- when loading true -->
    <SkeletonAllProducts class="w-100 h-100" v-if="loading" />

    <!-- when loading false / fetching -->
    <div class="gap-4 flex justify-center mt-10" v-if="products">
      <!-- category -->
    </div>
    <div
      class="grid grid-cols-2 gap-2 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      v-if="products"
    >
      <CardAllProducts v-for="product in products" :key="product" :product="product" />
    </div>
  </Layout>
</template>

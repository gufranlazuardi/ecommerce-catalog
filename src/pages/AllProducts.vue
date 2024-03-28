<script setup>
import Layout from "../components/Layout.vue";
import CardAllProducts from "../components/CardAllProducts.vue";
import { onMounted, ref } from "vue";
import { getAllProducts } from "../utils/apis/api";

const products = ref(null);

const fetchData = async () => {
  try {
    const response = await getAllProducts();
    products.value = response.data;
    console.log(products.value);
  } catch (error) {
    console.error("Error", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <Layout>
    <div class="grid grid-cols-5" v-if="products">
      <CardAllProducts v-for="product in products" :key="product.id" :product="product" />
    </div>
  </Layout>
</template>

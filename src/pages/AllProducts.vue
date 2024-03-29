<script setup>
import Layout from "../components/Layout.vue";
import CardAllProducts from "../components/CardAllProducts.vue";
import { onMounted, ref } from "vue";
// import { getAllProducts } from "../utils/apis/api";
import axios from "axios";

const products = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    products.value = response.data;
    console.log("products :", products.value);
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
    <div class="grid grid-cols-5 gap-2" v-if="products">
      <CardAllProducts v-for="product in products" :key="product.id" :product="product" class="" />
    </div>
  </Layout>
</template>

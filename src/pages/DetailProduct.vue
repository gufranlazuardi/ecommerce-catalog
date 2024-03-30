<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const product = ref(null);
const route = useRoute();
const fetchDetail = async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${route.params.id}`);
    product.value = response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

onMounted(() => {
  fetchDetail();
});
</script>

<template>
  <div class="w-full h-screen">
    <div class="h-3/4 bg-[#FDE2FF]" v-if="product">
      <CardProductDetail :detail="product" key="product.id" />
    </div>
  </div>
</template>

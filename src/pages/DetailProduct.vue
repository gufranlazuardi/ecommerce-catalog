<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axiosWithConfig from "../utils/axiosWithConfig";

const router = useRouter();
const data = ref(null);

const fetchDetail = async () => {
  try {
    const productId = router.currentRoute.value.params.id; // Mendapatkan ID dari URL
    const response = await axiosWithConfig.get(`/products/${productId}`); // Menggunakan ID dalam URL API
    data.value = response.data;
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
    <div class="h-3/4 bg-[#FDE2FF]">
      <CardProductDetail :product="data" />
    </div>
  </div>
</template>

<script setup>
import Separator from "@/components/ui/separator/Separator.vue";
import SkeletonDetail from "../components/SkeletonDetail.vue";
import sadface from "../assets/sad-face.png";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";

const product = ref({});
const loading = ref(true);
const route = useRoute();

const fetchDetail = async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${route.params.id}`);
    product.value = response.data;
  } catch (error) {
    console.error("Error:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchDetail();
});
</script>

<template>
  <div v-if="loading">
    <SkeletonDetail v-if="loading" />
  </div>

  <div class="flex flex-col justify-center items-center h-screen relative" v-if="product.id && !loading">
    <!-- background warna -->
    <div
      v-bind:style="{
        backgroundColor:
          product.category === 'women\'s clothing'
            ? '#FDE2FF'
            : product.category === 'men\'s clothing'
            ? '#D6E6FF'
            : 'white',
      }"
      class="w-full h-3/4 top-0 absolute z-0"
    ></div>

    <div
      class="sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row w-5/6 h-fit border px-12 py-8 gap-10 rounded-lg shadow-lg z-10 bg-white"
    >
      <img
        :src="product.image"
        alt="{{ product.title }}"
        class="xl:max-w-[20rem] xl:max-h-[30rem] sm:max-w-[15rem] sm:max-h-[25rem] md:max-w-[15rem] md:max-h-[25rem] lg:max-w-[15rem] lg:max-h-[25rem]"
      />
      <div class="flex flex-col gap-2">
        <h1 class="text-[28px] font-semibold text-[#720060]">{{ product.title }}</h1>
        <div class="flex justify-between mt-2">
          <p class="text-[18px] font-light">{{ product.category }}</p>
          <div class="flex items-center gap-2">
            <p class="text-[18px] font-light">{{ product.rating.rate }}</p>
            <div class="flex gap-0.5">
              <div class="w-4 h-4 bg-[#720060] border-[#720060] rounded-full"></div>
              <div class="w-4 h-4 bg-[#720060] border-[#720060] rounded-full"></div>
              <div class="w-4 h-4 bg-[#720060] border-[#720060] rounded-full"></div>
              <div class="w-4 h-4 bg-[#720060] border-[#720060] rounded-full"></div>
              <div class="w-4 h-4 bg-[white] border border-[#720060] rounded-full"></div>
            </div>
          </div>
        </div>
        <Separator />
        <p class="text-[18px] pb-12 mt-2">{{ product.description }}</p>
        <Separator />
        <p class="text-[28px] text-[#720060] font-semibold">$ {{ product.price }}</p>
        <div class="flex gap-2">
          <div class="w-1/2 h-[42px] border bg-[#720060] text-center text-white py-2 rounded-md">Buy Now</div>

          <div
            class="w-1/2 h-[42px] border text-center py-2 rounded-md border-[#720060] text-[#720060] cursor-pointer"
            @click="handleNextProduct"
          >
            Next Product
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="!product.id && !loading">
    <div class="flex flex-col justify-center items-center w-full h-screen">
      <div class="w-full h-3/4 top-0 absolute z-0 bg-[#D8D7D7]"></div>
      <div class="flex justify-center items-center border w-5/6 h-fit z-10 bg-white py-10">
        <img :src="sadface" alt="sadface" class="items-center justify-center" />
        <div class="absolute flex flex-col items-center justify-center gap-2">
          <p class="text-[20px]">This product is unavailable to show</p>
          <div class="flex w-fit h-fit p-1 px-[10rem] border border-black justify-center items-center">
            <p class="font-bold">Next Product</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

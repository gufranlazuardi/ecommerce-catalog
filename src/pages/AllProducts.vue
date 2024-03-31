<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import SkeletonAllProducts from "../components/SkeletonAllProducts.vue";
import CardAllProducts from "../components/CardAllProducts.vue";
import Layout from "../components/Layout.vue";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";
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
      <div class="w-fit h-10 p-2 justify-center flex items-center">
        <Popover>
          <PopoverTrigger>
            <p class="text-sm">Category</p>
          </PopoverTrigger>
          <PopoverContent>
            <p class="cursor-pointer p-2 text-sm hover:bg-slate-100 hover:transition-colors hover:p-2">
              Men's Clothing
            </p>
            <p class="cursor-pointer p-2 text-sm hover:bg-slate-100 hover:transition-colors hover:p-2">
              Women's Clothing
            </p>
            <p class="cursor-pointer p-2 text-sm hover:bg-slate-100 hover:transition-colors hover:p-2">Jewelery</p>
            <p class="cursor-pointer p-2 text-sm hover:bg-slate-100 hover:transition-colors hover:p-2">Electronics</p>
          </PopoverContent>
        </Popover>
      </div>
      <!-- search -->
      <div class="relative w-3/4 items-center">
        <Input id="search" type="text" placeholder="Find your cozy goods here..." class="pl-10 placeholder:italic" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search class="size-4 text-muted-foreground" />
        </span>
      </div>
    </div>
    <div
      class="grid grid-cols-2 gap-2 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      v-if="products"
    >
      <CardAllProducts v-for="product in products" :key="product" :product="product" />
    </div>
  </Layout>
</template>

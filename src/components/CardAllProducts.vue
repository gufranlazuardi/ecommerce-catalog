<script setup lang="ts">
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

const props = defineProps(["product"]);
</script>

<template>
  <router-link :to="`/products/${product.id}`">
    <div
      class="flex flex-col border rounded-lg px-4 py-6 gap-4 justify-between h-full hover:bg-slate-200 transition-colors duration-500"
    >
      <div class="flex justify-center">
        <img :src="product.image" :alt="`${title}`" class="w-20 h-20" />
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-sm">{{ product.title }}</p>
        <p class="font-bold">$ {{ product.price }}</p>
      </div>
    </div>
  </router-link>
</template>

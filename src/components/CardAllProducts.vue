<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

const props = defineProps(["product"]);
</script>

<template>
  <router-link :to="`/products/${product.id}`">
    <div class="flex flex-col border rounded-lg p-4 gap-4 justify-between w-full h-fit">
      <div class="flex justify-center">
        <img :src="product.image" :alt="`${title}`" class="w-20 h-20" />
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-sm">{{ product.title }}</p>
        <p class="font-bold">{{ product.price }}</p>
      </div>
    </div>
  </router-link>
</template>

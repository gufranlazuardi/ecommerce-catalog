<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

const props = defineProps(["product"]);
</script>

<template>
  <router-link :to="`/products/${product.id}`">
    <div class="grid grid-cols-5 w-full h-full gap-4">
      <div class="flex flex-col border rounded-lg p-4 gap-4 justify-between">
        <div class="flex justify-center">
          <img :src="image" :alt="`${title}`" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-sm">{{ product.title }}</p>
          <p class="font-bold">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import Separator from "../components/ui/separator/Separator.vue";
import { defineProps } from "vue";

const props = defineProps({
  product: Object, // Define prop type as object
});
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex bg-white w-5/6 h-[34rem] border pl-4 pr-12 py-8 gap-10 rounded-lg shadow-lg">
      <img src="https://pngimg.com/uploads/dress/small/dress_PNG10.png" alt="dress" class="w-3/4 h-3/4" />
      <div class="flex flex-col gap-2">
        <h1 class="text-[28px] font-semibold text-[#720060]">
          {{ product.title }}
        </h1>
        <div class="flex justify-between mt-2">
          <p class="text-[18px] font-light">{{ product.category }}</p>
          <div class="flex items-center gap-2">
            <p class="text-[18px] font-light">{{ product.rating.rate }}</p>
            <div class="flex gap-0.5">
              <div class="w-4 h-4 bg-[#720060] rounded-full"></div>
              <div class="w-4 h-4 bg-[#720060] rounded-full"></div>
              <div class="w-4 h-4 bg-[#720060] rounded-full"></div>
              <div class="w-4 h-4 bg-[#720060] rounded-full"></div>
              <div class="w-4 h-4 bg-[#720060] rounded-full"></div>
            </div>
          </div>
        </div>
        <Separator />
        <p class="text-[18px] pb-12 mt-2">
          {{ product.description }}
        </p>
        <Separator />
        <p class="text-[28px] text-[#720060] font-semibold">{{ product.price }}</p>
        <div class="flex gap-2">
          <div class="w-1/2 h-[42px] border bg-[#720060] text-center text-white py-2 rounded-md">Buy Now</div>
          <div class="w-1/2 h-[42px] border text-center py-2 rounded-md border-[#720060] text-[#720060]">
            Next Product
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

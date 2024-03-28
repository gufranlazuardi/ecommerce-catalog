<script>
import Separator from "../components/ui/separator/Separator.vue";

export default {
  components: {
    Separator,
  },
};
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex bg-white w-5/6 h-[34rem] border pl-4 pr-12 py-8 gap-10 rounded-lg shadow-lg">
      <img src="https://pngimg.com/uploads/dress/small/dress_PNG10.png" alt="dress" class="w-3/4 h-3/4" />
      <div class="flex flex-col gap-2">
        <h1 class="text-[28px] font-semibold text-[#720060]">
          Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
        </h1>
        <div class="flex justify-between mt-2">
          <p class="text-[18px] font-light">women's clothing</p>
          <div class="flex items-center gap-2">
            <p class="text-[18px] font-light">2.9/5</p>
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
          100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for
          style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on
          waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON
        </p>
        <Separator />
        <p class="text-[28px] text-[#720060] font-semibold">$29</p>
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

<script setup>
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
</script>

<template>
  <div class="flex justify-center mt-[10rem]">
    <div class="grid grid-cols-1 gap-4">
      <h1 class="text-3xl">Login</h1>
      <div class="flex flex-col gap-5 border px-8 py-5 rounded-lg">
        <Input type="text" placeholder="Username" class="w-[30rem]" />
        <Input type="text" placeholder="Password" />
        <p class="text-xs cursor-pointer">Forgot your password?</p>
        <Button>Submit</Button>
      </div>
    </div>
  </div>
</template>

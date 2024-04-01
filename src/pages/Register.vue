<script setup>
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
</script>

<template>
  <div class="flex justify-center mt-[8rem]">
    <div class="grid grid-cols-1 gap-4">
      <h1 class="text-3xl">Register</h1>
      <div class="flex flex-col gap-5 border px-8 py-5 rounded-lg">
        <Input type="text" placeholder="Username" class="w-[30rem]" />
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Password" />
        <Input type="text" placeholder="Re-type Password" />
        <Input type="text" placeholder="Phone number" />
        <Input type="text" placeholder="Full name" />
        <Button>Submit</Button>
      </div>
    </div>
  </div>
</template>

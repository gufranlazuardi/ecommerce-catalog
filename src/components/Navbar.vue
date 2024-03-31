<script setup lang="ts">
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
</script>

<template>
  <div class="flex justify-between items-center top-0 z-1000 bg-white sticky h-[60px]">
    <router-link to="/">
      <p class="text-2xl font-semibold">Vogue</p>
    </router-link>

    <!-- manggil sheet responsive -->
    <Sheet>
      <SheetTrigger>
        <div class="flex-col sm:flex md:flex lg:flex xl:hidden">
          <div class="w-8 h-1 border border-black bg-black rounded-sm mb-1"></div>
          <div class="w-6 h-1 border border-black bg-black rounded-sm mb-1"></div>
          <div class="w-4 h-1 border border-black bg-black rounded-sm"></div>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader class="text-left">Hello!</SheetHeader>
        <SheetDescription>Please login to have a better experience</SheetDescription>
        <SheetHeader>
          <div class="flex flex-col gap-2 mt-6">
            <Button variant="outline" class="h-9 w-3/4 text-sm">Login</Button>
            <Button class="h-9 w-3/4 text-sm">Register</Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
    <div class="gap-4 hidden xl:flex">
      <router-link to="/login">
        <Button variant="outline" class="h-9 text-sm">Login</Button>
      </router-link>
      <router-link to="/register">
        <Button class="h-9 text-sm">Register</Button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import Layout from "../components/Layout.vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    Layout,
    Button,
  },
};
</script>

<template>
  <Layout>
    <div class="flex flex-col items-center gap-4 mt-[6rem]">
      <h1 class="text-5xl">Welcome to Vogue</h1>
      <p class="text-xl text-slate-500">Find your fancy fashion here!</p>
      <router-link to="/products">
        <Button>Explore</Button>
      </router-link>
    </div>
  </Layout>
</template>

<script>
import { Button } from "./ui/button";

export default {
  components: {
    Button,
  },
};
</script>

<template>
  <div class="flex justify-between">
    <router-link to="/">
      <p class="text-2xl font-semibold">Vogue</p>
    </router-link>
    <Button>Login</Button>
  </div>
</template>

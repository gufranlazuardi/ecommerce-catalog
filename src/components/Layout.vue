<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <div class="flex flex-col w-full h-screen p-12">
    <Navbar />
    <div class="flex-grow">
      <slot />
    </div>
    <Footer class="mt-auto" />
  </div>
</template>

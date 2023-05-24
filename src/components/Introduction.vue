<template>
  <div class="text-3xl mx-auto w-full h-full">
    <div
      class="text-center md:text-left flex flex-col place-content-center justify-center h-full pt-20 px-10 md:px-20 gap-1"
    >
      <h1
        class="font-extrabold text-5xl sm:md:text-7xl leading-snug tracking-widest text-dark-gray w-auto"
      >
        HEY,
        <br class="hidden" />
        I'M
        <span
          class="mobile-custom-underline md:custom-underline decoration-wavy"
          >JAIME CARVAJAL</span
        >
      </h1>
      <Divider />
      <h3 class="text-dark-gray text-xl md:text-3xl">
        A front-end developer from Philippines
      </h3>
    </div>
  </div>
</template>
<script setup>
import Divider from "./reusable/Divider.vue";
</script>

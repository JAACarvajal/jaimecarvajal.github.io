<template>
  <div class="text-3xl mx-auto w-full h-full">
    <div class="flex flex-col place-content-center justify-center h-full pt-20 px-10 md:px-20 gap-1">
      <h1
        class="text-center font-extrabold text-5xl sm:md:text-7xl leading-snug tracking-widest text-dark-gray w-auto"
      >
        HEY, I'M <span class="custom-underline decoration-wavy">JAIME CARVAJAL</span>
      </h1>
      <Divider />
      <h3 class="text-center text-dark-gray">
        A front-end developer from Philippines
      </h3>
    </div>
  </div>
</template>
<script setup>
import Divider from "./reusable/Divider.vue";
</script>
<style scoped>
.custom-underline {
    border-bottom: 25px solid rgb(255, 195, 57);
    display: inline-block;
    height: 0.99em;
}
</style>
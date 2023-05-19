<template>
  <div
    class="flex flex-col place-content-between mx-auto w-full h-auto md:h-2/5 bg-black px-8 md:px-40 md:pt-20 py-8"
  >
    <div
      class="flex flex-col justify-between md:flex-row items-center text-white gap-10"
    >
      <div class="flex flex-col w-60 gap-3">
        <h3
          class="text-xl font-bold leading-snug tracking-wide text-theme-color md:text-2xl"
        >
          JAIME CARVAJAL
        </h3>
        <p>jaacarvajal27@gmail.com</p>
      </div>
      <div class="flex flex-col w-30 gap-4">
        <h3
          class="text-xl md:text-2xl font-bold leading-snug tracking-wide text-theme-color"
        >
          SOCIALS
        </h3>
        <div class="flex gap-4">
          <font-awesome-icon
            icon="fa-brands fa-linkedin"
            style="color: #ffffff"
            size="2xl"
          />
          <font-awesome-icon
            icon="fa-brands fa-github"
            style="color: #ffffff"
            size="2xl"
          />
          <font-awesome-icon
            icon="fa-brands fa-instagram "
            style="color: #ffffff"
            size="2xl"
          />
        </div>
      </div>
    </div>
    <div class="w-full py-2">
      <Divider
        :data="{
          customClass: 'w-full h-px',
        }"
      />
      <p class="text-white text-center text-xs">
        © Copyright 2023. Made by Jaime Carvajal
      </p>
    </div>
  </div>
</template>
<script setup>
import Divider from "./reusable/Divider.vue";
</script>

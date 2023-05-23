<template>
  <div
    class="flex flex-col place-content-center gap-1 text-3xl mx-auto w-full h-auto p-10 md:p-20"
  >
    <h1
      class="text-center font-extrabold text-5xl sm:md:text-6xl leading-snug tracking-wide text-dark-gray"
    >
      ABOUT ME
    </h1>
    <Divider />
    <div class="flex flex-col md:flex-row gap-12">
      <div class="flex flex-col gap-4 md:w-1/2">
        <h3
          class="text-center md:text-left font-bold text-3xl leading-snug tracking-wide"
        >
          GET TO KNOW ME
        </h3>
        <p class="text-xl leading-snug">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
          blanditiis consectetur commodi reiciendis doloremque ex, tenetur
          culpa. Sapiente doloribus, aut fugit perspiciatis cupiditate molestiae
          natus reprehenderit quod placeat sint officia.
        </p>
        <p class="text-xl leading-snug">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
          blanditiis consectetur commodi reiciendis doloremque ex, tenetur
          culpa. Sapiente doloribus, aut fugit perspiciatis cupiditate molestiae
          natus reprehenderit quod placeat sint officia.
        </p>
        <p class="text-xl leading-snug">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
          blanditiis consectetur commodi reiciendis doloremque ex, tenetur
          culpa. Sapiente doloribus, aut fugit perspiciatis cupiditate molestiae
          natus reprehenderit quod placeat sint officia.
        </p>
      </div>
      <div class="md:w-1/2 flex flex-col gap-8">
        <h3
          class="text-center md:text-left font-bold text-3xl leading-snug tracking-wide"
        >
          SKILLS & TECHNOLOGIES
        </h3>
        <div class="flex flex-col md:flex-row flex-wrap gap-4">
          <div class="flex flex-row justify-center items-center gap-4">
            <font-awesome-icon
              icon="fa-brands fa-html5"
              size="2xl"
            />
            <h3>HTML</h3>
          </div>
          <div class="flex flex-row justify-center items-center gap-4">
            <font-awesome-icon
              icon="fa-brands fa-css3"
              size="2xl"
            />
            <h3>CSS</h3>
          </div>
          <div class="flex flex-row justify-center items-center gap-4">
            <font-awesome-icon
              icon="fa-brands fa-js"
              size="2xl"
            />
            <h3>JAVASCRIPT</h3>
          </div>
          <div class="flex flex-row justify-center items-center gap-4">
            <font-awesome-icon
              icon="fa-brands fa-vuejs"
              size="2xl"
            />
            <h3>VUE</h3>
          </div>
          <div class="flex flex-row justify-center items-center gap-4">
            <font-awesome-icon
              icon="fa-brands fa-react"
              size="2xl"
            />
            <h3>REACT</h3>
          </div>
          <div class="flex flex-row justify-center items-center gap-4">
            <font-awesome-icon
              icon="fa-brands fa-php"
              size="2xl"
            />
            <h3>PHP</h3>
          </div>
          <div class="flex flex-row justify-center items-center gap-4">
            <font-awesome-icon
              icon="fa-brands fa-laravel"
              size="2xl"
            />
            <h3>LARAVEL</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Divider from "./reusable/Divider.vue";
</script>

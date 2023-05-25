<template>
  <div ref="about_section" id="about_section"
    class="flex flex-col place-content-center gap-1 text-3xl mx-auto w-full h-auto lp:h-screen p-10 lp:p-24 lp:px-32 text-dark-gray">
    <h1 ref="main_title"
      class="text-center font-extrabold text-5xl sm:lp:text-7xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
      :class="setTextSlideAnimationClasses('main_title', 250)">
      <span class="mobile-custom-underline lp:custom-underline">ABOUT ME</span>
    </h1>
    <Divider />
    <div class="flex flex-col lp:flex-row gap-12">
      <div class="flex flex-col gap-8 lp:w-1/2">
        <h3 ref="get_to_know_title"
          class="text-center lp:text-left font-bold text-2xl lp:text-3xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
          :class="setTextSlideAnimationClasses('get_to_know_title', 500)">
          <!-- GET TO KNOW ME -->
          <span class="mobile-custom-sub-underline lp:custom-sub-underline">GET TO KNOW ME</span>
        </h3>
        <div ref="get_to_know_desc" class="flex flex-col gap-4 translate-x-20 opacity-0 duration-700"
          :class="setTextSlideAnimationClasses('get_to_know_desc', 750)">
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
      </div>
      <div class="lp:w-1/2 flex flex-col gap-8">
        <h3 ref="skills_and_tech_title"
          class="text-center lp:text-left font-bold text-2xl lp:text-3xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
          :class="setTextSlideAnimationClasses('skills_and_tech_title', 1000)">
          <!-- SKILLS & TECHNOLOGIES -->
          <span class="mobile-custom-sub-underline lp:custom-sub-underline">SKILLS & TECHNOLOGIES</span>
        </h3>
        <div ref="skills_and_tech_desc"
          class="flex flex-row flex-wrap gap-8 justify-center lp:justify-start translate-x-20 opacity-0 duration-700"
          :class="setTextSlideAnimationClasses('skills_and_tech_desc', 1250)">
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-html5" style="font-size: 4em;" />
            <!-- <h3 class="hidden lp:block font-semibold">HTML</h3>
            <div id="html_text" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              HTML
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div> -->
          </div>
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-css3" style="font-size: 4em;" />
            <!-- <h3 class="hidden lp:block font-semibold">CSS</h3> -->
          </div>
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-js" style="font-size: 4em;" />
            <!-- <h3 class="hidden lp:block font-semibold">JAVASCRIPT</h3> -->
          </div>
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-vuejs" style="font-size: 4em;" />
            <!-- <h3 class="hidden lp:block font-semibold">VUE</h3> -->
          </div>
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-react" style="font-size: 4em;" />
            <!-- <h3 class="hidden lp:block font-semibold">REACT</h3> -->
          </div>
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-php" style="font-size: 4em;" />
            <!-- <h3 class="hidden lp:block font-semibold">PHP</h3> -->
          </div>
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-laravel" style="font-size: 4em;" />
            <!-- <h3 class="hidden lp:block font-semibold">LARAVEL</h3> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { initFlowbite } from 'flowbite'
import Divider from "./reusable/Divider.vue";
import { animationMixin } from '../mixins/custom-animation-mixin';
export default {
  components: {
    Divider
  },
  mixins: [animationMixin],
  mounted() {
    initFlowbite();
  }
};
</script>

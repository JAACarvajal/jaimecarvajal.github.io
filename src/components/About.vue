<template>
  <div ref="about_section" id="about_section"
    class="flex flex-col place-content-center gap-1 text-3xl mx-auto w-full h-auto tablet:h-screen p-10 tablet:p-24 tablet:px-60 text-dark-gray">
    <h1 ref="main_title"
      class="text-center font-extrabold text-5xl sm:tablet:text-6xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
      :class="setTextSlideAnimationClasses('main_title', 250)">
      <span class="mobile-custom-underline tablet:custom-underline">ABOUT ME</span>
    </h1>
    <Divider />
    <div class="flex flex-col tablet:flex-row gap-12">
      <div class="flex flex-col gap-4 tablet:w-1/2">
        <h3 ref="get_to_know_title"
          class="text-center tablet:text-left font-bold text-2xl tablet:text-3xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
          :class="setTextSlideAnimationClasses('get_to_know_title', 500)">
          <!-- GET TO KNOW ME -->
          <span class="mobile-custom-sub-underline tablet:custom-sub-underline">GET TO KNOW ME</span>
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
      <div class="tablet:w-1/2 flex flex-col gap-4">
        <h3 ref="skills_and_tech_title"
          class="text-center tablet:text-left font-bold text-3xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
          :class="setTextSlideAnimationClasses('skills_and_tech_title', 1000)">
          <!-- SKILLS & TECHNOLOGIES -->
          <span class="mobile-custom-sub-underline tablet:custom-sub-underline">SKILLS & TECHNOLOGIES</span>
        </h3>
        <div ref="skills_and_tech_desc"
          class="flex flex-row flex-wrap gap-8 justify-center tablet:justify-start translate-x-20 opacity-0 duration-700"
          :class="setTextSlideAnimationClasses('skills_and_tech_desc', 1250)">
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-html5" size="2xl" />
            <h3 class="hidden tablet:block">HTML</h3>
          </div>
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-css3" size="2xl" />
            <h3 class="hidden tablet:block">CSS</h3>
          </div>
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-js" size="2xl" />
            <h3 class="hidden tablet:block">JAVASCRIPT</h3>
          </div>
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-vuejs" size="2xl" />
            <h3 class="hidden tablet:block">VUE</h3>
          </div>
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-react" size="2xl" />
            <h3 class="hidden tablet:block">REACT</h3>
          </div>
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-php" size="2xl" />
            <h3 class="hidden tablet:block">PHP</h3>
          </div>
          <div class="flex flex-row justify-center items-center gap-2">
            <font-awesome-icon icon="fa-brands fa-laravel" size="2xl" />
            <h3 class="hidden tablet:block">LARAVEL</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Divider from "./reusable/Divider.vue";
import { animationMixin } from '../mixins/custom-animation';
export default {
  components: {
    Divider
  },
  mixins: [animationMixin],
};
</script>

<template>
  <div ref="about_section" id="about_section"
    class="flex flex-col place-content-center gap-1 text-3xl mx-auto w-full h-auto lp:h-screen py-10 px-10 lp:px-32 text-dark-gray">
    <h1 ref="main_title"
      class="text-center font-extrabold text-5xl sm:lp:text-7xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
      :class="isViewed ? setSlideAnimationClasses('main_title', 0) : ''">
      <span class="mobile-custom-underline lp:custom-underline">ABOUT ME</span>
    </h1>
    <Divider refId="about_divider" :is-viewed="isViewed" :is-with-animation="true" />
    <div class="flex flex-col lp:flex-row gap-12">
      <div class="flex flex-col gap-8 lp:w-1/2">
        <h3 ref="get_to_know_title"
          class="text-center lp:text-left font-bold text-2xl lp:text-3xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
          :class="isViewed ? setSlideAnimationClasses('get_to_know_title', 300) : ''">
          <!-- GET TO KNOW ME -->
          <span class="mobile-custom-sub-underline lp:custom-sub-underline">GET TO KNOW ME</span>
        </h3>
        <div ref="get_to_know_desc" class="flex flex-col gap-4 translate-x-20 opacity-0 duration-700"
          :class="isViewed ? setSlideAnimationClasses('get_to_know_desc', 450) : ''">
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
          :class="isViewed ? setSlideAnimationClasses('skills_and_tech_title', 600) : ''">
          <!-- SKILLS & TECHNOLOGIES -->
          <span class="mobile-custom-sub-underline lp:custom-sub-underline">SKILLS & TECHNOLOGIES</span>
        </h3>
        <div ref="skills_and_tech_desc"
          class="flex flex-row flex-wrap gap-8 justify-center lp:justify-start translate-x-20 opacity-0 duration-700"
          :class="isViewed ? setSlideAnimationClasses('skills_and_tech_desc', 750) : ''">
          <div v-for="(skill, index) in skillsList" :key="index" class="flex flex-row justify-center items-center gap-2">
            <Icon :iconName="skill.icon_name" style="font-size: 3.5em;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { skills } from '../constants';
import { initFlowbite } from 'flowbite';
import Divider from "./reusable/Divider.vue";
import Icon from "./reusable/Icon.vue";
import { animationMixin } from '../mixins/custom-animation-mixin';
export default {
  components: {
    Divider,
    Icon
  },
  data() {
    return {
      isViewed: false,
      skillsList: skills
    }
  },
  mixins: [animationMixin],
  watch: {
    currentViewedSection(newValue, oldValue) {
      this.isViewed = newValue === 'about_section';
    }
  },
  mounted() {
    initFlowbite();
  }
};
</script>

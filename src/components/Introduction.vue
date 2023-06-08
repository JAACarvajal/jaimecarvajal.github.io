<template>
  <!-- Main container -->
  <div ref="introduction_section" id="introduction_section"
    class="relative flex flex-col justify-center place-content-center h-screen mx-auto tb:w-11/12 lp:w-3/4 lp:mb-40 text-3xl">

    <!-- Center content -->
    <div class="relative flex flex-col justify-between place-content-center gap-4 py-20 px-10">
      <!-- Greeting -->
      <h1 id="pre_introduction_title" ref="pre_introduction_title"
        class="w-full text-center font-extrabold text-sm tb:text-xl lp:text-lg pc:text-2xl leading-snug tracking-[.04em] opacity-0 translate-x-20 duration-700"
        :class="isViewed ? setSlideAnimationClasses('pre_introduction_title', 300) : ''">
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-[#09203F] to-[#537895] dark:from-[#4568dc] dark:to-[#b06ab3]">
          HEY <span class="text-white">🙋🏽</span>, MY NAME IS
        </span>
      </h1>
      <!-- Name -->
      <h1 id="introduction_title" ref="introduction_title"
        class="w-full text-center font-extrabold text-5xl tb:text-7xl lp:text-[7rem] pc:text-[8rem] leading-snug tracking-[.04em] opacity-0 translate-x-20 duration-700"
        :class="isViewed ? setSlideAnimationClasses('introduction_title', 500) : ''">
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-[#09203F] to-[#537895] dark:from-[#4568dc] dark:to-[#b06ab3]">
          JAIME CARVAJAL
        </span>
      </h1>
    </div>

    <!-- Bottom content -->
    <div class="absolute flex justify-between items-center bottom-5 w-full px-5 tb:px-0 dark:text-white">

      <!-- Socials list -->
      <div class="hidden tb:flex gap-4 w-40 opacity-0 translate-x-20 duration-700 " ref="introduction_socials"
        id="introduction_socials" :class="isViewed ? setSlideAnimationClasses('introduction_socials', 700) : ''">
        <a v-for="(social, index) in socialsList" target="_blank" :href="social.url" :key="index">
          <font-awesome-icon :icon="social.icon_class" size="2xs" />
        </a>
      </div>

      <!-- Go to about arrow -->
      <div ref="introduction_arrow" class="w-full tb:w-auto text-center opacity-0 translate-x-20 duration-700"
        :class="isViewed ? setSlideAnimationClasses('introduction_arrow', 900) : ''">
        <font-awesome-icon class="-translate-x-1/2 translate-y-[80%] animate-bounce hover:cursor-pointer"
          icon="fa-solid fa-angle-down" @click="scrollToSection($event, 'about_section')" />
      </div>

      <!-- Email text -->
      <p ref="introduction_email" class="hidden tb:block w-40 text-sm opacity-0 translate-x-20 duration-700"
        :class="isViewed ? setSlideAnimationClasses('introduction_email', 1100) : ''">
        jaacarvajal27@gmail.com</p>
    </div>

  </div>
</template>
<script>
import { socials } from '../constants';

export default {
  data() {
    return {
      isViewed: true,
      socialsList: socials,
    }
  },
  watch: {
    /**
     * Watch changes on currentViewedSection
     * @param {} newValue 
     * @param {*} oldValue 
     */
    currentViewedSection(newValue, oldValue) {
      this.isViewed = newValue === 'introduction_section';
    }
  }
};
</script>

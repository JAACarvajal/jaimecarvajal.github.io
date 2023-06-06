<template>
  <div ref="introduction_section" id="introduction_section" class="text-3xl mx-auto tb:w-11/12 lp:w-3/4 h-screen mb-40">
    <div class="relative flex flex-col place-content-center justify-center w-full h-full gap-8">
      <div ref="introduction_card" class="relative flex flex-col justify-between place-content-center gap-4 py-20 px-10">
        <h1 id="pre_introduction_title" ref="pre_introduction_title"
          class="text-center font-extrabold text-sm tb:text-xl lp:text-lg pc:text-2xl leading-snug w-full tracking-[.04em] translate-x-20 opacity-0 duration-700"
          :class="isViewed ? setSlideAnimationClasses('pre_introduction_title', 300) : ''">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#09203F] to-[#537895]">
            HEY, MY NAME IS</span>
        </h1>
        <h1 id="introduction_title" ref="introduction_title"
          class="text-center font-extrabold text-5xl tb:text-6xl lp:text-7xl pc:text-8xl leading-snug w-full tracking-[.04em] translate-x-20 opacity-0 duration-700"
          :class="isViewed ? setSlideAnimationClasses('introduction_title', 500) : ''">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#09203F] to-[#537895]">
            JAIME CARVAJAL</span>
        </h1>
      </div>
      <div class="px-5 tb:px-0 absolute flex justify-between items-center bottom-5 w-full">
        <div class="hidden tb:flex gap-4 translate-x-20 opacity-0 duration-700 w-40" ref="introduction_socials"
          id="introduction_socials" :class="isViewed ? setSlideAnimationClasses('introduction_socials', 700) : ''">
          <a v-for="(social, index) in socialsList" target="_blank" :href="social.url" :id="index" rel="noreferrer">
            <font-awesome-icon :icon="social.icon_class" size="2xs" />
          </a>
        </div>

        <div ref="introduction_arrow" class="w-full text-center tb:w-auto translate-x-20 opacity-0 duration-700"
          :class="isViewed ? setSlideAnimationClasses('introduction_arrow', 900) : ''">
          <font-awesome-icon class="-translate-x-1/2 translate-y-[80%] animate-bounce hover:cursor-pointer"
            icon="fa-solid fa-angle-down" @click="scrollToSection($event, 'about_section')" />
        </div>

        <p ref="introduction_email" class="hidden tb:block text-sm translate-x-20 opacity-0 duration-700 w-40"
          :class="isViewed ? setSlideAnimationClasses('introduction_email', 1100) : ''">
          jaacarvajal27@gmail.com</p>
      </div>
    </div>
  </div>
</template>
<script>
import Divider from './reusable/Divider.vue';
import { socials } from '../constants';

export default {
  components: { Divider },
  data() {
    return {
      isViewed: true,
      socialsList: socials,
    }
  },
  watch: {
    currentViewedSection(newValue, oldValue) {
      this.isViewed = newValue === 'introduction_section';
    }
  }
};
</script>

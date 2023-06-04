<template>
  <div ref="introduction_section" id="introduction_section" class="text-3xl mx-auto tb:w-11/12 lp:w-3/4 h-screen">
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
        <!-- 
        <h3 ref="introduction_sub"
          class="mx-auto text-center text-dark-gray text-base lp:text-2xl font-semibold translate-x-20 opacity-0 duration-700 w-1/2"
          :class="isViewed ? setSlideAnimationClasses('introduction_sub', 1000) : ''">
          Web Developer
        </h3> -->
        <!-- <img ref="introduction_logo" id="introduction_logo"
          class="w-36 h-36 right-20 translate-x-20 opacity-0 duration-700" src="/images/logo.png" alt="portfolio logo"
          srcset="" :class="isViewed ? setSlideAnimationClasses('introduction_logo', 1200) : ''" /> -->
      </div>
      <div class="px-5 tb:px-0 absolute flex justify-between items-center bottom-5 w-full">
        <div class="flex gap-4 translate-x-20 opacity-0 duration-700 w-40" ref="introduction_socials"
          id="introduction_socials" :class="isViewed ? setSlideAnimationClasses('introduction_socials', 700) : ''">
          <font-awesome-icon icon="fa-brands fa-linkedin" size="2xs" />
          <font-awesome-icon icon="fa-brands fa-github" size="2xs" />
          <font-awesome-icon icon="fa-brands fa-instagram" size="2xs" />
        </div>
        <font-awesome-icon class="-translate-x-1/2 translate-y-[80%] animate-bounce hover:cursor-pointer"
          icon="fa-solid fa-angle-down" @click="scrollToSection($event, 'about_section')" />
        <p ref="introduction_email" class="text-sm translate-x-20 opacity-0 duration-700 w-40"
          :class="isViewed ? setSlideAnimationClasses('introduction_email', 900) : ''">
          jaacarvajal27@gmail.com</p>
      </div>
    </div>
  </div>
</template>
<script>
import Divider from './reusable/Divider.vue';
export default {
  components: { Divider },
  data() {
    return {
      isViewed: true
    }
  },
  watch: {
    currentViewedSection(newValue, oldValue) {
      this.isViewed = newValue === 'introduction_section';
    }
  }
};
</script>

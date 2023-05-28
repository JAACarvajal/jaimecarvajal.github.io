<template>
  <div ref="introduction_section" id="introduction_section" class="text-3xl mx-auto w-full h-full">
    <div class="text-center flex flex-col place-content-center justify-center h-full pt-20 px-10 lp:px-32 gap-1">
      <h1 id="introduction_title" ref="introduction_title"
        class="custom-animated font-extrabold text-5xl sm:lp:text-7xl leading-snug tracking-widest text-dark-gray w-auto translate-x-20 opacity-0 duration-700"
        :class="isViewed ? setSlideAnimationClasses('introduction_title', 0) : ''">
        HEY,
        <br class="hidden" />
        I'M
        <span class="text-center mobile-custom-underline lp:custom-underline leading-3">JAIME
          CARVAJAL</span>
      </h1>
      <Divider refId="introdution_divider" :is-viewed="isViewed" :is-with-animation="true" />
      <h3 ref="introduction_sub"
        class="text-dark-gray text-xl lp:text-3xl font-medium translate-x-20 opacity-0 duration-700"
        :class="isViewed ? setSlideAnimationClasses('introduction_sub', 300) : ''">
        A front-end developer from
        Philippines
      </h3>
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[80%] bottom-0 hover:cursor-pointer"
        @click="scrollToSection($event, 'about_section')">
        <font-awesome-icon class="animate-bounce" icon="fa-solid fa-angle-down" />
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

<template>
  <div ref="introduction_section" id="introduction_section" class="text-3xl mx-auto w-full h-full">
    <div class="flex flex-col place-content-center justify-center w-full h-full pt-20 px-10 lp:px-48 pc:px-60 gap-8">

      <div ref="introduction_card"
        class="relative flex flex-col justify-center place-content-center bg-gradient-to-l from-light-gray rounded-2xl p-20 shadow-lg -translate-y-40 opacity-0 duration-700"
        :class="isViewed ? setSlideAnimationClasses('introduction_card', 500, true) : ''">
        <h1 id="introduction_title" ref="introduction_title"
          class="absolute -top-14 left-30 font-extrabold text-5xl lp:text-8xl leading-tight tracking-widest w-auto translate-x-20 opacity-0 duration-700"
          :class="isViewed ? setSlideAnimationClasses('introduction_title', 800) : ''">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#09203F] to-[#537895]">JAIME
            CARVAJAL</span>
        </h1>
        <img ref="introduction_logo" id="introduction_logo"
          class="absolute w-40 h-40 right-20 translate-x-20 opacity-0 duration-700" src="/images/logo.png"
          alt="portfolio logo" srcset="" :class="isViewed ? setSlideAnimationClasses('introduction_logo', 1200) : ''" />
        <h3 ref="introduction_sub"
          class="text-dark-gray text-xl lp:text-xl font-medium translate-x-20 opacity-0 duration-700 w-2/3"
          :class="isViewed ? setSlideAnimationClasses('introduction_sub', 1000) : ''">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique eaque quaerat doloribus officia voluptatem
          voluptatum placeat, fugiat odit vero illo dolores reiciendis voluptas aut consequatur eligendi velit ad at.
          Consequuntur.
        </h3>
      </div>
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

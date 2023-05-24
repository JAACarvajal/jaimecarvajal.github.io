<template>
  <div id="introduction_section" class="text-3xl mx-auto w-full h-full">
    <div
      class="text-center tablet:text-left flex flex-col place-content-center justify-center h-full pt-20 px-10 tablet:px-60 gap-1">
      <h1 ref="introduction"
        class="custom-animated font-extrabold text-5xl sm:tablet:text-7xl leading-snug tracking-widest text-dark-gray w-auto translate-x-20 opacity-0 duration-700"
        :class="setTextSlideAnimationClasses('introduction', 250)">
        HEY,
        <br class="hidden" />
        I'M
        <span class="mobile-custom-underline tablet:custom-underline">JAIME CARVAJAL</span>
      </h1>
      <Divider />
      <h3 ref="introduction_sub"
        class="text-dark-gray text-xl tablet:text-3xl font-medium translate-x-20 opacity-0 duration-700"
        :class="setTextSlideAnimationClasses('introduction_sub', 500)">
        A front-end developer from
        Philippines
      </h3>
    </div>
  </div>
</template>
<script>
import Divider from './reusable/Divider.vue';
import { animationMixin } from '../mixins/custom-animation';
export default {
  components: {
    Divider
  },
  mixins: [animationMixin],
};
</script>

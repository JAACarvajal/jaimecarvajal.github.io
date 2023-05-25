<template>
  <div id="introduction_section" class="text-3xl mx-auto w-full h-full">
    <div class="text-center flex flex-col place-content-center justify-center h-full pt-20 px-10 lp:px-32 gap-1">
      <h1 ref="introduction"
        class="custom-animated font-extrabold text-5xl sm:lp:text-7xl leading-snug tracking-widest text-dark-gray w-auto translate-x-20 opacity-0 duration-700"
        :class="setTextSlideAnimationClasses('introduction', 250)">
        HEY,
        <br class="hidden" />
        I'M
        <span class="text-center mobile-custom-underline lp:custom-underline leading-3">JAIME
          CARVAJAL</span>
      </h1>
      <Divider />
      <h3 ref="introduction_sub"
        class="text-dark-gray text-xl lp:text-3xl font-medium translate-x-20 opacity-0 duration-700"
        :class="setTextSlideAnimationClasses('introduction_sub', 500)">
        A front-end developer from
        Philippines
      </h3>
    </div>
  </div>
</template>
<script>
import Divider from './reusable/Divider.vue';
import { animationMixin } from '../mixins/custom-animation-mixin';
export default {
  components: {
    Divider
  },
  mixins: [animationMixin],
};
</script>

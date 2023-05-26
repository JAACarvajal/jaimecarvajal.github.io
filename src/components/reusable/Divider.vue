<template>
  <div :ref="refId" class="w-full duration-700" :class="[
    isViewed ? setSlideAnimationClasses(refId, 150) : '',
    isWithAnimation ? 'translate-x-20 opacity-0' : ''
  ]">
    <hr class="mx-auto my-4 bg-theme-color border-0 rounded lp:my-10" :class="customClass" />
  </div>
</template>
<script>
import { animationMixin } from '../../mixins/custom-animation-mixin';
export default {
  /**
   * Props
   */
  props: ["data", "isViewed", "refId", "isWithAnimation"],
  mixins: [animationMixin],
  /**
   * Component variables
   */
  data() {
    return {
      customClass: "w-12 h-2",
    };
  },
  /**
   * Mounted hook
   */
  mounted() {
    this.customClass = this.$props.data?.customClass ?? this.customClass;
  },
};
</script>

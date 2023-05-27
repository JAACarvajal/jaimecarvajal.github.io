/**
 * Mixin for animations
 */
export default {
  /**
   * 
   */
  methods: {
    setSlideAnimationClasses(reference, delay = 500) {
      this.$nextTick(() => {
        const element = this.$refs[reference] instanceof HTMLElement ? this.$refs[reference] : this.$refs[reference][0];

        setTimeout(() => {
          element.classList.remove('translate-x-20', 'opacity-0');
          element.classList.add('translate-x-0', 'opacity-100');
          }, delay);
      })
    }
  }
};

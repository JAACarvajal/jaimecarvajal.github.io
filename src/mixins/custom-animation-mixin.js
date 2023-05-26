/**
 * Mixin for animations
 */
export const animationMixin = {
  /**
   * 
   */
  methods: {
    setSlideAnimationClasses(reference, delay = 500) {
      setTimeout(() => {
        this.$refs[reference].classList.remove('translate-x-20', 'opacity-0');
        this.$refs[reference].classList.add('translate-x-0', 'opacity-100');
        }, delay);
    }
  }
};

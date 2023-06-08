/**
 * Mixin for animations
 */
export default {
  /**
   * 
   */
  methods: {
    /**
     * Set slide animation on elements
     * @param {*} reference 
     * @param {*} delay 
     * @param {*} isVertical 
     * @param {*} callback 
     */
    setSlideAnimationClasses(reference, delay = 500, isVertical = false, callback = null) {
      this.$nextTick(() => {
        const element = this.$refs[reference] instanceof HTMLElement ? this.$refs[reference] : this.$refs[reference][0];

        setTimeout(() => {
          if (isVertical === false) {
            element.classList.remove('translate-x-20', 'opacity-0');
            element.classList.add('translate-x-0', 'opacity-100');
          } else {
            element.classList.remove('-translate-y-40', 'opacity-0');
            element.classList.add('translate-y-0', 'opacity-100');
          }
          
          if (callback !== null) {
            callback();
          }
        }, delay);
      })
    }
  }
};

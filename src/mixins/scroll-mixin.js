/**
 * Mixin for scroll
 */
export const scrollMixin = {
    data() {
        return {
            elementsToShowWhenNotOnTopPage: ['nav_side_bar']
        }
    },
    methods: {
        /**
         * Scroll to a page section smoothly
         * @param {*} sectionID 
         */
      scrollToSection(event, sectionID) {
        // Get target section
        const targetSection = document.getElementById(sectionID);

        // Check if target section exist
        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({ behavior: "smooth" });
            const topOffset = targetSection.offsetTop;
            this.bIsToggleDropdown = false;

            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
      },
      showElementsWhenNotOnTopPage() {
            for (const elementId of this.elementsToShowWhenNotOnTopPage) {
                if (window.pageYOffset > 0) {
                    this.$toggleClasses(elementId, null, 'hidden');
                } else {
                    this.$toggleClasses(elementId, 'hidden');
                }
            }
            return;
      },
      /**
       * Handle scroll event
       * @param {*} event 
       */
      handleScroll(event) {
        this.handleNavigationBarShrink();
        this.showElementsWhenNotOnTopPage();
        event.preventDefault();
      },
      /**
       * Handle navigation bar shrink
       */
      handleNavigationBarShrink() {
        if (window.pageYOffset > 0) {
          // Hide list
          this.$toggleClasses('main_nav_list', null, 'lp:flex');
          this.$toggleClasses('main_nav_shrinked_list', 'lp:flex', 'hidden');
          // Shrink container
          this.$toggleClasses('nav_cont', 'lp:h-16', 'lp:h-32');
          // Shrink logo 
          this.$toggleClasses('nav_logo', 'lp:w-14', 'lp:w-28');
          this.$toggleClasses('nav_logo', 'lp:h-14', 'lp:h-28');
        } else {
          this.$toggleClasses('main_nav_list', 'lp:flex', null);
          this.$toggleClasses('main_nav_shrinked_list', 'hidden', 'lp:flex');
  
          this.$toggleClasses('nav_cont', 'lp:h-32', 'lp:h-16');

          this.$toggleClasses('nav_logo', 'lp:w-28', 'lp:w-14');
          this.$toggleClasses('nav_logo', 'lp:h-28', 'lp:h-14');
        }
      }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    }
  };
  
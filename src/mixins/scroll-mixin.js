import { sections } from '../constants';

/**
 * Mixin for scroll
 */
export default {
    data() {
        return {
            elementsToShowWhenNotOnTopPage: [
                {
                    id: 'nav_side_bar_left',
                    origin: 'top'
                },
                {
                    id: 'nav_side_bar_right',
                    origin: 'bottom'
                }
            ],
            sectionIds: sections,
            currentViewedSection: 'introduction_section',
            isPageLoaded: false
        }
    },
    methods: {
        /**
         * Set scroll dicrection
         */
        setScrollDirection() {
            // Get currenct scroll position
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
            if (currentScrollPosition > this.lastScrollPosition) {
              // Scrolling down
              this.scrollDirection = 'down';
            } else if (currentScrollPosition < this.lastScrollPosition) {
              // Scrolling up
              this.scrollDirection = 'up';
            }
      
            this.lastScrollPosition = currentScrollPosition;
          },
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
                const topOffset = targetSection.offsetTop - 110;
                this.bIsToggleDropdown = false;

                window.scrollTo({
                    top: topOffset,
                    behavior: 'smooth'
                });
            }
        },
        /**
         * Show element/s when scrolled down
         * @returns 
         */
        showElementsWhenNotOnTopPage() {
            for (const element of this.elementsToShowWhenNotOnTopPage) {
                // If user scrolled
                if (window.pageYOffset > 0) {
                    this.$refs[element.id]?.classList.remove(element.origin === 'top' ? '-translate-y-20' : 'translate-y-20', 'opacity-0');
                    this.$refs[element.id]?.classList.add('translate-y-0', 'opacity-100');
                } else {
                    this.$refs[element.id]?.classList.add(element.origin === 'top' ? '-translate-y-20' : 'translate-y-20', 'opacity-0');
                    this.$refs[element.id]?.classList.remove('translate-y-0', 'opacity-100');
                }
            }
            return;
        },
        /**
         * Handle navigation bar shrink
         */
        handleNavigationBarShrink() {
            if (window.pageYOffset > 0) {
                // Hide list                
                this.$toggleClasses('main_nav_list', null, 'lp:flex');
                this.$toggleClasses('main_nav_shrinked_list', 'lp:flex', 'hidden');
                this.$toggleClasses('main_nav_shrinked_list', 'tb:hidden');
                this.$toggleClasses('main_nav_shrinked_list', 'hidden');
                // Shrink container
                this.$toggleClasses('main_nav', 'lp:h-16', 'lp:h-28');
                // Shrink logo 
                this.$toggleClasses('nav_logo', 'lp:w-12', 'lp:w-24');
                this.$toggleClasses('nav_logo', 'lp:h-12', 'lp:h-24');
            } else {
                this.$toggleClasses('main_nav_list', 'lp:flex', null);
                this.$toggleClasses('main_nav_shrinked_list', 'hidden', 'lp:flex');

                this.$toggleClasses('main_nav', 'lp:h-28', 'lp:h-16');

                this.$toggleClasses('nav_logo', 'lp:w-24', 'lp:w-12');
                this.$toggleClasses('nav_logo', 'lp:h-24', 'lp:h-12');
            }
        },
        /**
         * Get current viewed section
         */
        getCurrentViewedSection() {
            for (const element of this.sectionIds) {
                if (this.checkIfElementIsOnViewPort(element.id)) {
                    this.currentViewedSection = element.id;
                    break;
                }
            }
        },
        /**
         * Check if a section is within viewport
         * @param {} elementId 
         * @returns 
         */
        checkIfElementIsOnViewPort(elementId) {
            const rect = document.getElementById(elementId).getBoundingClientRect();
            
            return (
                rect.top >= (-(rect.height - (rect.height * .50))) // Set this lower
                &&
                rect.bottom <= (rect.height + (rect.height * .50)) // Set this higher
            );
        },
        /**
         * Scroll to top page
         */
        scrollToTopPage() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        /**
         * Handle scroll event
         * @param {*} event
         */
        handleScroll(event) {
            this.getCurrentViewedSection();
            this.handleNavigationBarShrink();
            this.showElementsWhenNotOnTopPage();
            event.preventDefault();
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};

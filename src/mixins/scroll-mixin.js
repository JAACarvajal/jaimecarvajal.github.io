/**
 * Mixin for scroll
 */
export const scrollMixin = {
    data() {
        return {
            elementsToShowWhenNotOnTopPage: ['nav_side_bar'],
            sectionIds: [
                'introduction_section',
                'about_section',
                'project_section'
            ],
            currentViewedSection: 'introduction_section'
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
                // If user scrolled
                if (window.pageYOffset > 0) {
                    this.$refs[elementId]?.classList.remove('translate-x-20', 'opacity-0');
                    this.$refs[elementId]?.classList.add('translate-x-0', 'opacity-100');
                    // this.$toggleClasses(elementId, null, 'hidden');
                } else {
                    // this.$toggleClasses(elementId, 'hidden');
                    this.$refs[elementId]?.classList.add('translate-x-20', 'opacity-0');
                    this.$refs[elementId]?.classList.remove('translate-x-0', 'opacity-100');
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
                this.$toggleClasses('nav_cont', 'lp:h-16', 'lp:h-32');
                // Shrink logo 
                this.$toggleClasses('nav_logo', 'lp:w-12', 'lp:w-24');
                this.$toggleClasses('nav_logo', 'lp:h-12', 'lp:h-24');
            } else {
                this.$toggleClasses('main_nav_list', 'lp:flex', null);
                this.$toggleClasses('main_nav_shrinked_list', 'hidden', 'lp:flex');

                this.$toggleClasses('nav_cont', 'lp:h-32', 'lp:h-16');

                this.$toggleClasses('nav_logo', 'lp:w-24', 'lp:w-12');
                this.$toggleClasses('nav_logo', 'lp:h-24', 'lp:h-12');
            }
        },
        getCurrentViewedSection() {
            const introRect = document.getElementById('introduction_section').getBoundingClientRect();
            const aboutRect = document.getElementById('about_section').getBoundingClientRect();
            const projectsRect = document.getElementById('project_section').getBoundingClientRect();

            if ((
                introRect.top >= (-(introRect.height - (introRect.height * .33))) &&
                introRect.bottom <= (introRect.height + (introRect.height * .66))
            )) {
                this.currentViewedSection = 'introduction_section';
                return;
            }

            if ((
                aboutRect.top >= (-(aboutRect.height - (aboutRect.height * .33))) &&
                aboutRect.bottom <= (aboutRect.height + (aboutRect.height * .66))
            )) {
                this.currentViewedSection = 'about_section'; 
                return;
            }

            if ((
                projectsRect.top >= (-(projectsRect.height - (projectsRect.height * .33))) &&
                projectsRect.bottom <= (projectsRect.height + (projectsRect.height * .66))
            )) {
                this.currentViewedSection = 'project_section'; 
                return;
            }
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
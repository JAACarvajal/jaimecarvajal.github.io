<template>
    <!-- Dropdown for hamburger list when in mobile view -->
    <ul ref="mobile_nav_list"
        class="absolute flex lp:hidden flex-col justify-center items-center top-20 right-0 z-50 w-full tb:w-[250px] border opacity-0 rounded-2xl bg-white text-left text-base font-semibold text-dark-gray duration-300 dark:bg-dark-mode-layer-2 dark:text-white dark:border-dark-mode-border">
        <NavBarItem @close-mobile-nav="$emit('close-mobile-nav')" section="introduction_section" text="HOME"
            :isMobile="true" :isFirst="true" icon="🏠" />
        <NavBarItem @close-mobile-nav="$emit('close-mobile-nav')" section="about_section" text="ABOUT" :isMobile="true"
            icon="🧑🏽‍💻" />
        <NavBarItem @close-mobile-nav="$emit('close-mobile-nav')" section="project_section" text="WORK" :isMobile="true"
            icon="📞" />
    </ul>
</template>
<script>
import NavBarItem from "./NavBarItem.vue";
export default {
    components: { NavBarItem },
    props: { isToggleDropdown: Boolean },
    watch: {
        /**
         * Watch for changes in isToggleDropdown
         * @param {} newValue 
         * @param {*} oldValue 
         */
        isToggleDropdown(newValue, oldValue) {
            this.$toggleClass(this.$refs['mobile_nav_list'], 'opacity-100', 'opacity-0', 'top-24', 'top-20');
        }
    }
};
</script>
  
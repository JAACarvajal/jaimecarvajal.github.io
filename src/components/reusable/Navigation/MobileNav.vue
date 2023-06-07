<template>
    <!-- Dropdown for hamburger list when in mobile view -->
    <ul
        class="w-full bg-transparent dark:text-white flex flex-row justify-center items-center text-center text-base font-semibold z-50 lp:hidden text-dark-gray mt-6 duration-300">
        <NavBarItem @close-mobile-nav="$emit('close-mobile-nav')" section="introduction_section" text="HOME"
            :isMobile="true" :isFirst="true" />
        <NavBarItem @close-mobile-nav="$emit('close-mobile-nav')" section="about_section" text="ABOUT" :isMobile="true" />
        <NavBarItem @close-mobile-nav="$emit('close-mobile-nav')" section="project_section" text="WORK" :isMobile="true" />
    </ul>
</template>
<script>
import NavBarItem from "./NavBarItem.vue";
export default {
    components: {
        NavBarItem
    },
    props: {
        isToggleDropdown: Boolean
    }
};
</script>
  
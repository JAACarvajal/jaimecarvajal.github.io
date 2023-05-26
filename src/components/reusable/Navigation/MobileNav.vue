<template>
    <!-- Dropdown for hamburger list when in mobile view -->
    <ul v-if="isToggleDropdown"
        class="absolute w-full bg-white border-l-2 flex flex-col justify-center items-center text-center text-base font-semibold z-50 lp:hidden text-dark-gray">
        <NavBarItem section="introduction_section" text="HOME" :isMobile="true" />
        <NavBarItem section="about_section" text="ABOUT" :isMobile="true" />
        <NavBarItem section="project_section" text="PROJECTS" :isMobile="true" />
        <NavBarItem section="project_section" text="CONTACT" :isMobile="true" />
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
  
<template>
    <!-- Dropdown for hamburger list when in mobile view -->
    <ul v-if="isToggleDropdown"
        class="absolute w-full bg-white border-l-2 flex flex-col justify-center items-center text-center text-base font-semibold z-50 lp:hidden text-dark-gray">
        <a class="text-right px-4 border-b-[1px] w-full py-4 hover:bg-violet-500 hover:text-white duration-200" href="#"
            @click="scrollToSection($event, 'introduction_section')">
            <!-- <font-awesome-icon icon="fa-solid fa-house" style="color: black" /> -->
            HOME
        </a>
        <a class="text-right px-4 border-b-[1px] w-full py-4 hover:bg-violet-500 hover:text-white duration-200" href="#"
            @click="scrollToSection($event, 'about_section')">
            ABOUT
            <!-- <font-awesome-icon icon="fa-solid fa-id-badge" style="color: black" /> -->
        </a>
        <a class="text-right px-4 border-b-[1px] w-full py-4 hover:bg-violet-500 hover:text-white duration-200" href="#"
            @click="scrollToSection($event, 'project_section')">
            <!-- <font-awesome-icon icon="fa-solid fa-laptop-code" style="color: black" /> -->
            PROJECTS
        </a>
        <a class="text-right px-4 border-b-[1px] w-full py-4 hover:bg-violet-500 hover:text-whitel duration-200" href="#"
            @click="scrollToSection($event, 'project_section')">
            <!-- <font-awesome-icon icon="fa-solid fa-id-badge" style="color: black" /> -->
            CONTACT
        </a>
    </ul>
</template>
<script>
import { scrollMixin } from '../../../mixins/scroll-mixin';
export default {
    props: ['isToggleDropdown'],
    mixins: [scrollMixin]
};
</script>
  
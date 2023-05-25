<template>
  <nav class="fixed w-full z-50">
    <div ref="nav_cont" id="nav_cont" class="flex flex-row h-20 lp:h-32 shadow w-full bg-white duration-200">
      <div ref="nav_sub_cont" id="nav_sub_cont" class="w-full flex justify-between items-center px-4 lp:px-28">
        <div class="flex items-center gap-4 w-1/2">
          <img ref="nav_logo" id="nav_logo" class="w-12 h-12 lp:w-28 lp:h-28 duration-200" src="/images/logo.png" alt=""
            srcset="" />
        </div>
        <ul ref="main_nav_list" id="main_nav_list"
          class="hidden lp:flex justify-center items-center h-full px-4 gap-8 text-base font-semibold text-dark-gray">
          <a class="text-xl hover:lp:custom-extra-sm-sub-underline hover:duration-200" href="#"
            @click="scrollToSection($event, 'introduction_section')">HOME</a>
          <a class="text-xl hover:lp:custom-extra-sm-sub-underline hover:duration-200" href="#"
            @click="scrollToSection($event, 'about_section')">ABOUT</a>
          <a class="text-xl hover:lp:custom-extra-sm-sub-underline hover:duration-200" href="#"
            @click="scrollToSection($event, 'project_section')">PROJECTS</a>
          <a class="text-xl hover:lp:custom-extra-sm-sub-underline hover:duration-200" href="#"
            @click="scrollToSection($event, 'project_section')">CONTACT</a>
          <label class="relative inline-flex items-center mr-5 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer">
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600">
            </div>
            <!-- <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Purple</span> -->
          </label>
        </ul>
        <ul ref="main_nav_shrinked_list" id="main_nav_shrinked_list"
          class="hidden justify-center items-center h-full px-4 gap-8 text-base font-semibold text-dark-gray">
          <label class="relative inline-flex items-center mr-5 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer">
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600">
            </div>
            <!-- <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Purple</span> -->
          </label>
        </ul>
        <font-awesome-icon class="block lp:hidden text-2xl cursor-pointer"
          :icon="bIsToggleDropdown ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" @click="toggleDropdown" />
      </div>
    </div>

    <!-- Dropdown for hamburger list when in mobile view -->
    <ul v-if="bIsToggleDropdown"
      class="absolute w-full flex flex-col justify-center items-center text-center text-base font-semibold z-50 bg-white lp:hidden top-20 border-2 shadow-lp text-dark-gray">
      <a class="w-full py-4 hover:bg-violet-500 hover:text-white" href="#"
        @click="scrollToSection($event, 'introduction_section')">HOME</a>
      <a class="w-full py-4 hover:bg-violet-500 hover:text-white" href="#"
        @click="scrollToSection($event, 'about_section')">ABOUT</a>
      <a class="w-full py-4 hover:bg-violet-500 hover:text-white" href="#"
        @click="scrollToSection($event, 'project_section')">PROJECTS</a>
      <a class="w-full py-4 hover:bg-violet-500 hover:text-white" href="#"
        @click="scrollToSection($event, 'project_section')">CONTACT</a>
    </ul>
  </nav>
</template>
<script>
import { scrollMixin } from '../mixins/scroll-mixin';
export default {
  data() {
    return {
      /**
       *
       */
      bIsToggleDropdown: false,
    };
  },
  mixins: [scrollMixin],
  methods: {
    /**
     * Toggle dropdown when hamburger/x-mark is clicked
     * @param {*} oEvent
     */
    toggleDropdown(oEvent) {
      this.bIsToggleDropdown = !this.bIsToggleDropdown;
    },
  }
};
</script>

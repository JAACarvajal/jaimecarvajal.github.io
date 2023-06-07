<template>
  <nav id="main_nav"
    class="fixed z-50 -translate-y-40 opacity-0 duration-700 left-1/2 -translate-x-1/2 top-4 rounded-3xl border-[1px] dark:border-dark-mode-layer-1 shadow-lg w-11/12 lp:w-3/4"
    ref="main_nav" :class="setSlideAnimationClasses('main_nav', 0, true, globalStore.setPageLoaded)">
    <div ref="nav_cont" id="nav_cont"
      class="flex flex-col lp:flex-row place-content-start h-20 lp:h-28 w-full bg-white duration-200 border-[1px] dark:border-dark-mode-border rounded-3xl overflow-hidden dark:bg-dark-mode-layer-2">
      <div ref="nav_sub_cont" id="nav_sub_cont"
        class="w-full flex justify-between items-center px-5 lp:px-16 mt-4 lp:mt-0">
        <div class="flex items-center gap-4 w-1/2">
          <a href="/">
            <img ref="nav_logo" id="nav_logo" class="w-12 h-12 lp:w-24 lp:h-24 duration-200" src="/images/logo.png"
              alt="portfolio logo" srcset="" />
          </a>
        </div>
        <ul ref="main_nav_list" id="main_nav_list"
          class="hidden lp:flex justify-center items-center h-full gap-8 text-base font-semibold text-dark-gray duration-200 dark:text-white">
          <NavBarItem section="introduction_section" text="HOME" :isMobile="false" />
          <NavBarItem section="about_section" text="ABOUT" :isMobile="false" />
          <NavBarItem section="project_section" text="WORK" :isMobile="false" />
          <SwitchModeButton />
        </ul>
        <ul ref="main_nav_shrinked_list" id="main_nav_shrinked_list"
          class="hidden justify-center items-center h-full gap-8 text-base font-semibold text-dark-gray">
          <SwitchModeButton />
        </ul>
        <div class="flex lp:hidden items-center gap-4">
          <ul
            class="flex lp:hidden desktop:hidden justify-center items-center h-full px-1 gap-8 text-base font-semibold text-dark-gray">
            <SwitchModeButton />
          </ul>
          <div class="w-6">
            <div class="group hover:cursor-pointer" ref="hamburger_icon" id="hamburger_icon" @click="toggleDropdown">
              <div class="h-1 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-300"></div>
              <div class="h-1 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-300"></div>
              <div class="h-1 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-300"></div>
            </div>
          </div>

        </div>
      </div>
      <MobileNav @close-mobile-nav="closeMobileNav()" :isToggleDropdown="bIsToggleDropdown" />
    </div>
  </nav>
</template>
<script>
import MobileNav from "./reusable/Navigation/MobileNav.vue";
import NavBarItem from "./reusable/Navigation/NavBarItem.vue";
import SwitchModeButton from "./reusable/Navigation/SwitchModeButton.vue";
import { useGlobalStore } from '../stores/global';

export default {
  components: {
    MobileNav,
    NavBarItem,
    SwitchModeButton
  },
  data() {
    return {
      bIsToggleDropdown: false,
      globalStore: useGlobalStore(),
    };
  },
  methods: {
    /**
     * Toggle dropdown when hamburger/x-mark is clicked
     */
    toggleDropdown() {
      this.bIsToggleDropdown = !this.bIsToggleDropdown;
      this.transformHamburger();
      if (this.bIsToggleDropdown) {
        this.$toggleClasses('nav_cont', 'h-40', 'h-20');
        this.$toggleClasses('nav_cont', 'h-40', 'h-20');
        return;
      }
      this.$toggleClasses('nav_cont', 'h-20', 'h-40');
    },
    closeMobileNav() {
      const hamburgerElement = this.$refs['hamburger_icon'];

      this.bIsToggleDropdown = false;
      this.$toggleClasses('nav_cont', 'h-20', 'h-40');

      hamburgerElement.childNodes[0].classList.remove('rotate-45', 'translate-y-2');
      hamburgerElement.childNodes[1].classList.remove('opacity-0');
      hamburgerElement.childNodes[hamburgerElement.childNodes.length - 1].classList.remove('-rotate-45', '-translate-y-2');
    },
    transformHamburger() {
      const hamburgerElement = this.$refs['hamburger_icon'];

      if (this.bIsToggleDropdown) {
        hamburgerElement.childNodes[0].classList.add('rotate-45', 'translate-y-2');
        hamburgerElement.childNodes[1].classList.add('opacity-0');
        hamburgerElement.childNodes[hamburgerElement.childNodes.length - 1].classList.add('-rotate-45', '-translate-y-2');
        return;
      }

      this.closeMobileNav();
    }
  }
};
</script>

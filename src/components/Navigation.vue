<template>
  <nav id="main_nav"
    class="fixed z-50 -translate-y-40 opacity-0 duration-700 left-1/2 -translate-x-1/2 top-4 rounded-3xl border-[1px] shadow-lg w-3/4 bg-light-gray"
    ref="main_nav" :class="setSlideAnimationClasses('main_nav', 0, true, globalStore.setPageLoaded)">
    <div ref="nav_cont" id="nav_cont" class="flex flex-row h-20 lp:h-32 w-full bg-white duration-300 rounded-3xl">
      <div ref="nav_sub_cont" id="nav_sub_cont" class="w-full flex justify-between items-center px-20">
        <div class="flex items-center gap-4 w-1/2">
          <img ref="nav_logo" id="nav_logo" class="w-12 h-12 lp:w-24 lp:h-24 duration-200" src="/images/logo.png"
            alt="portfolio logo" srcset="" />
        </div>
        <ul ref="main_nav_list" id="main_nav_list"
          class="hidden lp:flex justify-center items-center h-full gap-8 text-base font-semibold text-dark-gray">
          <NavBarItem section="introduction_section" text="HOME" :isMobile="false" />
          <NavBarItem section="about_section" text="ABOUT" :isMobile="false" />
          <NavBarItem section="project_section" text="WORK" :isMobile="false" />
          <NavBarItem section="contact_section" text="CONTACT" :isMobile="false" />
          <SwitchModeButton />
        </ul>
        <ul ref="main_nav_shrinked_list" id="main_nav_shrinked_list"
          class="hidden justify-center items-center h-full gap-8 text-base font-semibold text-dark-gray">
          <SwitchModeButton />
        </ul>
        <div class="flex lp:hidden items-center">
          <ul
            class="flex lp:hidden desktop:hidden justify-center items-center h-full px-1 gap-8 text-base font-semibold text-dark-gray">
            <SwitchModeButton />
          </ul>
          <font-awesome-icon class="block lp:hidden text-2xl cursor-pointer"
            :icon="bIsToggleDropdown ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" @click="toggleDropdown" />
        </div>
      </div>
    </div>

    <MobileNav :isToggleDropdown="bIsToggleDropdown" />
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
    }
  }
};
</script>

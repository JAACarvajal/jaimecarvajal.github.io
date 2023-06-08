<template>
  <!-- Fixed wrapper -->
  <nav id="main_nav" ref="main_nav"
    class="fixed z-50 top-4 left-1/2 w-11/12 lp:w-3/4 h-20 lp:h-28 bg-white opacity-0 border-[1px] rounded-3xl shadow-lg -translate-y-40 -translate-x-1/2 duration-300 dark:border-dark-mode-border dark:bg-dark-mode-layer-2"
    :class="setSlideAnimationClasses('main_nav', 0, true)">

    <!-- Main nav container -->
    <div ref="nav_cont" id="nav_cont" class="flex justify-between items-center w-full h-full px-5 lp:px-16">

      <!-- Logo -->
      <div class="flex items-center gap-4 w-1/2">
        <a href="/">
          <img ref="nav_logo" id="nav_logo" class="w-12 h-12 lp:w-24 lp:h-24 duration-300" src="/images/logo.png"
            alt="portfolio logo" />
        </a>
      </div>

      <!-- Main nav list -->
      <ul ref=" main_nav_list" id="main_nav_list"
        class="hidden lp:flex justify-center items-center gap-8 h-full text-base font-semibold text-dark-gray duration-200 dark:text-white">
        <NavBarItem section="introduction_section" text="HOME" :isMobile="false" />
        <NavBarItem section="about_section" text="ABOUT" :isMobile="false" />
        <NavBarItem section="project_section" text="WORK" :isMobile="false" />
        <SwitchModeButton />
      </ul>

      <!-- Shrinked nav list when scrolled down -->
      <ul ref="main_nav_shrinked_list" id="main_nav_shrinked_list"
        class="hidden justify-center items-center gap-8 h-full text-base font-semibold text-dark-gray">
        <SwitchModeButton />
      </ul>

      <!-- Mobile/tablet nav list -->
      <div class="flex lp:hidden items-center gap-4">
        <ul class="flex lp:hidden justify-center items-center h-full px-1 gap-8 text-base font-semibold text-dark-gray">
          <SwitchModeButton />
        </ul>
        <div class="w-6">
          <div class="group hover:cursor-pointer" ref="hamburger_icon" id="hamburger_icon" @click="toggleDropdown">
            <HamburgerLine />
            <HamburgerLine />
            <HamburgerLine />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile/tablet nav -->
    <MobileNav @close-mobile-nav="closeMobileNav()" :isToggleDropdown="bIsToggleDropdown" />
  </nav>
</template>
<script>
import HamburgerLine from "./reusable/Navigation/HamburgerLine.vue";
import MobileNav from "./reusable/Navigation/MobileNav.vue";
import NavBarItem from "./reusable/Navigation/NavBarItem.vue";
import SwitchModeButton from "./reusable/Navigation/SwitchModeButton.vue";

export default {
  components: {
    MobileNav,
    NavBarItem,
    SwitchModeButton,
    HamburgerLine
  },
  data() {
    return { bIsToggleDropdown: false };
  },
  methods: {
    /**
     * Toggle dropdown when hamburger/x-mark is clicked
     */
    toggleDropdown() {
      this.bIsToggleDropdown = !this.bIsToggleDropdown;
      this.transformHamburger();
    },
    /**
     * Transform/animate hamburger
     */
    transformHamburger() {
      const hamburgerElement = this.$refs['hamburger_icon'];

      this.$toggleClass(hamburgerElement.childNodes[0], 'rotate-45', 'translate-y-2');
      this.$toggleClass(hamburgerElement.childNodes[1], 'opacity-0');
      this.$toggleClass(hamburgerElement.childNodes[hamburgerElement.childNodes.length - 1], '-rotate-45', '-translate-y-2');
    }
  }
};
</script>

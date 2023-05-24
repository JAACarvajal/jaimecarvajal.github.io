<template>
  <nav class="fixed w-full z-50">
    <div class="flex flex-row h-20 tablet:h-32 shadow w-full bg-white">
      <div class="w-full flex justify-between items-center px-4 tablet:px-60">
        <div class="flex items-center gap-4">
          <img class="w-12 h-12 tablet:w-28 tablet:h-28" src="/images/logo.png" alt="" srcset="" />
          <!-- <p
            class="text-lg tablet:text-xl font-extrabold tracking-wide text-dark-gray"
          >
            JAIME CARVAJAL
          </p> -->
        </div>
        <ul
          class="hidden tablet:flex justify-center items-center h-full px-4 gap-6 text-base font-semibold text-dark-gray">
          <a class="text-xl" href="#">HOME</a>
          <a class="text-xl" href="#">ABOUT</a>
          <a class="text-xl" href="#">PROJECTS</a>
          <a class="text-xl" href="#">CONTACT</a>
        </ul>
        <font-awesome-icon class="block tablet:hidden text-2xl cursor-pointer"
          :icon="bIsToggleDropdown ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" @click="toggleDropdown" />
      </div>
    </div>

    <!-- Dropdown for hamburger list when in mobile view -->
    <ul v-if="bIsToggleDropdown"
      class="absolute w-full flex flex-col justify-center items-center text-center text-base font-semibold z-50 bg-white tablet:hidden top-20 border-2 shadow-tablet text-dark-gray">
      <a class="w-full py-4 hover:bg-violet-500 hover:text-white" href="#">HOME</a>
      <a class="w-full py-4 hover:bg-violet-500 hover:text-white" href="#">ABOUT</a>
      <a class="w-full py-4 hover:bg-violet-500 hover:text-white" href="#">PROJECTS</a>
      <a class="w-full py-4 hover:bg-violet-500 hover:text-white" href="#">CONTACT</a>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      /**
       *
       */
      bIsToggleDropdown: false,
    };
  },
  methods: {
    /**
     * Toggle dropdown when hamburger/x-mark is clicked
     * @param {*} oEvent
     */
    toggleDropdown(oEvent) {
      this.bIsToggleDropdown = !this.bIsToggleDropdown;
    },
  },
};
</script>

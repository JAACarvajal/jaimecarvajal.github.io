<template>
  <nav class="fixed w-full">
    <div class="flex flex-row h-20 md:h-28 shadow-md w-full bg-white">
      <div class="w-full flex justify-between items-center px-4 md:px-20">
        <div class="flex items-center gap-4">
          <img
            class="w-12 h-12 md:w-20 md:h-20"
            src="/images/logo.png"
            alt=""
            srcset=""
          />
          <!-- <p
            class="text-lg md:text-xl font-extrabold tracking-wide text-dark-gray"
          >
            JAIME CARVAJAL
          </p> -->
        </div>
        <ul
          class="hidden md:flex justify-center items-center h-full px-4 gap-6 text-base font-semibold text-dark-gray"
        >
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONTACT</a>
        </ul>
        <font-awesome-icon
          class="block md:hidden text-2xl cursor-pointer"
          :icon="bIsToggleDropdown ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
          @click="toggleDropdown"
        />
      </div>
    </div>

    <!-- Dropdown for hamburger list when in mobile view -->
    <ul
      v-if="bIsToggleDropdown"
      class="absolute w-full flex flex-col justify-center items-center text-base font-semibold z-50 bg-white md:hidden top-20 border-2 shadow-md text-dark-gray"
    >
      <a
        class="w-full py-4 text-center hover:bg-violet-500 hover:text-white"
        href="#"
        >HOME</a
      >
      <a
        class="w-full py-4 text-center hover:bg-violet-500 hover:text-white"
        href="#"
        >ABOUT</a
      >
      <a
        class="w-full py-4 text-center hover:bg-violet-500 hover:text-white"
        href="#"
        >PROJECTS</a
      >
      <a
        class="w-full py-4 text-center hover:bg-violet-500 hover:text-white"
        href="#"
        >CONTACT</a
      >
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

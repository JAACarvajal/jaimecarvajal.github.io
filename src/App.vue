<template>
  <div id="main_app_container" class="relative duration-700 dark:bg-dark-mode-black">
    <Navigation />
    <Sidebar sidebar-position="right" list="navigation" />
    <Sidebar sidebar-position="left" list="socials" />
    <Introduction />
    <About />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Sidebar from "./components/Sidebar.vue";
import Introduction from "./components/Introduction.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
import { useGlobalStore } from './stores/global';

export default {
  components: {
    Navigation,
    Sidebar,
    Introduction,
    About,
    Projects,
    Footer,
  },
  data() {
    return { globalStore: useGlobalStore() }
  },
  created() {
    if (localStorage.dark_mode) {
      localStorage.dark_mode = this.globalStore.isDarkMode;
    } else {
      localStorage.dark_mode = false;
    }
  }
}
</script>

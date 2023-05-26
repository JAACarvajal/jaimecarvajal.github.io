<template>
  <div class="h-screen relative">
    <Navigation />
    <Sidebar />
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
export default {
  components: {
    Navigation,
    Sidebar,
    Introduction,
    About,
    Projects,
    Footer,
  },
  methods: {
    setScrollDirection() {
      // Get currenct scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPosition > this.lastScrollPosition) {
        // Scrolling down
        this.scrollDirection = 'down';
      } else if (currentScrollPosition < this.lastScrollPosition) {
        // Scrolling up
        this.scrollDirection = 'up';
      }

      this.lastScrollPosition = currentScrollPosition;
    }
  }
}
</script>

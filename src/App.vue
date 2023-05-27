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
  }
}
</script>

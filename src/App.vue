<template>
  <div id="main_app_container" class="h-screen relative">
    <Navigation />
    <Sidebar sidebar-position="right" list="navigation" />
    <Sidebar sidebar-position="left" list="socials" />
    <Introduction />
    <About />
    <Projects />
    <Contact />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Sidebar from "./components/Sidebar.vue";
import Introduction from "./components/Introduction.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navigation,
    Sidebar,
    Introduction,
    About,
    Projects,
    Contact,
    Footer,
  }
}
</script>

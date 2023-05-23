<template>
  <div class="h-screen relative">
    <Navigation />
    <Introduction />
    <About />
    <Projects />
    <Footer />
  </div>
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import Introduction from "./components/Introduction.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
</script>

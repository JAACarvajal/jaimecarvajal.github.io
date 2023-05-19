<template>
  <div
    class="h-screen relative bg-[url('/images/background-1.jpg')] bg-no-repeat bg-cover bg-fixed"
  >
    <Navigation />
    <Introduction />
    <About />
    <Footer />
  </div>
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import Introduction from "./components/Introduction.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";
</script>

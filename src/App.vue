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
  data() {
    return {
      currentViewedSection: 1,
      sectionOrder: [
        'introduction_section',
        'about_section',
        'project_section'
      ],
      lastScrollPosition: 0,
      scrollDirection: null
    }
  },
  methods: {
    isSectionAboveViewport(sectionId) {
      const section = document.getElementById(sectionId);

      if (section) {
        const rect = section.getBoundingClientRect();
        return rect.top < 0;
      }

      return false;
    },
    isSectionBelowViewport(sectionId) {
      const section = document.getElementById(sectionId);

      if (section) {
        const rect = section.getBoundingClientRect();
        return rect.bottom < 0;
      }

      return false;
    },
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

      // const threshold = 100; // Adjust the threshold as needed
      // if (currentScrollPosition >= threshold) {
      //   this.scrollToSection();
      // }
    },
    scrollToSection() {
      // if (this.scrollDirection === 'down') {
      const targetSection = document.getElementById(this.sectionOrder[this.currentViewedSection + 1]);

      if (targetSection) {
        // targetSection.scrollIntoView({ behavior: "smooth" });
        const topOffset = targetSection.offsetTop;
        const scrollPosition = topOffset - 50; // Adjust the offset as needed

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
      // let nextSectionIndex = this.sectionOrder.indexOf(this.currentViewedSection) + 1;
      // const targetSection = document.getElementById(this.sectionOrder[nextSectionIndex]);
      // targetSection.scrollIntoView({behavior: "smooth"});
      // }
    },
    handleNavigation() {
      if (window.pageYOffset > 0) {
        document.getElementById('main_nav_list').classList.remove('tablet:flex');

        document.getElementById('nav_cont').classList.remove('tablet:h-32');
        document.getElementById('nav_cont').classList.add('tablet:h-16');

        document.getElementById('nav_logo').classList.remove('tablet:w-28');
        document.getElementById('nav_logo').classList.add('tablet:w-14');

        document.getElementById('nav_logo').classList.remove('tablet:h-28');
        document.getElementById('nav_logo').classList.add('tablet:h-14');
      } else {
        console.log('on top');
        document.getElementById('main_nav_list').classList.add('tablet:flex');

        document.getElementById('nav_cont').classList.remove('tablet:h-16');
        document.getElementById('nav_cont').classList.add('tablet:h-32');

        document.getElementById('nav_logo').classList.remove('tablet:w-14');
        document.getElementById('nav_logo').classList.add('tablet:w-28');

        document.getElementById('nav_logo').classList.remove('tablet:h-14');
        document.getElementById('nav_logo').classList.add('tablet:h-28');
      }
    },
    handleScroll(event) {
      this.handleNavigation();
      event.preventDefault();
      // this.setScrollDirection();
      // this.scrollToSection();
    }
  },
  /**
   * 
   */
  mounted() {
    this.currentViewedSection = 0;
    window.addEventListener('scroll', this.handleScroll);
  },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
}
</script>

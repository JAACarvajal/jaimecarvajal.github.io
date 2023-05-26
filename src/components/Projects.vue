<template>
  <div ref="project_section" id="project_section"
    class="flex flex-col place-content-center gap-1 text-3xl mx-auto w-full h-auto lp:h-screen py-10 px-10 lp:px-32 text-dark-gray">
    <h1 ref="main_title"
      class="text-center font-extrabold text-5xl sm:lp:text-7xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
      :class="isViewed ? setSlideAnimationClasses('main_title', 0) : ''">
      <span class="mobile-custom-underline lp:custom-underline">PROJECTS</span>
    </h1>
    <Divider refId="projects_divider" :is-viewed="isViewed" :is-with-animation="true" />
    <div class="flex flex-col gap-4">
      <div class="flex gap-4" v-for="(project, index) in projectList">
        <div>
          <h1>{{ project.name }}</h1>
          <p>{{ project.description }}</p>
        </div>
        <div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { projects } from '../constants';
import Divider from "./reusable/Divider.vue";
import { animationMixin } from '../mixins/custom-animation-mixin';
export default {
  components: {
    Divider,
  },
  data() {
    return {
      isViewed: false,
      projectList: this.projects
    }
  },
  mixins: [animationMixin],
  watch: {
    currentViewedSection(newValue, oldValue) {
      this.isViewed = newValue === 'project_section';
    }
  },
  mounted() {
    console.log(this.projectList);
  },
}
</script>

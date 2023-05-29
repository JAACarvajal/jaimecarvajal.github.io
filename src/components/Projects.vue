<template>
  <div ref="project_section" id="project_section"
    class="flex flex-col place-content-center gap-1 text-3xl mx-auto w-full h-auto py-10 px-10 lp:px-32 text-dark-gray">
    <h1 ref="main_title"
      class="text-center font-extrabold text-5xl lp:text-7xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
      :class="isViewed ? setSlideAnimationClasses('main_title', 0) : ''">
      <span class="mobile-custom-underline lp:custom-underline">PROJECTS</span>
    </h1>
    <Divider refId="projects_divider" :is-viewed="isViewed" :is-with-animation="true" />
    <div class="flex flex-col gap-4 tb:gap-16 lp:gap-24">
      <div class="flex flex-col lp:flex-row gap-1 lp:gap-8" v-for="(project, index) in projectsList">
        <Project :projectData="project" :isViewed="isViewed" :index="index" />
      </div>
    </div>
    <div ref="more_to_come_projects" class="flex justify-center mt-10 translate-x-20 opacity-0 duration-700"
      :class="isViewed ? setSlideAnimationClasses('more_to_come_projects', 500) : ''">
      <h1 class="text-lg">(more to come soon)</h1>
    </div>
  </div>
</template>
<script>
import Divider from "./reusable/Divider.vue";
import Project from "./reusable/Projects/Project.vue";
import { projects } from '../constants';

export default {
  components: {
    Divider,
    Project
  },
  data() {
    return {
      isViewed: false,
      projectsList: projects
    }
  },
  watch: {
    currentViewedSection(newValue, oldValue) {
      this.isViewed = newValue === 'project_section';
    }
  }
}
</script>

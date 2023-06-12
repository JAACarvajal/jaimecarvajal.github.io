<template>
  <Section :sectionRefId="'project_section'" :isViewed="isViewed" containerId="project_card" :containerAnimationDelay="0">

    <!-- Title SLOT -->
    <template #title>
      WORK
    </template>

    <!-- content SLOT -->
    <template #content>
      <div class="flex flex-col gap-10 tb:gap-16 lp:gap-24">
        <div class="flex flex-col lp:flex-row gap-1 lp:gap-8" v-for="(project, index) in projectsList">
          <Project :projectData="project" :isViewed="isViewed" :index="index" />
        </div>
      </div>
      <div ref="more_to_come_projects"
        class="relative top-10 w-full min-h-max mt-20 translate-x-20 opacity-0 duration-500"
        :class="isViewed ? setSlideAnimationClasses('more_to_come_projects', 900) : ''">
        <p class="text-xl text-center">👌🏼 More <strong>personal projects</strong> and <strong>works</strong> coming
          soon! 👌🏼</p>
      </div>
    </template>
  </Section>
</template>
<script>
import Section from "./reusable/Section.vue";
import Project from "./reusable/Projects/Project.vue";
import { projects } from '../constants';

export default {
  components: {
    Section,
    Project
  },
  data() {
    return {
      isViewed: false,
      projectsList: projects
    }
  },
  watch: {
    /**
     * Watch changes on currentViewedSection
     * @param {} newValue 
     * @param {*} oldValue 
     */
    currentViewedSection(newValue, oldValue) {
      this.isViewed = newValue === 'project_section';
    }
  }
}
</script>

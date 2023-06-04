<template>
  <Section :sectionRefId="'project_section'" :dividerRefId="'project_divider'" :isViewed="isViewed"
    :is-with-animation="true" :dividerAnimationDelay="100" containerId="project_card" :containerAnimationDelay="0">
    <template #title>
      WORK
    </template>
    <template #content>
      <div class="flex flex-col gap-4 tb:gap-16 lp:gap-24 mt-10">
        <div class="flex flex-col lp:flex-row gap-1 lp:gap-8" v-for="(project, index) in projectsList">
          <Project :projectData="project" :isViewed="isViewed" :index="index" />
        </div>
      </div>
      <!-- <div ref="more_to_come_projects" class="flex justify-center mt-10 translate-x-20 opacity-0 duration-700"
        :class="isViewed ? setSlideAnimationClasses('more_to_come_projects', 500) : ''">
        <h1 class="text-lg">(more to come soon)</h1>
      </div> -->
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
    currentViewedSection(newValue, oldValue) {
      this.isViewed = newValue === 'project_section';
    }
  }
}
</script>

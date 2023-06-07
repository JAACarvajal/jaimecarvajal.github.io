<template>
  <Section :sectionRefId="'project_section'" :dividerRefId="'project_divider'" :isViewed="isViewed"
    :is-with-animation="true" :dividerAnimationDelay="100" containerId="project_card" :containerAnimationDelay="0">
    <template #title>
      WORK
      <!-- <span class="text-white">🧑🏽‍💻</span> -->
    </template>
    <template #icon>
      💻
    </template>
    <template #content>
      <div class="flex flex-col gap-10 tb:gap-16 lp:gap-24 mt-10">
        <div class="flex flex-col lp:flex-row gap-1 lp:gap-8" v-for="(project, index) in projectsList">
          <Project :projectData="project" :isViewed="isViewed" :index="index" />
        </div>
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
    currentViewedSection(newValue, oldValue) {
      this.isViewed = newValue === 'project_section';
    }
  }
}
</script>

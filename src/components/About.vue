<template>
  <Section :sectionRefId="'about_section'" :dividerRefId="'about_divider'" :isViewed="isViewed" :is-with-animation="true"
    :dividerAnimationDelay="100" containerId="about_card" :containerAnimationDelay="0">
    <template #title>
      ABOUT ME
    </template>
    <template #content>
      <div class="flex flex-col lp:flex-row gap-12 mt-10 lp:mt-0">
        <div class="flex flex-col gap-8 lp:w-1/2">
          <h3 ref="get_to_know_title"
            class="text-center lp:text-left font-bold text-xl lp:text-2xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
            :class="isViewed ? setSlideAnimationClasses('get_to_know_title', 400) : ''">
            GET TO KNOW ME
          </h3>
          <div ref="get_to_know_desc" class="flex flex-col gap-4 translate-x-20 opacity-0 duration-700"
            :class="isViewed ? setSlideAnimationClasses('get_to_know_desc', 500) : ''">
            <p class="text-base lp:text-lg">
              Hello stranger! 👋 my name is Jaime Alejandro A. Carvajal II and I am a web developer responsible for
              creating and implementing the visual and interactive elements of the internet.
            </p>
          </div>
        </div>
        <div class="lp:w-1/2 flex flex-col gap-8">
          <h3 ref="skills_and_tech_title"
            class="text-center lp:text-left font-bold text-xl lp:text-2xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
            :class="isViewed ? setSlideAnimationClasses('skills_and_tech_title', 600) : ''">
            SKILLS & TECHNOLOGIES
          </h3>
          <div ref="skills_and_tech_desc"
            class="flex flex-row flex-wrap gap-8 justify-center lp:justify-start translate-x-20 opacity-0 duration-700"
            :class="isViewed ? setSlideAnimationClasses('skills_and_tech_desc', 700) : ''">
            <div v-for="(skill, index) in skillsList" :key="index"
              class="flex tb:hidden flex-row justify-center items-center gap-2">
              <Icon :iconName="skill.icon_name" style="font-size: 2em;" />
            </div>
            <div v-for="(skill, index) in skillsList" :key="index"
              class="hidden tb:flex flex-row justify-center items-center gap-2">
              <Icon :iconName="skill.icon_name" style="font-size: 3.3em;" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </Section>
</template>
<script>
import { skills } from '../constants';
import { initFlowbite } from 'flowbite';
import Section from "./reusable/Section.vue";
import Icon from "./reusable/Icon.vue";

export default {
  components: {
    Icon,
    Section
  },
  data() {
    return {
      isViewed: false,
      skillsList: skills,
    }
  },
  watch: {
    currentViewedSection(newValue, oldValue) {
      this.isViewed = newValue === 'about_section';
    }
  }
};
</script>

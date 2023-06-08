<template>
  <Section :sectionRefId="'about_section'" :isViewed="isViewed" containerId="about_card" :containerAnimationDelay="0">

    <!-- Title SLOT -->
    <template #title>
      ABOUT
    </template>

    <!-- content SLOT -->
    <template #content>
      <div class="flex flex-col lp:flex-row gap-16 mt-10 lp:mt-0">

        <!-- Get to know me section -->
        <div class="flex flex-col lp:w-1/2 gap-4 tb:gap-8">

          <!-- Section title -->
          <h3 ref="get_to_know_title"
            class="text-center lp:text-left font-bold text-xl tb:text-2xl lp:text-3xl tracking-tight opacity-0 translate-x-20 duration-700"
            :class="isViewed ? setSlideAnimationClasses('get_to_know_title', 400) : ''">
            GET TO KNOW ME 😎
          </h3>

          <!-- Descriptions -->
          <div ref="get_to_know_desc" class="flex flex-col gap-4 leading-[px] opacity-0 translate-x-20 duration-700 "
            :class="isViewed ? setSlideAnimationClasses('get_to_know_desc', 500) : ''">

            <p v-for="(description, index) in descriptions" :key="index" class="text-base lp:text-lg">
              {{ description }}
            </p>

            <!-- Resume download button -->
            <ResumeButton />
          </div>
        </div>

        <!-- Skills and technologies section -->
        <div class="flex flex-col lp:w-1/2 gap-4 tb:gap-8">

          <!-- Section title -->
          <h3 ref="skills_and_tech_title"
            class="text-center lp:text-left font-bold text-xl tb:text-2xl lp:text-3xl tracking-tight opacity-0 translate-x-20 duration-700"
            :class="isViewed ? setSlideAnimationClasses('skills_and_tech_title', 600) : ''">
            SKILLS & TECHNOLOGIES 🧐
          </h3>

          <!-- Skills section -->
          <div ref="skills_and_tech_desc"
            class="flex flex-row flex-wrap justify-center lp:justify-start gap-8 opacity-0 translate-x-20 duration-700"
            :class="isViewed ? setSlideAnimationClasses('skills_and_tech_desc', 700) : ''">
            <div v-for="(skill, index) in skillsList" :key="index"
              class="flex tb:hidden flex-row justify-center items-center gap-2">
              <Icon :iconName="skill.icon_name" style="font-size: 2em;" />
            </div>
            <div v-for="(skill, index) in skillsList" :key="index"
              class="hidden tb:flex flex-row justify-center items-center gap-2">
              <Icon :iconName="skill.icon_name" style="font-size: 4em;" />
            </div>
          </div>
        </div>

        <!-- Mobile/Tablet resume download button -->
        <ResumeButton :is-mobile="true" />
      </div>
    </template>
  </Section>
</template>
<script>
import { about_descriptions, skills } from '../constants';
import Section from "./reusable/Section.vue";
import Icon from "./reusable/Icon.vue";
import ResumeButton from "./reusable/ResumeButton.vue";

export default {
  components: {
    Icon,
    Section,
    ResumeButton
  },
  data() {
    return {
      isViewed: false,
      skillsList: skills,
      descriptions: about_descriptions,
    }
  },
  watch: {
    /**
     * Watch changes on currentViewedSection
     * @param {*} newValue 
     * @param {*} oldValue 
     */
    currentViewedSection(newValue, oldValue) {
      this.isViewed = newValue === 'about_section';
    }
  }
};
</script>

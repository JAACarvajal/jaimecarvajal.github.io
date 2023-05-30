<template>
    <Section :sectionRefId="'contact_section'" :dividerRefId="'contact_divider'" :isViewed="isViewed"
        :is-with-animation="true" :dividerAnimationDelay="100" containerId="contact_card" :containerAnimationDelay="0">
        <template #title>
            <h1 ref="main_title"
                class="absolute -top-10 -left-30 text-center font-extrabold text-5xl lp:text-7xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
                :class="isViewed ? setSlideAnimationClasses('main_title', 200) : ''">
                <span class="mobile-custom-underline lp:custom-underline">CONTACT</span>
            </h1>
        </template>
        <template #content>
        </template>
    </Section>
</template>
<script>
import Section from "./reusable/Section.vue";

export default {
    components: {
        Section
    },
    data() {
        return {
            isViewed: false
        }
    },
    watch: {
        currentViewedSection(newValue, oldValue) {
            this.isViewed = newValue === 'contact_section';
        }
    }
}
</script>
  
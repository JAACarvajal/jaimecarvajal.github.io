<template>
    <div ref="contact_section" id="contact_section"
        class="flex flex-col place-content-center gap-1 text-3xl mx-auto w-full h-screen py-10 px-10 lp:px-32 text-dark-gray">
        <h1 ref="main_title"
            class="text-center font-extrabold text-5xl lp:text-7xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
            :class="isViewed ? setSlideAnimationClasses('main_title', 0) : ''">
            <span class="mobile-custom-underline lp:custom-underline">CONTACT</span>
        </h1>
        <Divider refId="contact_divider" :is-viewed="isViewed" :is-with-animation="true" />
    </div>
</template>
<script>
import Divider from "./reusable/Divider.vue";

export default {
    components: {
        Divider
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
  
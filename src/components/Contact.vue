<template>
    <div class="relative flex flex-col justify-between items-center w-full h-96 p-10 px-20 tb:px-56 lp:mt-5 gap-10">
        <button type="button"
            class="bg-gradient-to-r from-[#09203F] to-[#537895] mt-10 tb:mt-0 border rounded-2xl w-80 h-24 bg-white text-lg tb:text-xl text-white font-medium uppercase leading-normal tracking-wider shadow-lg hover:shadow-2xl duration-1000 translate-y-0 hover:-translate-y-3 hover:duration-200">
            EMAIL ME
        </button>
        <!-- <h3
                    class="text-xl font-bold leading-snug tracking-wide lp:text-2xl text-center lp:text-left text-dark-gray">
                    JAIME CARVAJAL
                </h3> -->
        <p class="text-center text-xs tb:text-sm text-dark-gray lp:text-left">© Copyright 2023. Made by Jaime
            Carvajal
        </p>
        <!-- <div class="flex flex-col w-30 gap-4 h-32">
                <h3
                    class="text-xl lp:text-2xl font-bold leading-snug tracking-wide text-center lp:text-left text-dark-gray">
                    SOCIALS
                </h3>
                <div class="flex gap-4">
                    <font-awesome-icon icon="fa-brands fa-linkedin" style="color: #323232;" size="xl" />
                    <font-awesome-icon icon="fa-brands fa-github" style="color: #323232;" size="xl" />
                    <font-awesome-icon icon="fa-brands fa-instagram" style="color: #323232;" size="xl" />
                </div>
            </div> -->
    </div>
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
  
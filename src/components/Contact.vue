<template>
    <div
        class="relative flex flex-col justify-between items-center w-full h-96 p-10 px-20 tb:px-56 mt-5 tb:mt-0 lp:pt-0 gap-10">
        <button type="button"
            class="bg-gradient-to-r from-[#09203F] to-[#537895] mt-10 tb:mt-0 border rounded-3xl tb:rounded-2xl w-80 h-20 tb:h-24 bg-white text-lg tb:text-xl text-white font-medium uppercase leading-normal tracking-wider shadow-lg hover:shadow-2xl duration-1000 translate-y-0 hover:-translate-y-4 hover:duration-200"
            @click="openEmail()">
            GET IN TOUCH
        </button>
        <div class="flex flex-col justify-center place-content-center text-center tb:hidden text-dark-gray">
            <h2 class="text-xl font-bold">JAIME CARVAJAL</h2>
            <p>jaacarvajal27@gmail.com</p>
            <div class="flex justify-center gap-3 mt-3">
                <a v-for="(social, index) in socialsList" target="_blank" :href="social.url" :id="index" rel="noreferrer">
                    <font-awesome-icon :icon="social.icon_class" style="color: #323232;" size="xl" />
                </a>
            </div>
        </div>
        <!-- <h3
                    class="text-xl font-bold leading-snug tracking-wide lp:text-2xl text-center lp:text-left text-dark-gray">
                    JAIME CARVAJAL
                </h3> -->
        <p class="text-center text-xs tb:text-sm text-dark-gray lp:text-left">© Copyright 2023. Made by Jaime
            Carvajal
        </p>
    </div>
</template>
<script>
import Section from "./reusable/Section.vue";
import { socials } from '../constants';

export default {
    components: {
        Section
    },
    data() {
        return {
            isViewed: false,
            socialsList: socials
        }
    },
    watch: {
        currentViewedSection(newValue, oldValue) {
            this.isViewed = newValue === 'contact_section';
        }
    },
    methods: {
        openEmail() {
            window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
        }
    }
}
</script>
  
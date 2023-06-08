<template>
    <!-- Main container -->
    <div
        class="relative flex flex-col justify-between items-center w-full p-10 px-20 tb:px-56 mt-5 tb:mt-0 lp:pt-0 gap-10 text-dark-gray dark:text-white">
        <!-- Scroll to top button -->
        <div class="w-full text-center tb:w-auto group">
            <font-awesome-icon class="animate-bounce hover:cursor-pointer" icon="fa-solid fa-angle-up" size="2xl"
                @click.prevent="scrollToTopPage" />
        </div>

        <!-- Get in touch button -->
        <button type="button"
            class="w-80 h-20 text-lg tb:text-xl text-white font-medium uppercase leading-normal tracking-wider bg-white bg-gradient-to-r from-[#09203F] to-[#537895] rounded-3xl tb:rounded-2xl shadow-lg duration-1000 translate-y-0 hover:shadow-2xl hover:-translate-y-4 hover:duration-200 dark:from-[#4568dc] dark:to-[#b06ab3]"
            @click="openEmail()">
            GET IN TOUCH 🤝🏽
        </button>

        <!-- Mobile name and socials section -->
        <div class="tb:hidden flex flex-col justify-center place-content-center text-center">
            <h2 class="text-xl font-bold">JAIME CARVAJAL</h2>
            <p>jaacarvajal27@gmail.com</p>
            <div class="flex justify-center gap-3 mt-3">
                <a v-for="(social, index) in socialsList" target="_blank" :href="social.url" :id="index" rel="noreferrer">
                    <font-awesome-icon :icon="social.icon_class" size="xl" />
                </a>
            </div>
        </div>

        <!-- Copyright section -->
        <p class="text-center text-xs tb:text-sm lp:text-left">
            © Copyright 2023. Made by Jaime Carvajal
        </p>
    </div>
</template>
<script>
import Section from "./reusable/Section.vue";
import { socials } from '../constants';

export default {
    components: { Section },
    data() {
        return { socialsList: socials }
    },
    methods: {
        /**
         * Open email app
         */
        openEmail() {
            window.location.href = "mailto:jaacarvajal27@gmail.com?subject=&body=";
        }
    }
}
</script>
  
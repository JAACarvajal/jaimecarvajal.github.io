<template>
    <div
        class="relative flex flex-col justify-between items-center w-full p-10 px-20 tb:px-56 mt-5 tb:mt-0 lp:pt-0 gap-10 text-dark-gray dark:text-white">
        <div class="w-full text-center tb:w-auto group">
            <font-awesome-icon class="animate-bounce hover:cursor-pointer" icon="fa-solid fa-angle-up" size="2xl"
                @click.prevent="scrollToTopPage" />
        </div>
        <button type="button"
            class="bg-gradient-to-r from-[#09203F] to-[#537895] dark:from-[#4568dc] dark:to-[#b06ab3] rounded-3xl tb:rounded-2xl w-80 h-20 bg-white text-lg tb:text-xl text-white font-medium uppercase leading-normal tracking-wider shadow-lg hover:shadow-2xl duration-1000 translate-y-0 hover:-translate-y-4 hover:duration-200"
            @click="openEmail()">
            GET IN TOUCH 🤝🏽
        </button>

        <div class="flex flex-col justify-center place-content-center text-center tb:hidden">
            <h2 class="text-xl font-bold">JAIME CARVAJAL</h2>
            <p>jaacarvajal27@gmail.com</p>
            <div class="flex justify-center gap-3 mt-3">
                <a v-for="(social, index) in socialsList" target="_blank" :href="social.url" :id="index" rel="noreferrer">
                    <font-awesome-icon :icon="social.icon_class" size="xl" />
                </a>
            </div>
        </div>
        <p class="text-center text-xs tb:text-sm lp:text-left">© Copyright 2023. Made by Jaime
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
            socialsList: socials
        }
    },
    methods: {
        openEmail() {
            window.location.href = "mailto:jaacarvajal27@gmail.com?subject=&body=";
        }
    }
}
</script>
  
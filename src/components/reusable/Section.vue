<template>
    <div :ref="sectionRefId" :id="sectionRefId"
        class="relative flex flex-col place-content-center gap-1 text-3xl mx-auto px-5 tb:w-11/12 lp:w-3/4 h-auto text-dark-gray min-h-screen dark:text-white py-10">
        <div :ref="containerId"
            class="group flex flex-col place-content-center relative bg-gradient-to-t tb:bg-gradient-to-l from-light-gray dark:from-dark-mode-layer-2 py-10 tb:py-24 lp:py-32 px-5 tb:px-24 border lp:border-t-0 dark:border-dark-mode-border rounded-3xl shadow-lg -translate-y-40 opacity-0 duration-1000 hover:-translate-y-4 hover:duration-300"
            :class="isViewed ? setSlideAnimationClasses(containerId, containerAnimationDelay, true) : ''">
            <h1 ref="main_title"
                class="text-center w-full lp:text-left lp:absolute -top-20 group-hover:-top-24 left-30 font-extrabold text-6xl tb:text-8xl lp:text-[7rem] pc:text-[11rem] leading-snug tracking-wide translate-x-20 opacity-0 duration-500"
                :class="isViewed ? setSlideAnimationClasses('main_title', 300) : ''">
                <span
                    class="text-transparent bg-clip-text bg-gradient-to-r from-[#09203F] to-[#537895] dark:from-[#4568dc] dark:to-[#b06ab3]">
                    <slot name="title"></slot>
                </span>
            </h1>
            <!-- content slot -->
            <slot name="content"></slot>
        </div>

    </div>
</template>
<script>
import Divider from "../reusable/Divider.vue";
export default {
    components: {
        Divider
    },
    props: {
        sectionRefId: String,
        dividerRefId: String,
        isViewed: Boolean,
        isWithAnimation: Boolean,
        dividerAnimationDelay: Number,
        containerId: String,
        containerAnimationDelay: Number,
        bgColor: String
    }
};
</script>
  
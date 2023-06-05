<template>
    <div :ref="sectionRefId" :id="sectionRefId"
        class="flex flex-col place-content-center gap-1 text-3xl mx-auto pb-5 px-5 tb:w-11/12 lp:w-3/4 h-auto lp:h-screen text-dark-gray mt-10 lp:mt-0">
        <div :ref="containerId"
            class="relative bg-gradient-to-l from-light-gray py-10 tb:py-20 px-5 tb:px-10 border-2 lp:border-t-0 rounded-3xl shadow-lg -translate-y-40 opacity-0 duration-1000 hover:-translate-y-4 hover:duration-300"
            :class="isViewed ? setSlideAnimationClasses(containerId, containerAnimationDelay, true) : ''">
            <h1 ref="main_title"
                class="text-center lp:text-left w-full lp:absolute lp:top-[-35px] pc:top-[-50px] left-30 font-extrabold text-5xl tb:text-6xl lp:text-7xl pc:text-8xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
                :class="isViewed ? setSlideAnimationClasses('main_title', 300) : ''">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#09203F] to-[#537895]">
                    <slot name="title"></slot>
                </span>
            </h1>
            <!-- Divider -->
            <!-- <Divider :refId="dividerRefId" :is-viewed="isViewed" :is-with-animation="isWithAnimation"
                :delay="dividerAnimationDelay" /> -->
            <!-- content slot -->
            <slot name="content"></slot>
        </div><!-- title slot -->
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
  
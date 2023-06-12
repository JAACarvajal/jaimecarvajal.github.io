<template>
    <div :ref="projectData.ref"
        class="flex flex-col justify-center w-full lp:w-1/2 gap-4 translate-x-20 opacity-0 duration-700"
        :class="isViewed ? setSlideAnimationClasses(projectData.ref, projectData.animation_delay) : ''">

        <!-- Project name -->
        <h3 class="relative inline-block text-center lp:text-left font-bold text-xl tb:text-2xl lp:text-3xl tracking-tight">
            {{ projectData.name }}
        </h3>

        <!-- Project description -->
        <p class="text-base text-center tb:text-left lp:text-lg">{{ projectData.description }}</p>

        <!-- See project button -->
        <a :href="projectData.url" target="_blank" class="hidden lp:block w-max text-center lp:text-left mt-3">
            <button type="button"
                class="group bg-gradient-to-r from-[#09203F] to-[#537895] dark:from-[#4568dc] dark:to-[#b06ab3] rounded-2xl w-28 h-[48px] tb:w-40 tb:h-[56px] lp:w-56 lp:h-[70px] bg-white text-xs tb:text-sm lp:text-lg text-white font-medium uppercase leading-normal tracking-wider duration-1000 translate-y-0 hover:-translate-y-1 hover:duration-200">
                See website 🚀
            </button>
        </a>
    </div>
</template>
<script>
export default {
    props: {
        projectData: Object,
        isViewed: Boolean
    }
};
</script>
  
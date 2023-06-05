<template>
    <div :ref="projectData.ref"
        class="flex flex-col justify-center w-full lp:w-1/2 gap-4 translate-x-20 opacity-0 duration-700"
        :class="isViewed ? setSlideAnimationClasses(projectData.ref, projectData.animation_delay) : ''">
        <h3 ref="get_to_know_title"
            class="text-center lp:text-left font-bold text-xl lp:text-2xl leading-snug tracking-wide translate-x-20 opacity-0 duration-700"
            :class="isViewed ? setSlideAnimationClasses('get_to_know_title', 400) : ''">
            {{ projectData.name }}
        </h3>
        <p class="text-base text-center tb:text-left lp:text-lg">{{ projectData.description }}</p>
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
  
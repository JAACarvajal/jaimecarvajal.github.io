<template>
    <div :ref="projectData.ref"
        class="flex flex-col justify-center w-full lp:w-1/2 gap-4 translate-x-20 opacity-0 duration-700"
        :class="isViewed ? setSlideAnimationClasses(projectData.ref, projectData.animation_delay) : ''">
        <h1 class="text-center lp:text-left font-bold text-2xl lp:text-3xl leading-snug tracking-wide">
            <span class="mobile-custom-sub-underline lp:custom-sub-underline">{{ projectData.name }}</span>
        </h1>
        <p class="text-base tb:text-xl">{{ projectData.description }}</p>
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
  
<template>
    <div :ref="projectData.ref"
        class="flex flex-col justify-center w-full lp:w-1/2 gap-4 translate-x-20 opacity-0 duration-700"
        :class="isViewed ? setSlideAnimationClasses(projectData.ref, projectData.animation_delay) : ''">
        <a :href="projectData.url" target="_blank"
            class="relative inline-block text-center lp:text-left font-bold text-xl lp:text-2xl tracking-tight duration-700">
            {{ projectData.name }}
        </a>

        <p class="text-base text-center tb:text-left lp:text-lg">{{ projectData.description }}</p>

        <a v-if="this.device !== 'mobile'" :href="projectData.url" target="_blank" class="text-center lp:text-left">
            <button type="button"
                class="bg-gradient-to-r from-[#09203F] to-[#537895] border rounded-lg w-28 h-[48px] tb:w-40 tb:h-[56px] lp:w-60 lp:h-[76px] bg-white text-xs tb:text-sm lp:text-lg text-white font-medium uppercase leading-normal tracking-wider duration-1000 translate-y-0 hover:-translate-y-1 hover:duration-200">
                See project
            </button>
        </a>
    </div>
</template>
<script>
export default {
    props: {
        projectData: Object,
        isViewed: Boolean
    },
    data() {
        return {
            device: this.$getDevice()
        }
    }
};
</script>
  
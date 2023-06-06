<template>
    <div :ref="projectData.ref + '_desc'" class="w-full mt-6 lp:w-1/2 translate-x-20 opacity-0 duration-700"
        :class="isViewed ? setSlideAnimationClasses(projectData.ref + '_desc', projectData.animation_delay + 150) : ''">
        <img :src="'/images/projects/' + projectData.image_file_name" alt="project image">
    </div>
    <a v-if="this.device === 'mobile'" :href="projectData.url" target="_blank" class="text-center lp:text-left mt-5">
        <button type="button"
            class="bg-gradient-to-r from-[#09203F] to-[#537895] border rounded-lg w-full h-[48px] bg-white text-xs text-white font-medium uppercase leading-normal tracking-wider duration-1000 translate-y-0 hover:-translate-y-1 hover:duration-200">
            See project
        </button>
    </a>
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
  
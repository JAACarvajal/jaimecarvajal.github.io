<template>
    <div :ref="projectData.ref + '_desc'" class="w-full mt-6 lp:w-1/2 translate-x-20 opacity-0 duration-700"
        :class="isViewed ? setSlideAnimationClasses(projectData.ref + '_desc', projectData.animation_delay + 150) : ''">
        <img :src="'/images/projects/' + projectData.image_file_name" alt="project image">
    </div>

    <a :href="projectData.url" target="_blank" class="block lp:hidden text-center lp:text-left mt-10 w-full">
        <button type="button"
            class="group bg-gradient-to-r from-[#09203F] to-[#537895] dark:from-[#4568dc] dark:to-[#b06ab3] rounded-2xl w-full h-[48px]  tb:h-[56px] lp:w-56 lp:h-[70px] bg-white text-xs tb:text-sm lp:text-lg text-white font-medium uppercase leading-normal tracking-wider duration-1000 translate-y-0 hover:-translate-y-1 hover:duration-200">
            See website 🚀
        </button>
    </a>
</template>
<script>
export default {
    props: {
        projectData: Object,
        isViewed: Boolean
    }
};
</script>
  
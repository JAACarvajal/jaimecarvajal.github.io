<template>
    <div :ref="projectData.ref + '_desc'" class="w-full mt-6 lp:w-1/2 translate-x-20 opacity-0 duration-700"
        :class="isViewed ? setSlideAnimationClasses(projectData.ref + '_desc', projectData.animation_delay + 150) : ''">
        <img :src="'/images/projects/' + projectData.image_file_name" alt="project image">
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
  
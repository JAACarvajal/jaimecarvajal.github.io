<template>
    <ProjectInfo v-if="index % 2 === 0" :projectData="projectData" :isViewed="isViewed" />
    <ProjectImage v-else :projectData="projectData" :isViewed="isViewed" />
    <ProjectImage v-if="index % 2 === 0" :projectData="projectData" :isViewed="isViewed" />
    <ProjectInfo v-else :projectData="projectData" :isViewed="isViewed" />
</template>
<script>
import ProjectImage from "./ProjectImage.vue";
import ProjectInfo from "./ProjectInfo.vue";
export default {
    components: {
        ProjectImage,
        ProjectInfo
    },
    props: {
        projectData: Object,
        isViewed: Boolean,
        index: Number
    }
};
</script>
  
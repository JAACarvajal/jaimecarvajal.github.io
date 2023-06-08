<template>
    <template v-if="this.device === 'mobile' || this.device === 'tablet'">
        <ProjectInfo :projectData="projectData" :isViewed="isViewed" />
        <ProjectImage :projectData="projectData" :isViewed="isViewed" />
    </template>
    <template v-else-if="index % 2 === 0 && (this.device !== 'mobile' && this.device !== 'tablet')">
        <ProjectInfo :projectData="projectData" :isViewed="isViewed" />
        <ProjectImage :projectData="projectData" :isViewed="isViewed" />

    </template>
    <template v-else>
        <ProjectImage :projectData="projectData" :isViewed="isViewed" />
        <ProjectInfo :projectData="projectData" :isViewed="isViewed" />
    </template>
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
    },
    data() {
        return { device: this.$getDevice() }
    }
};
</script>
  
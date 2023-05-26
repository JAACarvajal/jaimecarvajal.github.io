<template>
    <a href="#" class="text-center" @click="[scrollToSection($event, section)]">
        <font-awesome-icon v-if="isSelected" icon='fa-solid fa-circle' style="font-size: 13px; color: #323232;" />
        <font-awesome-icon v-else icon='fa-regular fa-circle' style="font-size: 10px; color: #323232;" />
    </a>
</template>
<script>
export default {
    props: {
        section: String,
        currentSelected: String
    },
    data() {
        return {
            isSelected: false,
        }
    },
    watch: {
        currentSelected(newValue, oldValue) {
            this.isSelected = this.section !== newValue ? false : true;
        },
        currentViewedSection(newValue, oldValue) {
            this.isSelected = this.section !== newValue ? false : true;
        }
    },
    mounted() {
        this.isSelected = this.section === 'introduction_section' ? true : false;
    }
};
</script>
  
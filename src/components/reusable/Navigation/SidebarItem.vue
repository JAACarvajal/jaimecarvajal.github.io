<template>
    <a v-if="type === 'navigation'" href="#" class="text-center text-sm duration-400" :class="isSelected ? 'font-bold' : ''"
        @click="[scrollToSection($event, item.id)]">
        {{ item.title }}
    </a>

    <a v-if="type === 'socials'" :href="item.url" class="text-center text-sm duration-400" target="_blank">
        <font-awesome-icon :icon="item.icon_class" size="lg" />
    </a>
</template>
<script>
export default {
    props: {
        type: String,
        item: String,
        currentSelected: String,
    },
    data() {
        return { isSelected: false }
    },
    watch: {
        /**
         * Watch for changes in currentSelected
         * @param {*} newValue 
         * @param {*} oldValue 
         */
        currentSelected(newValue, oldValue) {
            this.isSelected = this.item.id !== newValue ? false : true;
        },
        /**
         * Watch for changes in currentViewedSection
         * @param {*} newValue 
         * @param {*} oldValue 
         */
        currentViewedSection(newValue, oldValue) {
            this.isSelected = this.item.id !== newValue ? false : true;
        }
    },
    mounted() {
        this.isSelected = this.item.id === 'introduction_section' ? true : false;
    }
};
</script>
  
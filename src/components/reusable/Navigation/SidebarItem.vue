<template>
    <a href="#" @click="[scrollToSection($event, section)]">
        <font-awesome-icon :icon="isSelected ? 'fa-solid fa-circle' : 'fa-regular fa-circle'"
            style="font-size: 12px; color: #323232;" />
    </a>
</template>
<script>
import { scrollMixin } from '../../../mixins/scroll-mixin';
export default {
    props: ['section', 'currentSelected'],
    mixins: [scrollMixin],
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
  
<template>
    <a v-if="type === 'navigation'" href="#" class="text-center text-sm duration-400" :class="isSelected ? 'font-bold' : ''"
        @click="[scrollToSection($event, item.id)]">
        <!-- <font-awesome-icon v-if="isSelected" icon='fa-solid fa-circle' style="font-size: 13px; color: #323232;" />
        <font-awesome-icon v-else icon='fa-regular fa-circle' style="font-size: 10px; color: #323232;" /> -->
        {{ item.title }}
    </a>

    <a v-if="type === 'socials'" href="#" class="text-center text-sm duration-400">
        <font-awesome-icon :icon="item.icon_class" size="xl" />
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
        return {
            isSelected: false,
        }
    },
    watch: {
        currentSelected(newValue, oldValue) {
            this.isSelected = this.item.id !== newValue ? false : true;
        },
        currentViewedSection(newValue, oldValue) {
            this.isSelected = this.item.id !== newValue ? false : true;
        }
    },
    mounted() {
        this.isSelected = this.item.id === 'introduction_section' ? true : false;
    }
};
</script>
  
<template>
    <nav ref="nav_side_bar" id="nav_side_bar"
        class="fixed justify-center w-full top-[42%] left-[94%] tb:left-[96%] lp:left-[98%] translate-x-20 opacity-0 duration-200">
        <ul class="absolute flex flex-col gap-8">
            <SidebarItem @update-selected="(section) => updateSelected(section)" section="introduction_section"
                :currentSelected="currentSelected" />
            <SidebarItem @update-selected="(section) => updateSelected(section)" section="about_section"
                :currentSelected="currentSelected" />
            <SidebarItem @update-selected="(section) => updateSelected(section)" section="project_section"
                :currentSelected="currentSelected" />
        </ul>
    </nav>
</template>
<script>
import SidebarItem from './reusable/Navigation/SidebarItem.vue';
export default {
    components: {
        SidebarItem
    },
    data() {
        return {
            currentSelected: 'introduction_section'
        }
    },
    methods: {
        updateSelected(currentSelected) {
            this.currentSelected = currentSelected;
        }
    },
};
</script>
  
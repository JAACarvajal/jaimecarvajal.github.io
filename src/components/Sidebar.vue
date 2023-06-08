<template>
    <!-- Main nav container -->
    <nav :ref="'nav_side_bar_' + sidebarPosition" :id="'nav_side_bar_' + sidebarPosition"
        class="fixed z-50 justify-center duration-300 " :class="[position[sidebarPosition]]">

        <!-- Main sidebar list -->
        <ul class="absolute flex flex-row items-center gap-5 dark:text-white">
            <!-- Navigation list -->
            <SidebarItem v-if="list === 'navigation'" v-for="(section, index) in sectionIds"
                @update-selected="(section) => updateSelected(section)" :item="section" :currentSelected="currentSelected"
                :id="index" :type="list" />

            <!-- Socials list -->
            <SidebarItem v-if="list === 'socials'" v-for="(social, index) in socialsList" :item="social" :id="index"
                :type="list" />

            <!-- Vertical line -->
            <div class="w-[1000px] border-[1px] border-dark-gray dark:border-white"></div>
        </ul>

    </nav>
</template>
<script>
import SidebarItem from './reusable/Navigation/SidebarItem.vue';
import { sections, socials } from '../constants';

export default {
    props: {
        sidebarPosition: String,
        list: String,
    },
    components: { SidebarItem },
    data() {
        return {
            sectionIds: sections,
            socialsList: socials,
            currentSelected: 'introduction_section',
            position: {
                left: 'hidden lp:block top-[55%] lp:left-3 pc:left-9 -translate-y-20 opacity-0 -rotate-90',
                right: 'hidden lp:block bottom-[55%] lp:right-3 pc:right-9 translate-y-20 opacity-0 rotate-90',
            },
        }
    },
    methods: {
        /**
         * Updated selected navigation
         * @param {} currentSelected 
         */
        updateSelected(currentSelected) {
            this.currentSelected = currentSelected.id;
        }
    },
};
</script>
  
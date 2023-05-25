<template>
    <nav id="nav_side_bar" class="hidden fixed w-full top-[42%] left-[97%]">
        <!-- Dropdown for hamburger list when in mobile view -->
        <ul class="absolute flex flex-col gap-8">
            <a href="#" @click="scrollToSection($event, 'introduction_section')">
                <font-awesome-icon icon="fa-regular fa-circle" style="font-size: 1em; color: #323232;" />
            </a>
            <a href="#" @click="scrollToSection($event, 'about_section')">
                <font-awesome-icon icon="fa-regular fa-circle" style="font-size: 1em; color: #323232;" />
            </a>
            <a href="#" @click="scrollToSection($event, 'project_section')">
                <font-awesome-icon icon="fa-regular fa-circle" style="font-size: 1em; color: #323232;" />
            </a>
        </ul>
    </nav>
</template>
<script>
import { scrollMixin } from '../mixins/scroll-mixin';
export default {
    mixins: [scrollMixin]
};
</script>
  
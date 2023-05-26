<template>
    <a v-if="!isMobile" class="text-base hover:lp:custom-extra-sm-sub-underline hover:duration-200" href="#"
        @click="scrollToSection($event, section)">
        {{ text }}
    </a>
    <a v-else class="text-right px-4 border-b-[1px] w-full py-4 hover:bg-violet-500 hover:text-whitel duration-200" href="#"
        @click="scrollToSection($event, section)">
        {{ text }}
    </a>
</template>
<script>
export default {
    props: {
        section: String,
        text: String,
        isMobile: Boolean
    }
};
</script>
  
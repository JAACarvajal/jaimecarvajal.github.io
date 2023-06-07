<template>
    <a v-if="!isMobile" class="text-base duration-700 translate-y-0 hover:-translate-y-1 hover:duration-300" href="#"
        @click="scrollToSection($event, section)">
        {{ text }}
    </a>
    <a v-else class="text-center px-4 w-full py-4 duration-200" :class="[
        isFirst ? 'border-0' : 'border-l'
    ]" href="#" @click="[scrollToSection($event, section), $emit('close-mobile-nav')]">
        {{ text }}
    </a>
</template>
<script>
export default {
    props: {
        section: String,
        text: String,
        isMobile: Boolean,
        isFirst: Boolean
    }
};
</script>
  
<template>
    <a v-if="!isMobile" class="text-base duration-700 translate-y-0 hover:-translate-y-1 hover:duration-300" href="#"
        @click="scrollToSection($event, section)">
        {{ text }}
    </a>

    <a v-else class="flex justify-between w-full px-5 py-5 duration-200 dark:border-dark-mode-border" :class="[
        isFirst ? 'border-0' : 'border-t'
    ]" href="#" @click="[scrollToSection($event, section), $emit('close-mobile-nav')]">
        {{ text }}
        <span>{{ icon }}</span>
    </a>
</template>
<script>
export default {
    props: {
        section: String,
        text: String,
        isMobile: Boolean,
        isFirst: Boolean,
        icon: String,
    }
};
</script>
  
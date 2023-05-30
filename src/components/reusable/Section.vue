<template>
    <div :ref="sectionRefId" :id="sectionRefId"
        class="flex flex-col place-content-center gap-1 text-3xl mx-auto w-full h-auto lp:h-screen py-10 px-10 tb:px-48 lp:px-36 pc:px-60 text-dark-gray"
        :class="bgColorList[bgColor]">
        <div :ref="containerId"
            class="relative bg-gradient-to-l from-light-gray p-20 rounded-3xl shadow-md -translate-y-40 opacity-0 duration-700"
            :class="isViewed ? setSlideAnimationClasses(containerId, containerAnimationDelay, true) : ''">
            <slot name="title"></slot>
            <!-- Divider -->
            <!-- <Divider :refId="dividerRefId" :is-viewed="isViewed" :is-with-animation="isWithAnimation"
                :delay="dividerAnimationDelay" /> -->
            <!-- content slot -->
            <slot name="content"></slot>
        </div><!-- title slot -->
    </div>
</template>
<script>
import Divider from "../reusable/Divider.vue";
export default {
    components: {
        Divider
    },
    props: {
        sectionRefId: String,
        dividerRefId: String,
        isViewed: Boolean,
        isWithAnimation: Boolean,
        dividerAnimationDelay: Number,
        containerId: String,
        containerAnimationDelay: Number,
        bgColor: String
    },
    data() {
        return {
            bgColorList: {
                black: 'bg-black'
            }
        }
    }
};
</script>
  
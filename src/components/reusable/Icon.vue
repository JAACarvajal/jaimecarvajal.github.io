<template>
    <font-awesome-icon :icon="iconName" />
    <!-- <h3 class="hidden lp:block font-semibold">HTML</h3>
            <div id="html_text" role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              HTML
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div> -->
</template>
<script>
export default {
    /**
     * Props
     */
    props: {
        iconName: String,
    }
};
</script>
  
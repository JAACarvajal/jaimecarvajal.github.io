<template>
  <div class="w-full">
    <hr class="mx-auto my-4 bg-theme-color border-0 rounded lp:my-10" :class="customClass" />
  </div>
</template>
<script>
export default {
  /**
   * Props
   */
  props: ["data"],
  /**
   * Component variables
   */
  data() {
    return {
      customClass: "w-12 h-2",
    };
  },
  /**
   * Mounted hook
   */
  mounted() {
    this.customClass = this.$props.data?.customClass ?? this.customClass;
  },
};
</script>

<template>
    <div class="flex items-center">
        <label class="relative inline-flex items-center cursor-pointer">
            <input ref="dark_mode_button" type="checkbox" class="sr-only peer" @click="setDarkMode"
                :checked="globalStore.isDarkModeEnabled">
            <div
                class="w-11 h-6 bg-gray-200 duration-700 rounded-full peer dark:bg-gradient-to-r dark:from-[#4568dc] dark:to-[#b06ab3] dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600">
            </div>
        </label>
        <span class="ml-1 text-[25px] font-medium text-gray-900 dark:text-white">
            <!-- <font-awesome-icon :icon="globalStore.isDarkModeEnabled ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" /> -->
            {{ globalStore.isDarkModeEnabled ? '🌑' : '🌕' }}
        </span>
    </div>
</template>
<script>
import { useGlobalStore } from '../../../stores/global';
export default {
    data() {
        return {
            globalStore: useGlobalStore(),
        }
    },
    methods: {
        setDarkMode() {
            this.globalStore.toggleDarkMode();
            this.$toggleDarkMode();
        }
    }
}
</script>
  
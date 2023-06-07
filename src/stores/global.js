import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return { 
      isPageLoaded: false,
      isDarkMode: false
    }
  },
  getters: {
    isDarkModeEnabled(state) {
      return state.isDarkMode;
    }
  },
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
    },
  },
})
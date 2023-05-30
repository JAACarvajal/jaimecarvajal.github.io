import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return { isPageLoaded: false }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    setPageLoaded() {
      this.isPageLoaded = true
    },
  },
})
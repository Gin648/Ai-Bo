import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
  state: () => ({
    theme: 'light',
    isShowMainLoader: true,
    direction: 'ltr'
  }),

  actions: {
    toggleTheme(payload: any = null) {
      payload = payload || this.theme // light|dark
      localStorage.setItem('theme', payload)
      this.theme = payload
      const colorMode = useColorMode()
      if (this.theme === 'dark') {
        colorMode.preference = payload
        document.querySelector('body')?.classList.add('dark')
      } else {
        colorMode.preference = payload
        document.querySelector('body')?.classList.remove('dark')
      }
    },

    toggleDirection(payload: any = null) {
      payload = payload || this.direction // rtl, ltr
      localStorage.setItem('direction', payload)
      this.direction = payload
      document.querySelector('html')?.setAttribute('dir', this.direction || 'ltr')
    },

    toggleMainLoader(payload: boolean = false) {
      this.isShowMainLoader = payload || false
    }
  },
  getters: {}
})

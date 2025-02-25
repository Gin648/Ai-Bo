import { defineStore } from 'pinia'
import { toLowerCase } from '@/utils/utils'

export const useAppStore = defineStore('app', {
  state: () => ({
    theme: 'light',
    isShowMainLoader: true,
    direction: 'ltr',
    account: '',
    // token: '',
    sign: {
      address: '',
      message: '',
      signature: ''
    },
    users: {} as any
  }),

  getters: {
    isSign: state => {
      const { address, message, signature } = state.sign
      if (address && message && signature && toLowerCase(state.account) === toLowerCase(address)) return true
      else return false
    },
    isLogin: state => {
      const { address, signature, message } = state.sign
      if (address && message && signature && toLowerCase(state.account) === toLowerCase(address)) return true
      else return false
    }
  },
  actions: {
    changeAccount(account: string) {
      this.account = account
    },
    changeSign(sign: any) {
      this.sign = sign
    },
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
    changeUsers(sign: any) {
      this.users[sign.address || this.account] = sign
    },
    resetUsers() {
      this.users = {}
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

  //persist定义要做判断，因为localStorage是客户端参数，所以需要加process.client
  persist: process.client && {
    storage: localStorage,
    paths: ['account', 'users', 'store', 'sign']
  }
})

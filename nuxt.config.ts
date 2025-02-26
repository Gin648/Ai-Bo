// https://nuxt.com/docs/api/configuration/nuxt-config
import languages from './i18n/languages'

export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-monaco-editor',
    'nuxt-aos',
    'nuxt-headlessui',
	'@vant/nuxt'
  ],
  colorMode: {
    preference: 'dark'
  },
  i18n: {
    locales: languages,
    lazy: true,
    defaultLocale: 'en',
    strategy: 'prefix',
    vueI18n: './config/i18n.js'
  },
  css: ['~/assets/css/tailwind.css'],
  fonts: {
    priority: ['bunny', 'google'],
    provider: 'bunny',
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    families: [{ name: 'Inter', provider: 'local' }]
  },
  icon: {
    serverBundle: {
      collections: ['ri']
    },
    customCollections: [
      {
        prefix: 'common-icon',
        dir: './assets/icons'
      }
    ]
  },
  monacoEditor: {
    locale: 'en',
    componentName: {
      codeEditor: 'MonacoEditor'
    }
  },
  headlessui: {
    prefix: 'Headless'
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vue-countup-v3', '@vue-flow/core', 'pinia-plugin-persistedstate/nuxt']
  },
  devServer: {
    port: 8088
  },
  compatibilityDate: '2025-02-23'
})

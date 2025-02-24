<template>
  <div
    class="flex min-h-screen flex-col bg-white bg-gradient-to-r from-[#e4e4e4] via-white to-[#e4e4e4] text-base font-normal text-gray antialiased dark:bg-[#04081d] dark:from-transparent dark:to-transparent"
  >
    <!-- screen loader -->
    <div
      v-show="store.isShowMainLoader"
      class="screen_loader fixed inset-0 z-[60] grid place-content-center bg-[#fafafa] dark:bg-[#060818]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="50" cy="50" r="0" fill="none" stroke="#47bdff" stroke-width="4">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;16"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="0s"
          ></animate>
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="50" cy="50" r="0" fill="none" stroke="#b476e5" stroke-width="4">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;16"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="-0.5s"
          ></animate>
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="-0.5s"
          ></animate>
        </circle>
      </svg>
    </div>

    <layout-header :class="{ 'sticky-header': showTopButton }" />

    <div class="flex-grow overflow-x-hidden -mt-[82px] lg:-mt-[136px]">
      <slot />
    </div>

    <layout-footer />

    <!-- Return to Top -->
    <button
      v-if="showTopButton"
      type="button"
      class="fixed z-10 bottom-60 md:bottom-5 animate-bounce ltr:right-5 rtl:left-5"
      @click="scrollToTop()"
    >
      <div
        class="flex items-center justify-center text-black transition duration-500 bg-white border border-black rounded-full group h-14 w-14 dark:bg-secondary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 transition group-hover:text-black"
        >
          <path d="M12 3V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M6 9L12 3L18 9"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </button>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
// @ts-ignore
import appSetting from '@/app-settings'
// @ts-ignore
import { useAppStore } from '@/stores/index'
const store = useAppStore()

const showTopButton = ref(false)
onMounted(() => {
  // set default settings and animation initialization
  AOS.init({
    once: false
  })
  appSetting.init()

  window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      showTopButton.value = true
    } else {
      showTopButton.value = false
    }
  }

  store.toggleMainLoader(false)
})

const scrollToTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
</script>

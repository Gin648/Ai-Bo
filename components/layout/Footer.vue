<template>
  <footer
    class="mt-auto bg-[#d9d9d9] dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent"
  >
    <div class="container text-black dark:text-slate-500">
      <div class="flex flex-col justify-between py-20 lg:pb-48 md:flex-row gap-y-10 gap-x-4">
        <div class="relative mx-auto md:ml-0">
          <img src="/assets/images/logo-2.png" alt="" class="w-[56px]" />
        </div>
        <div class="flex flex-col gap-8 md:gap-20 md:flex-row">
          <div class="flex flex-row gap-8 md:gap-20">
            <!-- products -->
            <ul class="order-2 lg:order-1 flex flex-col gap-3 font-normal [&>li]:pl-2">
              <li class="pl-2 mb-3 text-lg font-semibold text-black dark:text-white border-l-2 border-[#2a2c2d]">
                {{ $t('common.products') }}
              </li>
              <li>
                <NuxtLink
                  :to="localePath('courses')"
                  class="inline-block transition hover:scale-110 hover:text-primary"
                >
                  {{ $t('nav.courses') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="localePath('tutorials')"
                  class="inline-block transition hover:scale-110 hover:text-primary"
                >
                  {{ $t('nav.tutorials') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="localePath('pricing')"
                  class="inline-block transition hover:scale-110 hover:text-primary"
                >
                  {{ $t('nav.pricing') }}
                </NuxtLink>
              </li>
            </ul>
            <!-- company -->
            <ul class="order-1 lg:order-2 flex flex-col gap-3 font-normal [&>li]:pl-2">
              <li class="pl-2 mb-3 text-lg font-semibold text-black dark:text-white border-l-2 border-[#2a2c2d]">
                {{ $t('common.company') }}
              </li>
              <li>
                <NuxtLink :to="localePath('about')" class="inline-block transition hover:scale-110 hover:text-primary">
                  {{ $t('nav.about_us') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="localePath('contact')"
                  class="inline-block transition hover:scale-110 hover:text-primary"
                >
                  {{ $t('nav.contact') }}
                </NuxtLink>
              </li>
            </ul>
            <!-- resources -->
            <ul class="order-3 flex flex-col gap-3 font-normal [&>li]:pl-2">
              <li class="pl-2 mb-3 text-lg font-semibold text-black dark:text-white border-l-2 border-[#2a2c2d]">
                {{ $t('common.resources') }}
              </li>
              <li>
                <NuxtLink
                  :to="localePath('downloads')"
                  class="inline-block transition cursor-pointer hover:scale-110 hover:text-primary"
                >
                  {{ $t('nav.downloads') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="localePath('community')"
                  class="inline-block transition cursor-pointer hover:scale-110 hover:text-primary"
                >
                  {{ $t('nav.community') }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <!-- social icons -->
          <ul class="flex flex-col gap-3 font-normal [&>li]:pl-2">
            <li class="pl-2 mb-3 text-lg font-semibold text-black dark:text-white border-l-2 border-[#2a2c2d]">
              {{ $t('common.follow_us') }}
            </li>
            <li>
              <ul class="flex items-center gap-8 mt-2">
                <li>
                  <a
                    href="javascript:"
                    class="inline-flex justify-center items-center rounded-full w-[36px] h-[36px] bg-white dark:bg-[#0e0e0e] border border-[#575b72] dark:border-[#3d3d3d] transition hover:scale-110"
                  >
                    <UIcon name="ri:facebook-box-line" size="20px" class="text-[#575b72] dark:text-white" />
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    class="inline-flex justify-center items-center rounded-full w-[36px] h-[36px] bg-white dark:bg-[#0e0e0e] border border-[#575b72] dark:border-[#3d3d3d] transition hover:scale-110"
                  >
                    <UIcon name="ri:twitter-x-line" size="20px" class="text-[#575b72] dark:text-white" />
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    class="inline-flex justify-center items-center rounded-full w-[36px] h-[36px] bg-white dark:bg-[#0e0e0e] border border-[#575b72] dark:border-[#3d3d3d] transition hover:scale-110"
                  >
                    <UIcon name="ri:instagram-line" size="20px" class="text-[#575b72] dark:text-white" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- copyright -->
    <div class="bg-gradient-to-r from-[#d9d9d9] via-[#d9d9d9] to-[#d9d9d9] py-6 dark:bg-none">
      <div class="container">
        <div
          class="flex flex-col items-center justify-between text-xs text-center lg:text-base dark:text-slate-500 lg:flex-row"
        >
          <div class="order-last pt-20 lg:order-first lg:py-0">© {{ new Date().getFullYear() }} Company</div>
          <ul
            class="flex gap-6 [&>li+li]:border-black dark:[&>li+li]:border-[rgba(255,255,255,0.1)] [&>li+li]:border-l-2 [&>li+li]:pl-4"
          >
            <li>
              <NuxtLink :to="localePath('terms')" class="transition hover:text-primary">
                {{ $t('nav.terms') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('privacy')" class="transition cursor-pointer hover:text-primary">
                {{ $t('nav.privacy') }}
              </NuxtLink>
            </li>
            <li>
              <select class="bg-transparent" v-model="selectedLang">
                <template v-for="lang in langs" :key="lang.code">
                  <option :value="lang.code" class="bg-transparent">
                    {{ lang.name }}
                  </option>
                </template>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, watch } from 'vue'

import langs from '@/i18n/languages'

const localePath = useLocalePath()
const { setLocale } = useI18n()
const currentLocalePath = useLocalePath()
const currentLocale = currentLocalePath().split('/')[1]
const selectedLang = ref(currentLocale || 'en')

watch(
  () => selectedLang.value,
  newValue => {
    setLocale(newValue)
  },
  { deep: true }
)
</script>

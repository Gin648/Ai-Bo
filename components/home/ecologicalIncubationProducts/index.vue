<template>
  <div class="container">
    <div class="py-10 mt-20">
      <h4 class="title-text">{{ $t('home.ecological_incubation_products.title') }}</h4>
      <p class="mt-8 text-center text-black dark:text-white font-light text-xl w-full lg:w-[60%] mx-auto">
        {{ $t('home.ecological_incubation_products.desc') }}
      </p>
    </div>
  </div>
  <div class="relative">
    <div class="absolute z-10 justify-between hidden w-full h-full pointer-events-none lg:flex">
      <div
        class="w-1/3 bg-gradient-to-r from-[#e4e4e4] via-[#ededed] via-55% dark:from-0 dark:from-[#04081d] dark:from-55% to-transparent dark:to-[#00072d]/0"
      ></div>
      <div
        class="w-1/3 bg-gradient-to-l from-[#e4e4e4] via-[#ededed] via-55% dark:from-0 dark:from-[#04081d] dark:from-55% to-transparent dark:to-[#00072d]/0"
      ></div>
    </div>
    <ListSlider></ListSlider>
  </div>
</template>

<script setup>
import ListSlider from './ListSlider.vue'
</script>

<style></style>

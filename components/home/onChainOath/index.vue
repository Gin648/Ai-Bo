<template>
  <div class="container">
    <div class="py-10 mt-20">
      <h4 class="title-text">
        {{ $t('home.on_chain_oath.title') }}
      </h4>
      <p class="mt-8 text-center text-black dark:text-white font-light text-xl w-full lg:w-[60%] mx-auto">
        {{ $t('home.on_chain_oath.desc') }}
      </p>
    </div>
    <div
      class="lg:w-[960px] h-[680px] mx-auto border border-primary rounded-[20px] bg-[linear-gradient(to_top,#000,#c7c7c7)] dark:bg-[url(/assets/images/bg-ripple.png)] bg-no-repeat bg-cover bg-center"
    >
      <EditorDemo></EditorDemo>
    </div>
    <div class="pt-10 flex flex-col md:flex-row justify-between items-center gap-10 [&>div]:w-full text-white">
      <div class="jump-color-btn">
        <p class="flex-1 text-xl">{{ $t('home.on_chain_oath.buttons.product') }}</p>
        <img src="/assets/images/icons/jump-to-icon.svg" alt="" />
      </div>
      <div class="jump-color-btn">
        <p class="flex-1 text-xl">{{ $t('home.on_chain_oath.buttons.whitepaper') }}</p>
        <img src="/assets/images/icons/jump-to-icon.svg" alt="" />
      </div>
      <div class="jump-color-btn">
        <p class="flex-1 text-xl">{{ $t('home.on_chain_oath.buttons.plan') }}</p>
        <img src="/assets/images/icons/jump-to-icon.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import EditorDemo from './EditorDemo.vue'
</script>

<style></style>

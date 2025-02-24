<template>
  <div>
    <home-banner></home-banner>

    <!-- Line -->
    <div class="w-5/6 h-[8px] bg-white mx-auto bg-radial-light-divider dark:bg-radial-dark-divider"></div>

    <home-number-data></home-number-data>

    <!-- Demo 1 -->
    <div class="">
      <img src="/assets/images/demo-1.png" alt="" class="w-full" />
    </div>

    <home-incubation-advantage-support show-type="graph"></home-incubation-advantage-support>

    <home-incubation-advantage-support show-type="list"></home-incubation-advantage-support>

    <!-- Demo 2 -->
    <div class="">
      <img src="/assets/images/demo-2.png" alt="" class="w-full" />
    </div>

    <home-genesis-volunteer></home-genesis-volunteer>

    <home-agent-ambassador></home-agent-ambassador>

    <home-on-chain-oath></home-on-chain-oath>

    <home-ecological-incubation-products></home-ecological-incubation-products>

    <home-strategic-partner></home-strategic-partner>

    <home-contact-us></home-contact-us>
  </div>
</template>

<script setup>
const { t } = useI18n()
useHead({
  title: t('nav.home')
})
</script>

<style></style>

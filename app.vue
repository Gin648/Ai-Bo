<template>
  <div class="">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: chunk => (chunk ? `${chunk} • AIBO` : 'AIBO'),
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
    },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
})
provideHeadlessUseId(() => useId())
</script>

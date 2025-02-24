<template>
  {{ $t('nav.downloads') }}
</template>

<script setup>
const { t } = useI18n()
useHead({
  title: t('nav.downloads')
})
</script>

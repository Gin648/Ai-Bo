<template>
  {{ $t('nav.community') }}
</template>

<script setup>
const { t } = useI18n()
useHead({
  title: t('nav.community')
})
</script>

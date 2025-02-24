<template>
  {{ $t('nav.services') }}
</template>

<script setup>
const { t } = useI18n()
useHead({
  title: t('nav.services')
})
</script>

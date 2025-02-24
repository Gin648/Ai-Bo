<template>
  {{ $t('nav.pricing') }}
</template>

<script setup>
const { t } = useI18n()
useHead({
  title: t('nav.pricing')
})
</script>

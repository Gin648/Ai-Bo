<template>
  {{ $t('nav.terms') }}
</template>

<script setup>
const { t } = useI18n()
useHead({
  title: t('nav.terms')
})
</script>

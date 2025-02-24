<template>
  {{ $t('nav.tutorials') }}
</template>

<script setup>
const { t } = useI18n()
useHead({
  title: t('nav.tutorials')
})
</script>

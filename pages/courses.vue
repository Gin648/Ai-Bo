<template>
  {{ $t('nav.courses') }}
</template>

<script setup>
const { t } = useI18n()
useHead({
  title: t('nav.courses')
})
</script>

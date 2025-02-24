<template>
  {{ $t('nav.privacy') }}
</template>

<script setup>
const { t } = useI18n()
useHead({
  title: t('nav.privacy')
})
</script>

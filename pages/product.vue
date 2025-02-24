<template>
  {{ $t('nav.product') }}
</template>

<script setup>
const { t } = useI18n()
useHead({
  title: t('nav.product')
})
</script>

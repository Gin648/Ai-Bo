<template>
  {{ $t('nav.set_api') }}
</template>

<script setup>
const { t } = useI18n()
useHead({
  title: t('nav.set_api')
})
</script>

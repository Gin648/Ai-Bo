<template>
  {{ $t('nav.contact') }}
</template>

<script setup>
const { t } = useI18n()
useHead({
  title: t('nav.contact')
})
</script>

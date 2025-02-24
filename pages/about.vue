<template>
  <div class="pt-[106px]">
    {{ $t('nav.about') }}
    <InviteCodeModal />
  </div>
</template>

<script setup>
import { InviteCodeModal } from '#components'

const { t } = useI18n()
useHead({
  title: t('nav.about')
})
</script>

<template>
  <div class="">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAccount } from '@/hooks/useAccount'
const { listenWallet, connectWallet } = useAccount()
import { getProvider } from '@/utils/provider'

useHead({
  titleTemplate: chunk => (chunk ? `${chunk} • AIBO` : 'AIBO'),
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
    },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
})
provideHeadlessUseId(() => useId())

onMounted(async () => {
	 const queryParams = ref({});
	const urlParams = new URLSearchParams(window.location.search);
	  for (const param of urlParams.entries()) {
		queryParams.value[param[0]] = param[1];
	  }
	  if(queryParams.value.inviteCode && queryParams.value.inviteCode != 'undefined'){
		  localStorage.setItem('inviteCode',queryParams.value.inviteCode)
	  }
  const timer = setInterval(() => {
    if (getProvider()) {
      clearInterval(timer)
      connectWallet()
      listenWallet()
    }
  }, 500)

  // const { USDT } = medalContract()
  // console.log(await USDT(), 'usdt')
})
</script>

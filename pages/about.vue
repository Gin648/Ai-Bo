<template>
  <div class="pt-[106px]">
    
    <InviteCodeModal  @confirm="confirm" />
  </div>
</template>

<script setup>
import { InviteCodeModal } from '#components'
import {updateUserInfo} from '@/api/login'
const { t } = useI18n()
useHead({
  title: t('nav.about')
})
const confirm =async (e) =>{
	let res =await updateUserInfo({
		inviteCode:e
	})
	console.log(res)
	if(res.success){
		alert('邀请成功')
	}
}
</script>

<template>
  <UModal
    :ui="{
      rounded: 'rounded-[35px]'
    }"
    v-model="isOpen"
    prevent-close
  >
    <UCard
      :ui="{
        base: 'bg-gradient-to-b from-[#3EE4FF] to-[rgba(0,0,0,0.5)]',
        ring: '',
        divide: '',
        rounded: 'rounded-[35px]',
        header: {
          padding: ' p-4'
        },
        body: {
          padding: '!pt-0'
        }
      }"
    >
      <template #header>
        <div class="flex items-center justify-end">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            size="xl"
            @click="isOpen = false"
          />
        </div>
      </template>
      <div class="flex flex-col items-center justify-center gap-8 p-4 pt-0 font-bold text-center text-white">
        <h3 class="text-2xl">{{ $t('invite_code_modal.title') }}</h3>
        <UInput
          :ui="{
            base: 'h-[56px] !bg-white !text-slate-700 !ring-0'
          }"
          padded
          variant="outline"
          size="xl"
		  v-model="inviteCode"
          class="w-full"
        />
        <div class="w-full px-8 mt-10">
          <UButton
            block
            size="xl"
			@click="confrim"
            :ui="{ base: 'bg-gradient-to-b from-[#329FFF] to-[#30F8FF] !text-white transition hover:scale-105' }"
            >{{ $t('common.confirm') }}</UButton
          >
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(true)
const inviteCode =ref('')
const emit = defineEmits(['confirm'])
const confrim = ()=>{
	if(inviteCode.value){
		emit('confirm',inviteCode.value)
	}else{
		showToast('请输入邀请码')
	}
	
}
</script>

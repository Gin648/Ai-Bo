<template>
  <div class="me-page container pt-[82px] lg:pt-[106px]">
    <div class="flex flex-col gap-10 py-4 lg:py-20">
      <!-- DID -->
      <div class="flex flex-col gap-8 lg:flex-row">
        <div class="flex items-center justify-center w-full lg:w-2/5">
          <div class="card">
            <h2
              class="text-3xl font-bold text-white dark:text-primary dark:[text-shadow:_0_0px_12px_rgba(105_250_255_/_0.8)]"
            >
              {{ $t('me.did_level') }}
            </h2>
            <div class="flex flex-col items-center justify-center gap-8 pt-10">
              <img src="/assets/images/icons/did.svg" alt="" />
              <p class="text-white dark:text-primary">{{ $t('me.did_content') }}</p>
              <div
                class="w-full text-white cursor-pointer text-xl btn bg-gradient-to-b from-[#329FFF] to-[#30F8FF] py-2"
              >
                {{ $t('me.did_button') }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full gap-8 lg:w-3/5">
          <div class="flex flex-1 card !p-4 w-full gap-4 flex-col lg:flex-row">
            <img src="/assets/images/robot-2.jpg" alt="" class="object-cover w-full lg:w-2/5 rounded-2xl" />
            <div class="flex flex-col justify-between w-full">
              <div>
                <h3 class="py-2 text-xl font-bold text-white">{{ $t('me.genesis_volunteer.title') }}</h3>
                <p class="mt-2 text-white dark:text-primary">{{ $t('me.genesis_volunteer.text') }}</p>
              </div>
              <div
                class="w-full text-white cursor-pointer text-xl btn bg-gradient-to-b from-[#329FFF] to-[#30F8FF] mt-8 py-2 !rounded-xl"
              >
                {{ $t('common.get_it') }}
              </div>
            </div>
          </div>
          <div class="flex flex-1 card !p-4 w-full gap-4 flex-col lg:flex-row">
            <img src="/assets/images/robot-3-xs.jpg" alt="" class="object-cover w-full lg:w-2/5 rounded-2xl" />
            <div class="flex flex-col justify-between w-full">
              <div>
                <h3 class="py-2 text-xl font-bold text-white">{{ $t('me.agent_ambassador.title') }}</h3>
                <p class="mt-2 text-white dark:text-primary">{{ $t('me.agent_ambassador.text') }}</p>
              </div>
              <div
                class="w-full text-white cursor-pointer text-xl btn bg-gradient-to-b from-[#329FFF] to-[#30F8FF] mt-8 py-2 !rounded-xl"
              >
                {{ $t('common.get_it') }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- NFT -->
      <div class="flex flex-col gap-2 card">
        <div>
          <UTabs
            :items="tabs"
            :ui="{
              list: {
                width: 'w-auto',
                height: 'h-auto',
                background: '!bg-transparent',
                rounded: '!rounded-none',
                marker: {
                  base: 'border-b-2 border-primary [&::after]:!content-[xxx]',
                  background: '!bg-transparent',
                  rounded: '!rounded-none',
                  shadow: '!shadow-none'
                },
                tab: {
                  base: 'lg:w-[240px] !text-white',
                  size: 'lg:text-lg',
                  rounded: '!rounded-none',
                  height: 'h-12',
                  active: '[&>span]:text-primary'
                }
              }
            }"
          >
            <template #g_v="{ item }">
              <div class="grid grid-cols-3 gap-6 py-10 lg:grid-cols-6">
                <template v-for="medal in medalList" :key="medal.id">
                  <div class="flex flex-col items-center justify-center">
                    <img  :class="[medal.status==0?'gray': '']" :src="medal.image" alt="" />
                    <p class="pt-2 text-xs text-white lg:text-base">{{ medal.medalText }}</p>
                  </div>
                </template>
              </div>
            </template>
            <template #a_a="{ item }">
              <div></div>
            </template>
          </UTabs>
        </div>
      </div>
      <!-- My invitation -->
      <div class="card">
        <div class="flex flex-col justify-between gap-6 lg:flex-row">
          <h2
            class="text-3xl font-bold text-white dark:text-primary dark:[text-shadow:_0_0px_12px_rgba(105_250_255_/_0.8)]"
          >
            {{ $t('me.invite.title') }}
          </h2>
          <UInput
            size="xl"
            variant="outline"
            readonly
            v-model="inviteUrl"
            :ui="{
              base: 'focus:!ring-0 !bg-transparent !text-primary border-1 border-white !pl-[120px]',
              icon: {
                trailing: {
                  pointer: 'pointer-events-auto'
                }
              }
            }"
          >
            <template #leading>
              <span class="text-base text-white">INVITE LINK : </span>
            </template>
            <template #trailing>
              <UIcon @click="handleCopy(inviteUrl)" name="octicon:copy-16" class="text-white hover:cursor-pointer" />
            </template>
          </UInput>
        </div>
        <div class="pt-4">
          <UTable
			v-if="list.length>0"
            :rows="list"
            :ui="{
              divide: '!divide-white',
              th: {
                color: '!text-white'
              },
              tbody: 'divide-y-0',
              td: {
                color: '!text-white'
              }
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const { t } = useI18n()
import {userMedalPageList,userInvitePageList} from '@/api/medal'
useHead({
  title: t('nav.me')
})

const inviteUrl = ref('')
const medalList = ref([])
const tabs = [
  {
    slot: 'g_v',
    label: t('me.nft.medal')
  },
  {
    slot: 'a_a',
    label: t('me.nft.title')
  }
]
const handleCopy = (value) => {
  const text = document.createElement('textarea')
  text.value = value
  document.body.appendChild(text)
  text.select() // 选择对象
  if (document.execCommand('copy')) {
    document.execCommand('copy')
	showToast('复制成功')
  }
  // 执行浏览器复制命令
  document.body.removeChild(text)
}
const medals = [
  {
    id: 0,
    image: '/assets/images/medals/medal-1.png',
    text: 'Smart contracts'
  },
  {
    id: 1,
    image: '/assets/images/medals/medal-2.png',
    text: 'Smart contracts'
  },
  {
    id: 2,
    image: '/assets/images/medals/medal-3.png',
    text: 'Smart contracts'
  },
  {
    id: 3,
    image: '/assets/images/medals/medal-4.png',
    text: 'Smart contracts'
  },
  {
    id: 4,
    image: '/assets/images/medals/medal-5.png',
    text: 'Smart contracts'
  },
]
const list = ref([])
const pageLsit = async () =>{
	let res =await userMedalPageList()
	if(res.data.list.length>0){
		res.data.list.forEach(v=>{
			let index = medals.findIndex(item=>item.id == v.medalType)
			if(index != -1){
				v.image = medals[index].image
				v.medalText  =medals[index].text
			}
		})
		console.log(res.data.list)
		medalList.value = res.data.list
	}
}
const  invitePageList =async ()=>{
	let res =await userInvitePageList()
	if(res.data.list.length>0){
		list.value = res.data.list
	}else{
		list.value =[]
	}
}
onMounted( ()=>{
	//获取链接
	let inviteCode =JSON.parse(localStorage.getItem('userInfo')).inviteCode
	inviteUrl.value = window.location.origin+'/zh?inviteCode='+inviteCode; 
	pageLsit()
	invitePageList()
})
</script>

<style scoped lang="css">
.gray{
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}
</style>

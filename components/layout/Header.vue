<template>
  <header class="sticky top-0 z-50 transition duration-300 bg-header">
    <div class="container z-60 py-[1rem]">
      <div class="flex items-center lg:justify-between">
        <div class="flex items-center gap-4">
          <NuxtLink :to="localePath('index')"
            ><img src="/assets/images/logo-2.png" alt="logo" class="w-[40px] lg:w-[56px]"
          /></NuxtLink>
          <!-- theme switch pc -->
          <ul
            class="items-center hidden gap-5 lg:flex ltr:pr-5 rtl:pl-5 ltr:lg:pl-5 ltr:lg:pr-0 rtl:lg:pr-5 rtl:lg:pl-0"
          >
            <li class="ml-2 md:ml-auto">
              <ThemeSwitch></ThemeSwitch>
            </li>
          </ul>
        </div>

        <!-- menu -->
        <div class="flex items-center justify-between w-full lg:w-auto">
          <div
            @click="toggleMenu()"
            class="overlay fixed inset-0 z-[51] bg-black/60 lg:hidden"
            :class="{ hidden: !showMenu }"
          ></div>

          <div class="menus" :class="{ 'overflow-y-auto ltr:!right-0 rtl:!left-0': showMenu }">
            <div class="border-gray/10 ltr:text-right rtl:text-left lg:hidden">
              <button @click="toggleMenu()" type="button" class="p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-black dark:text-white"
                >
                  <path color="#fff" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul  class="pl-[74px] box-border">
				<li @click="showMenu = false" >
				  <NuxtLink  :to="localePath('index')">{{ $t('nav.home') }}</NuxtLink>
				</li>
				<li @click="showMenu = false">
				  <NuxtLink :to="localePath('set-api')">{{ $t('nav.set_api') }} </NuxtLink>
				</li>
				<li @click="showMenu = false">
				  <NuxtLink :to="localePath('product')">{{ $t('nav.product') }}</NuxtLink>
				</li>
				<li @click="showMenu = false">
				  <NuxtLink :to="localePath('services')">{{ $t('nav.services') }}</NuxtLink>
				</li>
				<li @click="showMenu = false">
				  <NuxtLink :to="localePath('about')">{{ $t('nav.about') }}</NuxtLink>
				</li>
				<li @click="showMenu = false">
				  <NuxtLink :to="localePath('me')">{{ $t('nav.me') }}</NuxtLink>
				</li>
				<NuxtLink v-if="showMenu && innerWidthValue<1024">
					<div
					  @click="onConnectWallet()"
					  class="btn w-20 p-2 rounded-lg cursor-pointer capitalize text-base font-normal text-white bg-black dark:bg-primary group-hover:bg-white group-hover:text-primary dark:text-black xl:w-[100px]  lg:block"
					>
					  {{ accountStore?.isSign ? formatAddress(accountStore.account) : $t('common.connect') }}
					</div>
					<div class="flex items-center text-[16px] mt-[46px]  ">
						<select class="bg-transparent text-[#fff]" v-model="selectedLang">
						  <template v-for="lang in langs" :key="lang.code">
						    <option :value="lang.code" class="bg-transparent text-[#000]">
						      {{ lang.name }}
						    </option>
						  </template>
						</select>
					</div>
				</NuxtLink>
              
            </ul>
          </div>

          <button type="button" class="flex items-center justify-center w-10 h-10 lg:hidden" @click="toggleMenu()">
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.2156 0.395996H1.81719C1.08359 0.395996 0.488281 0.995996 0.488281 1.73897V1.91943C0.488281 2.66006 1.08359 2.77256 1.81719 2.77256H20.2156C20.9492 2.77256 21.5445 2.6624 21.5445 1.91943V1.73897C21.5445 0.995996 20.9492 0.395996 20.2156 0.395996ZM17.7664 7.77647H1.81719C1.08359 7.77647 0.488281 8.37646 0.488281 9.11943V8.81006C0.488281 9.55068 1.08359 10.153 1.81719 10.153H17.7664C18.5 10.153 19.0953 9.55303 19.0953 8.81006V9.11943C19.0953 8.37881 18.5 7.77647 17.7664 7.77647ZM15.3195 15.1593H1.81953C1.08594 15.1593 0.490625 15.7593 0.490625 16.5022V16.6827C0.490625 17.4233 1.08594 17.5358 1.81953 17.5358H15.3195C16.0531 17.5358 16.6484 17.4257 16.6484 16.6827V16.4999C16.6484 15.7593 16.0531 15.1593 15.3195 15.1593Z"
                fill="white"
              />
            </svg>
          </button>

          <!-- theme switch mobile -->
          <ul
            class="flex items-center gap-5 lg:hidden ltr:pr-5 rtl:pl-5 ltr:lg:pl-5 ltr:lg:pr-0 rtl:lg:pr-5 rtl:lg:pl-0"
          >
            <li class="ml-2 md:ml-auto">
              <ThemeSwitch></ThemeSwitch>
            </li>
          </ul>
        </div>
		<div class=" items-center  hidden lg:flex">
			<div class="flex items-center text-[16px] mr-[29px]">
				<select class="bg-transparent" v-model="selectedLang">
				  <template v-for="lang in langs" :key="lang.code">
				    <option :value="lang.code" class="bg-transparent">
				      {{ lang.name }}
				    </option>
				  </template>
				</select>
			</div>
			  <div  @click="onConnectWallet()"
			    class="btn w-20 p-2 rounded-lg cursor-pointer capitalize text-base font-normal text-white bg-black dark:bg-primary group-hover:bg-white group-hover:text-primary dark:text-black xl:w-[100px] "
			  >
			    {{ accountStore?.isSign ? formatAddress(accountStore.account) : $t('common.connect') }}
			  </div>
			</div>
		</div>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted,watch } from 'vue'
import { useAccount } from '@/hooks/useAccount'
import { useAppStore } from '@/stores/index'
import { formatAddress } from '@/utils/utils'
import medalContract from '@/contract/MedalContract'
import langs from '@/i18n/languages'
const { setLocale } = useI18n()
const currentLocalePath = useLocalePath()
const currentLocale = currentLocalePath().split('/')[1]
const selectedLang = ref(currentLocale || 'en')
const { USDT } = medalContract()
const accountStore = useAppStore()
const innerWidthValue = ref(0)
const { login, disConnectWallet } = useAccount()
const localePath = useLocalePath()
const walletLoading = ref(false)
const showMenu = ref(false)
const themeState = ref('light')
// Mobile menu js
const toggleMenu = () => {
  if (window.innerWidth < 1024) {
    showMenu.value = !showMenu.value
  } else {
    showMenu.value = false
  }
}
watch(
  () => selectedLang.value,
  newValue => {
	  showMenu.value = false
    setLocale(newValue)
  },
  { deep: true }
)
watch(
  () => accountStore.theme,
  newValue => {
	themeState.value = newValue
  },
  { deep: true }
)
const onConnectWallet = async () => {
  if (accountStore?.isSign) {
    return disConnectWallet()
  }
  login()
  //
}

onMounted(async () => {
  const data = await USDT()
  console.log(data, 'data')
  if (process.client) {
    window.addEventListener('resize', () => {
	  innerWidthValue.value = window.innerWidth
	  if(window.innerWidth >1024){
		  showMenu.value =false
	  }
    })
  }
})
// onMounted(async () => {
//   console.log(await USDT(), 'usdt')
// })
</script>

<style scoped>
	header .menus{
		width: 100%;
		max-width: 100vw;
	}
header .menus > ul li > a {
  position: relative;
  display: inline-block;
  font-weight: normal;
  
}
header .menus > ul li > a.router-link-exact-active::after {
  content: '';
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 1px;
  bottom: 30px;
  left: 0;
  background-color: white;

  box-shadow: rgba(48, 248, 255, 1) 0px 0px 2px 1px;
}

@media (max-width: 768px) {
  header .menus > ul li > a.router-link-exact-active::after {
    display: none;
  }
  
}
@media (max-width: 1024px) {
  header .menus {
    background: transparent;
  }
  header .menus > ul li > a.router-link-exact-active {
    color: rgb(var(--color-primary-DEFAULT) / var(--tw-text-opacity, 1)) !important;
  }
  header .menus > ul li > a {
    color: #fff;
  }
}
</style>

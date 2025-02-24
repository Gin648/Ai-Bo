<template>
  <div>
    <h3
      v-if="title"
      class="mb-10 text-2xl font-bold text-center text-black dark:text-white lg:mb-14"
      v-html="title"
    ></h3>
    <swiper
      :loop="true"
      slidesPerView="auto"
      :spaceBetween="30"
      autoHeight
      :speed="2500"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      :breakpoints="{
        320: {
          slidesPerView: 1.7
        },
        600: {
          slidesPerView: 3
        },
        1000: {
          slidesPerView: 5
        },
        1600: {
          slidesPerView: 7
        }
      }"
      :modules="[Autoplay]"
      :dir="store.direction === 'rtl' ? 'rtl' : 'ltr'"
      :key="store.direction === 'rtl' ? 'true' : 'false'"
    >
      <template v-for="logoItem in logos" :key="logoItem.id">
        <swiper-slide>
          <div class="flex flex-col items-center justify-center">
            <div
              class="flex flex-col justify-center items-center w-[140px] h-[110px] rounded-[20px] border-0 dark:border dark:border-[#5a95a7] bg-black dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0),rgba(22,101,128,0.8)),url(/assets/images/dot.png)]"
            >
              <NuxtLink to="javascript:" class="block"
                ><img :src="logoItem.url" alt="" class="mx-auto transition hover:scale-110"
              /></NuxtLink>
            </div>
            <p class="mt-2 text-center">{{ logoItem.name }}</p>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { useAppStore } from '@/stores/index'
const store = useAppStore()
defineProps({
  title: {
    type: String,
    default: null
  },
  logos: {
    type: Array,
    default: () => {
      return [
        {
          id: 1,
          name: 'Bitcoin',
          url: '/assets/images/logos/bitcoin-logo.png'
        },
        {
          id: 2,
          name: 'Bitget',
          url: '/assets/images/logos/bitget-logo.svg'
        },
        {
          id: 3,
          name: 'BNB',
          url: '/assets/images/logos/bnb-logo.png'
        },
        {
          id: 4,
          name: 'coinmaketcap',
          url: '/assets/images/logos/coinmaketcap-logo.svg'
        },
        {
          id: 5,
          name: 'ethereum',
          url: '/assets/images/logos/eth-logo.svg'
        },
        {
          id: 6,
          name: 'gate',
          url: '/assets/images/logos/gate-io-logo.svg'
        },
        {
          id: 7,
          name: 'imToken',
          url: '/assets/images/logos/im-token-logo.svg'
        },
        {
          id: 8,
          name: 'Securely',
          url: '/assets/images/logos/securely-logo.svg'
        },
        {
          id: 9,
          name: 'METAMASK',
          url: '/assets/images/logos/metamask-logo.svg'
        }
      ]
    }
  }
})
</script>

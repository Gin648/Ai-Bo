<template>
  <div class="max-w-6xl mx-auto">
    <swiper
      :loop="true"
      slidesPerView="1.3"
      :centeredSlides="true"
      :spaceBetween="30"
      :speed="1000"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      :modules="[Navigation, Autoplay]"
      :breakpoints="{
        1000: {
          slidesPerView: 3
        }
      }"
    >
      <template v-for="(item, index) in $tm('home.ecological_incubation_products.list')" :key="index">
        <swiper-slide>
          <div
            class="rounded-[15px] lg:rounded-[35px] border-0 dark:border border-transparent p-5 duration-200 dark:border-[#30F8FF] bg-black dark:bg-[radial-gradient(circle_at_center,rgba(18,98,125,0.5),rgba(5,31,66,1))]"
          >
            <a href="javascript:" class="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#224b67]">
              <img class="w-8" :src="list[index].icon" alt="" />
            </a>
            <h5 class="mt-4 text-lg font-normal text-white lg:mt-2 lg:text-base dark:text-white">
              {{ $rt(item.title) }}
            </h5>
            <p class="pb-4 mt-2 lg:mt-1 text-md lg:text-xs font-light text-white dark:text-[#30F8FF]">
              {{ $rt(item.text) }}
            </p>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'

defineProps({
  list: {
    type: Array,
    default: () => {
      return [
        {
          id: 1,
          icon: '/assets/images/icons/custom1-icon.png'
        },
        {
          id: 2,
          icon: '/assets/images/icons/custom2-icon.png'
        },
        {
          id: 3,
          icon: '/assets/images/icons/custom3-icon.png'
        },
        {
          id: 4,
          icon: '/assets/images/icons/custom1-icon.png'
        },
        {
          id: 5,
          icon: '/assets/images/icons/custom2-icon.png'
        },
        {
          id: 6,
          icon: '/assets/images/icons/custom3-icon.png'
        }
      ]
    }
  }
})
</script>

<template>
  <div class="container py-20">
    <div class="grid grid-cols-3 gap-4 font-normal text-center lg:gap-10 md:grid-cols-6">
      <template v-for="item in numberData" :key="item.id">
        <div class="space-y-5 group" data-aos="fade-up" data-aos-duration="1000">
          <div class="relative top-0 transition-all duration-500 group-hover:-top-1">
            <svg
              width="62"
              height="66"
              viewBox="0 0 62 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mx-auto text-black dark:text-primary"
            >
              <path
                d="M23.75 2.76314C28.2363 0.172964 33.7637 0.172964 38.25 2.76314L53.5609 11.6029C58.0472 14.1931 60.8109 18.9799 60.8109 24.1603V41.8397C60.8109 47.0201 58.0472 51.8069 53.5609 54.3971L38.25 63.2369C33.7637 65.827 28.2363 65.827 23.75 63.2369L8.43911 54.3971C3.9528 51.8069 1.18911 47.0201 1.18911 41.8397V24.1603C1.18911 18.9799 3.9528 14.1931 8.43911 11.6029L23.75 2.76314Z"
                stroke="currentColor"
              />
            </svg>
            <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full">
              <UIcon
                :name="item.icon"
                size="33"
                class="text-transparent bg-black lg:dark:bg-[linear-gradient(to_right,#30F8FF,#30F8FF)] dark:bg-[linear-gradient(to_right,#5E00F8,#30F8FF)]"
              />
            </div>
          </div>
          <count-up
            class="text-base lg:text-xl font-normal leading-[25px] text-black dark:text-white bg-linear-to-r from-red to-yellow"
            :startVal="0"
            :end-val="item.amount"
            :duration="6"
            useGrouping
          ></count-up>
          <p class="line-clamp-3 !mt-2 text-slate-500 text-sm lg:text-base">{{ $t(item.name) }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import CountUp from 'vue-countup-v3'

defineProps({
  numberData: {
    type: Array,
    default: () => {
      return [
        {
          id: 1,
          amount: '1234567890',
          name: 'home.data_list.organization_size',
          icon: 'mdi:flowchart'
        },
        {
          id: 2,
          amount: '1234567890',
          name: 'home.data_list.service_area',
          icon: 'common-icon:earth'
        },
        {
          id: 3,
          amount: '1234567890',
          name: 'home.data_list.number_of_members',
          icon: 'el:group'
        },
        {
          id: 4,
          amount: '1234567890',
          name: 'home.data_list.the_creation_volunteer',
          icon: 'vaadin:user-heart'
        },
        {
          id: 5,
          amount: '1234567890',
          name: 'home.data_list.ai_agent_ambassador',
          icon: 'common-icon:user-male'
        },
        {
          id: 6,
          amount: '1234567890',
          name: 'home.data_list.ecological_nutation',
          icon: 'common-icon:earth-ball'
        }
      ]
    }
  }
})
</script>

<style></style>

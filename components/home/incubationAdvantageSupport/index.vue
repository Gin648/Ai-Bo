<template>
  <div>
    <div class="container">
      <div class="py-10 mt-20 mb-10">
        <h4 class="title-text">
          {{ $t('home.incubation_advantage_support.title') }}
        </h4>
      </div>
      <template v-if="showType === 'list'">
        <div>
          <div
            class="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-[30px] text-center pt-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <template v-for="(item, index) in $tm('home.incubation_advantage_support.list1')" :key="index">
              <div
                class="rounded-[15px] lg:rounded-[35px] border-0 dark:border border-transparent p-3 lg:p-6 duration-200 dark:border-[#30F8FF] bg-black dark:bg-[radial-gradient(circle_at_center,rgba(18,98,125,0.5),rgba(5,31,66,1))]"
              >
                <a
                  href="javascript:"
                  class="w-[120px] h-[120px] shadow- mx-auto flex items-center justify-center lg:my-12"
                >
                  <img
                    class="w-[80px] lg:w-[100px] hidden dark:inline-block"
                    :src="list1Icons[index].primary_icon || ''"
                    alt=""
                  />
                  <img class="w-[80px] lg:w-[100px] dark:hidden" :src="list1Icons[index].white_icon || ''" alt="" />
                  <!-- <img
                    class="w-[80px] hidden dark:inline-block lg:dark:hidden"
                    :src="list1Icons[index].linear_icon || ''"
                    alt=""
                  /> -->
                  <!-- <Icon
                    :name="list1Icons[index].icon || 'common-icon:book'"
                    class="lg:w-[100px] lg:h-[100px] w-[64px] h-[64px] bg-white dark:hidden lg:dark:bg-primary lg:dark:inline-block"
                  /> -->
                </a>
                <h5
                  class="mt-2 text-base font-normal text-left text-white lg:text-xl dark:text-white h-[60px] lg:h-auto"
                >
                  {{ $rt(item.title) }}
                </h5>
                <p
                  class="w-full lg:w-[80%] text-left text-xs lg:text-base font-light text-white dark:text-[#30F8FF] lg:pt-2 pb-4"
                >
                  {{ $rt(item.text) }}
                </p>
              </div>
            </template>
          </div>
          <div class="py-20 overflow-auto">
            <div class="w-[1100px] grid grid-flow-row grid-cols-12 grid-rows-4 gap-10 text-black dark:text-[#30F8FF]">
              <template v-for="(item, index) in $tm('home.incubation_advantage_support.list2')" :key="item">
                <div
                  :class="list2Layout[index]"
                  class="h-[80px] p-4 border border-[#7e7a96] rounded-[20px] flex justify-center items-center bg-light-with-dot dark:bg-dark-with-dot"
                >
                  {{ $rt(item) }}
                </div>
              </template>
            </div>
          </div>
        </div>
      </template>
    </div>
    <template v-if="showType === 'graph'">
      <div class="block dark:hidden">
        <Graph></Graph>
      </div>
      <div class="hidden dark:block bg-[url(/assets/images/bg-blur.png)] bg-center bg-cover bg-no-repeat">
        <GraphDark></GraphDark>
      </div>
    </template>
  </div>
</template>

<script setup>
import Graph from './Graph.vue'
import GraphDark from './GraphDark.vue'

defineProps({
  showType: {
    type: String,
    default: 'graph'
  },
  list1Icons: {
    type: Array,
    default: () => {
      return [
        {
          id: 1,
          icon: 'common-icon:book',
          primary_icon: '/assets/images/icons/book-icon.svg',
          linear_icon: '/assets/images/icons/book-linear-icon.svg',
          white_icon: '/assets/images/icons/book-white-icon.svg'
        },
        {
          id: 2,
          icon: 'common-icon:group',
          primary_icon: '/assets/images/icons/human-icon.svg',
          linear_icon: '/assets/images/icons/human-linear-icon.svg',
          white_icon: '/assets/images/icons/human-white-icon.svg'
        },
        {
          id: 3,
          icon: 'common-icon:business',
          primary_icon: '/assets/images/icons/business-icon.svg',
          linear_icon: '/assets/images/icons/business-linear-icon.svg',
          white_icon: '/assets/images/icons/business-white-icon.svg'
        },
        {
          id: 4,
          icon: 'common-icon:traffic',
          primary_icon: '/assets/images/icons/traffic-icon.svg',
          linear_icon: '/assets/images/icons/traffic-linear-icon.svg',
          white_icon: '/assets/images/icons/traffic-white-icon.svg'
        },
        {
          id: 5,
          icon: 'common-icon:resource',
          primary_icon: '/assets/images/icons/resource-icon.svg',
          linear_icon: '/assets/images/icons/resource-linear-icon.svg',
          white_icon: '/assets/images/icons/resource-white-icon.svg'
        },
        {
          id: 6,
          icon: 'common-icon:tech',
          primary_icon: '/assets/images/icons/tech-icon.svg',
          linear_icon: '/assets/images/icons/tech-linear-icon.svg',
          white_icon: '/assets/images/icons/tech-white-icon.svg'
        }
      ]
    }
  },
  list2Layout: {
    type: Array,
    default: () => {
      return [
        'col-span-8',
        'col-span-4',
        'col-span-5',
        'col-span-6',
        'col-span-7',
        'col-span-5',
        'col-span-3',
        'col-span-3',
        'col-span-6'
      ]
    }
  }
})
</script>

<style></style>

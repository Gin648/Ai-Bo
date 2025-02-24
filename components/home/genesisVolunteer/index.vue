<template>
  <div class="container px-4 md:px-20">
    <div class="py-10 mt-20 mb-10">
      <h4 class="title-text">
        {{ $t('home.genesis_volunteer.title') }}
      </h4>
    </div>
    <div class="flex flex-col gap-10 md:flex-row">
      <div class="w-full md:w-3/5">
        <div
          class="px-6 md:px-10 py-10 md:py-16 rounded-[35px] border-0 dark:border border-[#1f888e] bg-black dark:bg-[url(/assets/images/bg-rainbow.png)] bg-no-repeat bg-cover"
        >
          <img class="w-full h-[120px] md:h-[220px] object-cover rounded-[20px]" src="/assets/images/robot-2.jpg" />
          <p class="mt-4 text-white dark:text-[#30F8FF]">
            {{ $t('home.genesis_volunteer.content') }}
          </p>
        </div>
      </div>
      <div class="w-full py-10 text-center md:w-2/5">
        <div class="flex flex-col items-center justify-between h-full gap-10">
          <template v-for="(item, index) in $tm('home.genesis_volunteer.list')" :key="index">
            <div class="w-full">
              <p class="mb-4 text-lg font-semibold text-black dark:text-white">{{ $rt(item.title) }}</p>
              <div
                class="h-[80px] p-4 text-white text-lg font-light border border-[#7e7a96] rounded-[20px] flex justify-center items-center bg-light-with-dot-xs dark:bg-dark-with-dot-xs"
              >
                {{ $rt(item.text) }}
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>

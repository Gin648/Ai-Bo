<template>
  <div class="container px-4 md:px-[14rem]">
    <div class="py-10 mt-20 mb-10">
      <h4 class="title-text">
        {{ $t('home.agent_ambassador.title') }}
      </h4>
    </div>
    <div class="flex flex-col gap-10">
      <div class="w-full">
        <div
          class="px-6 py-10 rounded-[35px] border border-[#30F8FF] bg-black dark:bg-[url(/assets/images/bg-glitter.png)] bg-no-repeat bg-cover bg-center"
        >
          <div class="w-full">
            <img class="w-full h-[120px] md:h-[220px] object-cover rounded-[20px]" src="/assets/images/robot-3.png" />
          </div>
          <p class="mx-auto w-full md:w-[90%] mt-8 text-white dark:text-[#30F8FF]">
            {{ $t('home.agent_ambassador.content') }}
          </p>
        </div>
      </div>
      <div class="w-full py-10 text-center">
        <div class="flex flex-col items-center justify-between h-full gap-10 md:flex-row">
          <template v-for="(item, index) in $tm('home.agent_ambassador.list')" :key="index">
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

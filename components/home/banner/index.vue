<template>
  <div class="relative">
    <div class="absolute z-10 flex w-full h-full">
      <div class="w-1/2 bg-gradient-to-r from-[#e4e4e4] dark:from-[#04081d] to-white dark:to-[#00072d]/0"></div>
      <div class="w-1/2 bg-gradient-to-l from-[#e4e4e4] dark:from-[#04081d] to-white dark:to-[#00072d]/0"></div>
    </div>
    <div
      class="absolute bottom-0 z-10 w-full h-1/3 bg-gradient-to-t from-[#04081d] to-[#00072d]/0 hidden dark:block"
    ></div>
    <div
      class="relative bg-stone-100 dark:bg-[url(/assets/images/banner-bg-dark.png)] bg-cover bg-center bg-no-repeat pb-10 pt-[32rem] md:pb-[60px] xl:pt-[52rem]"
    >
      <img
        src="/assets/images/ai-robot.png"
        class="absolute z-20 top-0 left-0 right-0 m-auto -mt-[60px] h-[560px] md:h-auto point-events-none select-none hidden dark:inline-block"
        draggable="false"
        alt=""
      />
      <img
        src="/assets/images/ai-robot-light.png"
        class="absolute z-20 top-0 left-0 right-0 m-auto -mt-[60px] h-[560px] md:h-auto point-events-none select-none dark:hidden inline-block"
        draggable="false"
        alt=""
      />
      <div class="container relative z-20">
        <div class="text-4xl font-black text-center sm:text-3xl">
          <div class="flex items-end justify-center gap-4">
            <div class="relative flex flex-col">
              <h2 class="title-text">
                {{ $t('home.banner.title') }}
              </h2>
              <h2 class="mt-2 md:mt-5 title-text">
                {{ $t('home.banner.subtitle') }}
              </h2>
            </div>
          </div>
          <p class="text-base font-light text-black pt-7 lg:text-xl dark:text-white">{{ $t('home.banner.desc') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>

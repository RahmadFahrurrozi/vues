<script setup>
import { icons } from '@/constant/icons.constant'
</script>

<template>
  <div class="relative overflow-hidden whitespace-nowrap pb-6">
    <div class="flex items-center gap-14 animate-marquee">
      <img v-for="(logo, index) in icons" :key="index" :src="logo" alt="logo" class="h-9 w-auto" />
      <img v-for="(logo, index) in icons" :key="index" :src="logo" alt="logo" class="h-9 w-auto" />
    </div>
    <div
      class="pointer-events-none absolute left-0 top-0 h-full w-3xs bg-gradient-to-r from-white to-transparent"
    ></div>
    <div
      class="pointer-events-none absolute right-0 top-0 h-full w-3xs bg-gradient-to-l from-white to-transparent"
    ></div>
  </div>
</template>

<style>
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: inline-flex;
  min-width: 100%;
  animation: marquee 50s linear infinite;
}
</style>

<script setup>
import { icons } from '@/constant/icons'
</script>

<template>
  <div class="overflow-hidden whitespace-nowrap pb-6">
    <div class="flex items-center gap-14 animate-marquee">
      <img v-for="(logo, index) in icons" :key="index" :src="logo" alt="logo" class="h-9 w-auto" />
      <img v-for="(logo, index) in icons" :key="index" :src="logo" alt="logo" class="h-9 w-auto" />
    </div>
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

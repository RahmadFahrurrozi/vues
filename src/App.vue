<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <header>
    <NavigationBar />
  </header>
  <main class="min-h-screen">
    <RouterView />
  </main>
</template>

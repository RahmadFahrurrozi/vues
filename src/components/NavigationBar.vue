<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex items-center gap-6 p-5">
    <div class="pr-4">
      <img class="h-10" src="/googleIcon.png" alt="Google Icon" />
    </div>
    <div class="flex items-center gap-6">
      <RouterLink class="nav-link pb-4 text-xl" to="/"> Tentang </RouterLink>
      <RouterLink class="nav-link pb-4 text-xl" to="/about-product"> Produk </RouterLink>
      <RouterLink class="nav-link pb-4 text-xl" to="/info-perusahaan"> Info Perusahaan </RouterLink>
      <RouterLink class="nav-link pb-4 text-xl" to="/info-terbaru"> Info Terbaru </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  transition: all 0.2s ease-in-out;
  border-bottom: 2px solid transparent;
}

.nav-link:hover {
  color: #2563eb;
}

.nav-link.router-link-active {
  color: oklch(20.5% 0 0);
  font-weight: bold;
  border-bottom-color: oklch(62.3% 0.214 259.815);
}
</style>

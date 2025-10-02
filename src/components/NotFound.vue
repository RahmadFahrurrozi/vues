<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <img src="/notFound.svg" alt="404 Not Found" class="w-64" />
    <h1 class="text-4xl font-bold">404 Not Found</h1>
    <p class="text-lg text-slate-400 py-2">Halaman tidak ditemukan</p>
    <button
      class="px-8 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-2xl cursor-pointer transition duration-300 ease-in-out"
      @click="$router.go(-1)"
    >
      Kembali
    </button>
  </div>
</template>

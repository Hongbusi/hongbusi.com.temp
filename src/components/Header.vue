<script setup lang="ts">
import { isDark, toggleDark } from '~/composables/dark'

const { y } = useWindowScroll()
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full bg-white dark:bg-#121212 shadow-sm shadow-black/10 transition-transform duration-200 ease-in-out"
    :class="{ '-translate-y-full': y >= 50 }"
  >
    <nav class="flex justify-between items-center px-4 py-2 mx-auto container">
      <div>
        <img v-if="isDark" src="/logo-dark.svg" class="h-44px" alt="logo">
        <img v-else src="/logo.svg" class="h-44px" alt="logo">
      </div>

      <div class="text-xl">
        <button class="mx-2 !outline-none" title="切换深色模式" @click="toggleDark()">
          <div v-if="isDark" class="i-hbs-moon" />
          <div v-else class="i-hbs-sunny" />
        </button>

        <a class="mx-2" rel="noreferrer" href="https://github.com/Hongbusi" target="_blank" title="GitHub">
          <div class="i-hbs-github" />
        </a>
      </div>
    </nav>
  </header>
</template>


<script setup lang="ts">
import { Github, Moon, Sunny } from '@hongbusi/icons-vue'
import { isDark, toggleDark } from '~/composables/dark'
</script>

<template>
  <header class="sticky top-0 z-40 w-full backdrop-blur">
    <div class="flex justify-between items-center px-2 mx-auto container">
      <div class="py-2">
        <img v-if="isDark" src="/logo-dark.svg" class="h-46px" alt="logo">
        <img v-else src="/logo.svg" class="h-56px" alt="logo">
      </div>
      <div class="text-xl">
        <button class="mx-2 !outline-none" title="切换深色模式" @click="toggleDark()">
          <Icon>
            <Moon v-if="isDark" />
            <Sunny v-else />
          </Icon>
        </button>

        <a class="mx-2" rel="noreferrer" href="https://github.com/Hongbusi/Hongbusi" target="_blank" title="GitHub">
          <Icon>
            <Github />
          </Icon>
        </a>
      </div>
    </div>
  </header>
</template>


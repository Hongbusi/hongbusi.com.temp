<script setup lang="ts">
import { isDark } from '../composables/dark'
</script>

<template>
  <header>
    <div class="container px-4 py-2 mx-auto">
      <div>
        <img v-if="isDark" src="/logo-dark.svg" class="h-56px" alt="logo">
        <img v-else src="/logo.svg" class="h-56px" alt="logo">
      </div>
    </div>
  </header>
</template>


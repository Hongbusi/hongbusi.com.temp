<script setup lang='ts'>
import { isDark, toggleDark } from '~/composables/dark'
</script>

<template>
  <button title="Toggle Color Scheme" @click="toggleDark()">
    <div v-if="isDark" class="i-hbs-moon" />
    <div v-else class="i-hbs-sunny" />
  </button>
</template>

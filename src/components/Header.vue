<script setup lang="ts">
const { y } = useWindowScroll()
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full bg-white dark:bg-#121212 shadow-sm shadow-black/10 transition-transform duration-200 ease-in-out"
    :class="{ '-translate-y-full': y >= 50 }"
  >
    <div class="flex justify-between items-center px-4 py-2 mx-auto container">
      <div class="flex items-center space-x-2">
        <div class="w-40px h-40px bg-black" />
      </div>

      <nav class="flex items-center space-x-3 text-xl">
        <router-link to="/posts">
          Blog
        </router-link>

        <a rel="noreferrer" href="https://twitter.com/Hongbusi" target="_blank" title="GitHub">
          <div class="i-hbs-twitter" />
        </a>

        <a rel="noreferrer" href="https://github.com/Hongbusi" target="_blank" title="GitHub">
          <div class="i-hbs-github" />
        </a>

        <ToggleTheme />
      </nav>
    </div>
  </header>
</template>


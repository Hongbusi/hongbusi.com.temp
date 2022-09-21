<script setup lang="ts">
const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div v-if="frontmatter.title">
    <h1>{{ frontmatter.title }}</h1>
  </div>

  <article ref="content">
    <slot />
  </article>
</template>

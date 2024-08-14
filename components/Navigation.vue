<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<template>
  <ul>
    <li v-for="(page, index) in navigation" :key="index">
        <a :href="page.path">{{ page.title }}</a>
    </li>
  </ul>
</template>

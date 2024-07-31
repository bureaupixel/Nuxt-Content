<template>
<div>
  <article v-if="page.tags" class="text-xs ">
    <li v-for="(item, index) in page.tags" :key="index">
      <NuxtLink :to="`/tags/${item}`">{{ item }}</NuxtLink>
    </li>
  </article>
</div>
</template>

<script setup>
const { page } = useContent();
</script>

<style scoped>
li { 
list-style: none;
display: inline-block;
padding: 4px;
}
</style>
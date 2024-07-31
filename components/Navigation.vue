
<template>
  <div>
    <ul class="navigation">
    <li v-for="(item, index) in navigationTree" :key="index">
      <NuxtLink :to="item._path">
        {{ item.title }}
      </NuxtLink>
      <Navigation v-if="item.children" :navigation-tree="item.children" class="sub-navigation" />
    </li>
  </ul>
  <NuxtLink to="/search">Search</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  navigationTree: {
    type: Array,
    default: () => []
  }
})
</script>
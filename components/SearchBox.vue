<template>
  <div>

      <div class="search-container pb-5">
          <input v-model="search" placeholder="Search...">
          <p class="text-xs">Enter a search term in the field above</p>
      </div>
      <ul>
          <li v-for="item in results" :key="item.title">
              <hr>
              <a :href="`${item.id}`">
                  <p class="text--xl font-bold">{{ item.title }}</p>
              </a>
              <p>{{ truncateContent(item.content) }}</p>
          </li>
      </ul>

</div>
</template>

<script lang="ts" setup>
const search  = ref('')
let results = ref([]);
// const results = await searchContent(search)

// Function to truncate content to max 500 characters
function truncateContent(content: String) {
const maxLength = 500;
if (content.length > maxLength) {
  return content.substring(0, maxLength) + '...';
} else {
  return content;
}
}
// Watch for changes in the search input and fetch results accordingly
watchEffect(async () => {
results = await searchContent(search.value.trim());
});
</script>
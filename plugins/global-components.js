import { defineNuxtPlugin } from '#app';
import SearchBox from '@/components/SearchBox.vue';
import ArticleTags from '@/components/ArticleTags.vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('SearchBox', SearchBox);
  nuxtApp.vueApp.component('ArticleTags', ArticleTags);
});

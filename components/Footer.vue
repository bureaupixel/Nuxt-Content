<template>
    <div class="text-xs">
        <hr>
        <div class="flex">
            <div class=" flex-none basis-11/12"><ColorMode /></div>
            <div class="flex-1 basis-1/12">
                <NuxtLink to="https://github.com/bureaupixel/NuxtStudent" target="_blank">
                    <GithubIcon />
                </NuxtLink>    
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  import GithubIcon from 'vue-material-design-icons/Github.vue'
</script>

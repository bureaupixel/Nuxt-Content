<template>
    <div class="flex animate-fade animate-once animate-delay-[1000ms]">
      <div class="flex-auto w-1 pt-3"></div>
      <div class="flex-row pt-5 justify-end">
        <button style="margin-left: 16px" @click="drawer = true">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"></path>
          </svg>
        </button>
      </div>
    </div>

    <el-drawer
      v-model="drawer"
      class="drawer"
      :direction="direction"
      size="90%"
    >
    <!-- Title on top of the drawer -->
    <div class="mt-2 mb-5">
            <!-- Start navigation from content -->
            <nav>
                <Navigation :navigation-tree="navigation" />
            </nav>
             <!-- End navigation from content -->
        </div>
        <div class="mt-5 mb-5"><Footer /></div>
    
    </el-drawer>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import type { DrawerProps } from 'element-plus'
  import Navigation from './Navigation.vue';

  const navigation = ref([]);
  
  const drawer = ref(false)
  const direction = ref<DrawerProps['direction']>('rtl')
  </script>
  
  <style>
  .el-drawer  { background-color: rgba(255, 255, 255, 0.99);}
  .dark-mode .el-drawer { background-color: rgba(30, 30, 30, 0.98); }
  </style>

<template>
  <div>
  <client-only>
    
    <div class="icon-container">
      <button
      class="icon"
        :class="{ active: colorMode.preference === 'light' }"
        @click="setColorMode('light')"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.154q-.69 0-1.201-.463t-.607-1.152h3.616q-.096.69-.607 1.152T12 21.154m-3.5-3.385v-1h7v1zM8.558 15q-1.417-.929-2.238-2.356T5.5 9.5q0-2.721 1.89-4.61T12 3t4.61 1.89T18.5 9.5q0 1.717-.82 3.144T15.442 15zm.292-1h6.3q1.125-.8 1.738-1.975T17.5 9.5q0-2.3-1.6-3.9T12 4T8.1 5.6T6.5 9.5q0 1.35.613 2.525T8.85 14M12 14"></path></svg>
      </button>
      <button
      class="icon"
        :class="{ active: colorMode.preference === 'dark' }"
        @click="setColorMode('dark')"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.154q-.69 0-1.201-.463t-.607-1.152h3.616q-.096.69-.607 1.152T12 21.154M12 4q-1.12 0-2.124.426t-1.73 1.14l-.719-.708q.986-.912 2.116-1.385T12 3q2.721 0 4.61 1.89T18.5 9.5q0 1.506-.538 2.605t-1.358 1.956l-.708-.707q.583-.575 1.094-1.543q.51-.967.51-2.311q0-2.3-1.6-3.9T12 4m8.162 16.43l-.714.714L13.304 15H8.558q-1.417-.929-2.238-2.356T5.5 9.5q0-.52.091-1.08q.092-.562.236-.897l-3.158-3.17l.708-.707zM8.85 14h3.454l-5.65-5.65q-.058.223-.106.546T6.5 9.5q0 1.35.613 2.525T8.85 14m6.685 2.77v1H8.5v-1z"></path></svg>
      </button>
      <button
      class="icon"
        :class="{ active: colorMode.preference === 'system' }"
        @click="setColorMode('system')"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19v-2H4.616q-.691 0-1.153-.462T3 15.385v-9.77q0-.69.463-1.152T4.615 4h14.77q.69 0 1.152.463T21 5.616v9.769q0 .69-.463 1.153T19.385 17H13v2h1.5q.214 0 .357.143T15 19.5t-.143.357T14.5 20h-5q-.213 0-.357-.143T9 19.5t.143-.357T9.5 19zm-6.384-3h14.769q.23 0 .423-.192t.192-.423v-9.77q0-.23-.192-.423T19.385 5H4.615q-.23 0-.423.192T4 5.616v9.769q0 .23.192.423t.423.192M4 16V5z"></path></svg>
      </button>
      <button
      class="icon"
        :class="{ active: colorMode.preference === 'gray' }"
        @click="setColorMode('gray')"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 19q-1.871 0-3.185-1.306Q2 16.39 2 14.517q0-1.719 1.175-3.051t2.921-1.431q.337-2.185 2.01-3.61T12 5q2.502 0 4.251 1.749T18 11v1h.616q1.436.046 2.41 1.055T22 15.5q0 1.471-1.014 2.486Q19.97 19 18.5 19zm0-1h12q1.05 0 1.775-.725T21 15.5t-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6T8.463 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5t1.025 2.475T6.5 18m5.5-6"></path></svg>
      </button>
    </div>
    
    <div class="mt-5 w-full mb-5">
        <p class="description">Color mode: {{ colorMode.preference }}

          <span class="text-xs opacity-50 mb-5">
          copyright Bureaupixel © 2024 -  All rights reserved 
          </span>

        </p>
    </div>




  </client-only>
  </div>
</template>

<script setup lang="ts">
// Initialize colorMode
const colorMode = useColorMode()

// Method to set the color mode preference
const setColorMode = (mode: string) => {
  colorMode.preference = mode
}
</script>

<style scoped>
.icon-container {
  display: flex;
  gap: 1rem;
}
.icon {
  cursor: pointer;
  font-size: 2em;
  transition: color 0.3s;
}
.icon.active {
  color: var(--color-active); /* Define this variable in your global CSS */
}
</style>

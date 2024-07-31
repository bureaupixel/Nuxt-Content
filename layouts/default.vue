<template>
    <div class="container">
      <client-only placeholder="loading...">
      <div class="container">
          <Drawer />
      </div>    
      </client-only>

      <div class="container"> 
        <slot />
      </div> 
      
      <div class="container"> 
        <Footer />
      </div>
    </div>
  </template>
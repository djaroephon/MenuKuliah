<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/SideBar.vue'
</script>

<template>
  <header>
    <nav>
      <Sidebar />
    </nav>
  </header>
  <body>
    <RouterView />
  </body>
</template>


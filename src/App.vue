<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { provide, ref } from 'vue'
import { router } from './router'
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width <= 500 ? false : true)
    provide('menuVisible', menuVisible) //set
    console.log(`app.vue的${menuVisible.value}`)
    // 当router变化时
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false
      }
    })
  },
}
</script>

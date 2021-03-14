<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">学习</Tab>
    <Tab title="导航2">吃饭</Tab>
    <Tab title="导航3">睡觉</Tab>
    <Tab title="导航4">散步</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref('导航1')
    return {
      x,
    }
  },
}
</script>

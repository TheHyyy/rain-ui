<template>
  <div>
    <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
    <component v-for="(c, index) in defaults" :key="index" :is="c" />
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, conntext) {
    const defaults = conntext.slots.default()
    defaults.forEach((tag) => {
      if (defaults[0].type !== Tab) {
        throw new Error('Tabs 子标签必须是Tab')
      }
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    return { defaults, titles }
  },
}
</script>

<style scoped></style>

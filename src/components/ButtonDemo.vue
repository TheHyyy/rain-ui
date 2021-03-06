<template>
  <div>Button示例</div>
  <h1>示例</h1>
  <div>
    <Button @click="onClick" @focus="onClick" @mouseover="onClick">你好</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
  setup() {
    const onClick = () => {}
    return { onClick }
  },
}
</script>

<style scoped></style>

<demo>
支持value
</demo>
<template>
  <div>
    <Input v-model:value="val" v-model="blurval"></Input>
  </div>
</template>
<script lang="ts">
import Input from '../lib/Input.vue'
export default {
  components: {
    Input,
  },
}
</script>
<style lang="scss" scoped></style>

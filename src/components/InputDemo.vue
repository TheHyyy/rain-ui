<template>
  <div>
    <h1 class="first-title">Input 示例 (测试中)</h1>

    <section class="second-title first-title">
      <h2>支持value</h2>
    </section>
    <Demo :component="InputValue"></Demo>

    <section class="second-title">
      <h2>支持disabled</h2>
      <p>
        使用<span>disabled</span>属性改变<span>Input</span>组件的状态，以此<span>禁用Input</span>组件
      </p>
    </section>
    <Demo :component="InputDisabled"></Demo>
  </div>
</template>
<script lang="ts">
import Demo from './Demo.vue'

import InputValue from './InputValue.vue'
import InputDisabled from './InputDisabled.vue'

export default {
  components: { Demo },
  setup() {
    return {
      InputValue,
      InputDisabled,
    }
  },
}
</script>
<style scoped>
.myP {
  margin: 9px 0;
}
.first-title {
  margin-top: 8px;
}
</style>

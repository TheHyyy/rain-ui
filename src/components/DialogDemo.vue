<template>
  <div>Dialog噢</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <div>hi1</div>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'

import { openDialog } from '../lib/openDialog'
import { ref } from 'vue'
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false)

    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return true
    }
    const f2 = () => {}
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        },
      })
    }
    return { x, toggle, f1, f2, showDialog }
  },
}
</script>

<style scoped></style>

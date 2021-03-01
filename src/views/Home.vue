<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>Rain-UI</h1>
      <h2>一个牛逼的 UI 框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <router-link to="doc"> <a>开始</a></router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
  data() {
    return {
      msg: '',
    }
  },
  methods: {},
}
</script>

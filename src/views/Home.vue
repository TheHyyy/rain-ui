<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>Rain-UI</h1>
      <h2>一个新人不完善的UI</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="feeatures">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-typescript"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-light"></use>
    </svg>
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
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #28d1c9;
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
}
.feeatures {
  > svg {
    width: 64px;
    height: 64px;
  }
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
      }
    }
  }
}
</style>

<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>Raining-UI</h1>
      <h2>基于Vue3.0的UI框架</h2>
      <p class="actions">
        <a href="https://github.com/TheHyyy/rain-ui" target="view_window"
          >GitHub</a
        >
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="feeatures">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
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
$blue: #668fbf;
$border-radius: 4px;
$color: #567fb0;
.topnavAndBanner {
  background: linear-gradient(
    151deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(115, 157, 207, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.feeatures {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
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
      background: $blue;
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

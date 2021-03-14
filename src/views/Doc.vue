<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li><router-link to="/doc/intro">介绍</router-link></li>
          <li><router-link to="/doc/install">安装</router-link></li>
          <li><router-link to="/doc/get-started">开始使用</router-link></li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/hy">未完待续...</router-link>
          </li>
        </ol>
        <h2>其他</h2>
        <ol>
          <li><router-link to="/doc/blog">博客</router-link></li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
  setup() {
    // const menuVisible = inject < Ref < boolean >> 'xxx' //get
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    console.log(`doc的${menuVisible.value}`)
    return { menuVisible }
  },
}
</script>
<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  border-right: 2px solid #567fb0;
  // background: linear-gradient(
  //   180deg,
  //   rgba(255, 255, 255, 1) 0%,
  //   rgba(255, 255, 255, 1) 7%,
  //   rgba(86, 127, 176, 1) 7%,
  //   rgba(86, 127, 176, 1) 100%
  // );
  background: #346094;
  color: white;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding: 0px 16px;
  }
  > ol {
    > li {
      > :hover {
        background: #739dcf;
        text-decoration: none;
      }
      > a {
        display: block;
        padding: 4px 28px;
      }
      .router-link-active {
        // background: white;
        background: #739dcf;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>

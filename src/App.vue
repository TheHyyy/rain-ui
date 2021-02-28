<template>
  <div>
    hi | <router-link to="/">到我的rain1</router-link>|<router-link to="/x"
      >到我的rain2</router-link
    >
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

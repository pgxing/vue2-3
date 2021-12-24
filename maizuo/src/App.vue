<template>
  <div id="app">
    <router-view />
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar";
export default {
  components: {
    tabBar,
  },
};
</script>

<style lang="scss">
#app {
  font-size: 0.16rem;
}
</style>

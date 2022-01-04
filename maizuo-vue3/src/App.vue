<template>
  <div id="app">
    <router-view />
    <tab-bar v-show="isShowTabBar"></tab-bar>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar";
import { mapState } from "vuex";
export default {
  components: {
    tabBar,
  },
  computed: {
    ...mapState(["isShowTabBar"]),
  },
};
</script>

<style lang="scss">
#app {
  font-size: 0.16rem;
}
</style>

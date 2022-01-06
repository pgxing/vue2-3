<template>
  <div id="app">
    <router-view />
    <tab-bar v-show="isShowTabBar"></tab-bar>
  </div>
</template>

<script>
import { computed } from "vue";
import tabBar from "@/components/tabBar";
import { useStore } from "vuex";
export default {
  components: {
    tabBar,
  },
  setup() {
    const store = useStore();
    return {
      isShowTabBar: computed(() => store.state.isShowTabBar),
    };
  },
  // computed: {
  //   ...mapState(["isShowTabBar"]),
  // },
};
</script>

<style lang="scss">
#app {
  font-size: 0.16rem;
}
</style>

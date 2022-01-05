<template>
  <div class="box">
    通信
    <nav-bar myname="pgx111" @event="showOrHide" :isShow="obj.isShow"></nav-bar>
    <side-bar v-show="obj.isShow"></side-bar>
  </div>
</template>
<script>
import { reactive } from "vue";
import navBar from "./components/navBar.vue";
import sideBar from "./components/sideBar.vue";
export default {
  components: {
    navBar,
    sideBar,
  },
  setup() {
    const obj = reactive({
      isShow: true,
    });
    const showOrHide = () => {
      obj.isShow = !obj.isShow;
    };
    return {
      obj,
      showOrHide,
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  font-size: 0.16rem;
}
</style>
<template>
  <div class="box">
    hello-vue3新写法
    {{ obj.myname }}-{{ obj.myage }}
    <button @click="handleClick()">change</button>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    //定义状态
    const obj = reactive({
      myname: "kerwin",
      myage: 100,
    });
    const handleClick = () => {
      obj.myname = "小明";
    };
    return {
      obj,
      handleClick,
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  font-size: 0.16rem;
}
</style>
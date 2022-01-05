<template>
  <div class="box">
    app
    <div>姓名</div>
    <ul>
      <li v-for="item in obj1.list1" :key="item">{{ item.name }}</li>
    </ul>
    <div>标题</div>
    <ul>
      <li v-for="item in obj2.list2" :key="item">{{ item.title }}</li>
    </ul>
  </div>
</template>
<script>
import { getData1, getData2 } from "./module/app";
export default {
  setup() {
    const obj1 = getData1();
    const obj2 = getData2();
    return {
      obj1,
      obj2,
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  font-size: 0.16rem;
}
</style>
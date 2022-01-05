<template>
  <div class="box">
    <input type="text" v-model="obj.text" />
    <ul>
      <li v-for="data in obj.filterList" :key="data">
        {{ data }}
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive, watch } from "vue";
export default {
  setup() {
    const obj = reactive({
      text: "",
      filterList: ["aaa", "abb", "abc", "bbb", "bcc", "add", "bcd"],
      datalist: ["aaa", "abb", "abc", "bbb", "bcc", "add", "bcd"],
    });
    watch(
      () => obj.text,
      () => {
        obj.filterList = obj.datalist.filter((item) => item.includes(obj.text));
      }
    );
    return {
      obj,
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  font-size: 0.16rem;
}
</style>
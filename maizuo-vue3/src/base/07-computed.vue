<template>
  <div class="box">
    <input type="text" v-model="obj.text" />
    <ul>
      <li v-for="data in computedList" :key="data">
        {{ data }}
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive, computed } from "vue";
export default {
  setup() {
    const obj = reactive({
      text: "",
      datalist: ["aaa", "abb", "abc", "bbb", "bcc", "add", "bcd"],
    });
    const computedList = computed(() => {
      return obj.datalist.filter((item) => item.includes(obj.text));
    });
    return {
      obj,
      computedList,
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  font-size: 0.16rem;
}
</style>
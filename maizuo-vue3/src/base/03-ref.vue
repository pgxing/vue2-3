<template>
  <div class="box">
    <input type="text" ref="inputRef" />
    <button @click="getVal()">获取输入框的值</button>
    <div>使用reactive:{{ obj.text }}</div>
    <div>使用ref:{{ refText }}</div>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const obj = reactive({
      text: "reactive",
    });
    const refText = ref("ref");
    const inputRef = ref(); //绑定ref
    const getVal = () => {
      //reactive
      obj.text = inputRef.value.value;
      //ref
      refText.value = inputRef.value.value;
    };
    return {
      obj,
      inputRef,
      getVal,
      refText,
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  font-size: 0.16rem;
}
</style>
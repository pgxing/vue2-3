<template>
  <div></div>
</template>
<script>
import { onMounted, onBeforeMount } from "vue";
export default {
  setup() {
    onBeforeMount(() => {
      console.log("挂载之前");
    });
    onMounted(() => {
      console.log("dom挂载完毕", "axios", "事件监听等");
    });
  },
};
</script>
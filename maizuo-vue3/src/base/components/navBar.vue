<template>
  <div>子组件：{{ myname }}</div>
  <button @click="showOrHide">{{ isShow ? "隐藏" : "显示" }}</button>
</template>
<script>
export default {
  props: ["myname", "isShow"],
  setup(props, { emit }) {
    const showOrHide = () => {
      emit("event");
    };
    return {
      showOrHide,
    };
  },
};
</script>

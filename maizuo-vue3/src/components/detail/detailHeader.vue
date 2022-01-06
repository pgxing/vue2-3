<template>
  <div class="stickytop">
    <div class="title">
      <div class="left" @click="goBack">
        <van-icon name="arrow-left" color="#797d82" size="22" />
      </div>
      <div class="tit">{{ title }}</div>
    </div>
    <slot />
  </div>
</template>
<script>
// vue3 函数式组件写法
import { useRouter } from "vue-router";
export default {
  props: ["title"],
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    return {
      goBack,
    };
  },
};
// vue2-vue3 类组件写法
// export default {
//   props: ["title"],
//   methods: {
//     goBack() {
//       this.$router.back();
//     },
//   },
// };
</script>
<style lang="scss" scoped>
.stickytop {
  position: fixed;
  width: 100%;
  // height: 0.93rem;
  background-color: #fff;
  top: 0;
  .title {
    height: 0.44rem;
    display: flex;
    .left {
      padding: 0.14rem 0 0 0.14rem;
      width: 0.6rem;
    }
    .tit {
      width: 2.55rem;
      text-align: center;
      line-height: 0.44rem;
      font-size: 0.17rem;
    }
    .right {
      width: 0.6rem;
    }
  }
}
</style>
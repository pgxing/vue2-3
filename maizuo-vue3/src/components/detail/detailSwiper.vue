<template>
  <div class="swiper" :class="name">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
// vue3 函数式组件写法
import { onMounted } from "vue";
import Swiper from "swiper/swiper-bundle";
import "swiper/swiper-bundle.min.css";
export default {
  props: {
    prem: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    onMounted(() => {
      new Swiper("." + props.name, {
        slidesPerView: props.prem,
        spaceBetween: 10,
        freeMode: true,
      });
    });
  },
};
// vue2-vue3 类组件写法
// import Swiper from "swiper/swiper-bundle";
// import "swiper/swiper-bundle.min.css";
// export default {
//   props: {
//     prem: {
//       type: Number,
//       default: 1,
//     },
//     name: {
//       type: String,
//       default: "",
//     },
//   },
//   mounted() {
//     new Swiper("." + this.name, {
//       slidesPerView: this.prem,
//       spaceBetween: 10,
//       freeMode: true,
//     });
//   },
// };
</script>
<style lang="scss" scoped>
.swiper {
  width: 100%;
  .swiper-wrapper {
    .swiper-slide {
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
}
</style>
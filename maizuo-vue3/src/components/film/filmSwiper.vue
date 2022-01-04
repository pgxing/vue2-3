<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
</template>
<script>
import Swiper from "swiper/swiper-bundle";
// import 'swiper/swiper.min.css'
import "swiper/swiper-bundle.min.css";
export default {
  mounted() {
    new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>
<style lang="scss" scoped>
.swiper {
  height: 210px;
  width: 100%;
  .swiper-wrapper {
    .swiper-slide {
      width: 100%;
      height: 100%;
      background-color: #42b983;
      text-align: center;
    }
  }
}
</style>
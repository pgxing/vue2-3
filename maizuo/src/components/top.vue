<template>
  <div class="stickytop">
    <div class="title">
      <div class="left" @click="toCity">
        上海
        <van-icon name="arrow-down" />
      </div>
      <div class="tit">{{ title }}</div>
      <div class="right"></div>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  props: ["title"],
  methods:{
    toCity(){
      this.$router.push('/city')
    }
  }
};
</script>
<style lang="scss" scoped>
.stickytop {
  position: fixed;
  width: 100%;
  // height: 0.93rem;
  background-color: #fff;
  z-index: 999;
  top: 0;
  .title {
    height: 0.44rem;
    display: flex;
    .left {
      padding: 0.15rem 0 0 0.15rem;
      width: 0.6rem;
      font-size: 0.13rem;
      margin-right: 0.05rem;
      color: #191a1b;
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
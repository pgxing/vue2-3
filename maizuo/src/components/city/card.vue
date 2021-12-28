<template>
  <div class="card">
    <div class="tit">{{ title }}</div>
    <div class="content">
      <span
        v-for="item in cityList"
        :key="item.cityId"
        @click="clickCity(item)"
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    cityList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    //点击事件，父组件传入
    clickCity(item) {
      this.$emit("clickCity", item);
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  padding: 0.15rem 0.15rem 0;
  background-color: #fff;
  .tit {
    font-size: 0.13rem;
    color: #797d82;
  }
  /*
//根据显示屏的宽度，确定每个标签的宽度，按比例设置，不允许压缩
例如，屏幕宽度是300px，那么如果需要放三列，那么每个元素占用的宽度应该是300px/3,为100px
本例，是rem布局，所以按比例设置
**/
  .content {
    font-size: 0.14rem;
    color: #191a1b;
    padding: 0.1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &::after {
      content: "";
      width: 0.9rem;
    }
    span {
      display: inline-block;
      width: 0.9rem;
      background-color: #f4f4f4;
      height: 0.3rem;
      line-height: 0.3rem;
      text-align: center;
      border-radius: 2px;
      margin: 0.05rem 0.08rem 0.05rem;
    }
  }
}
</style>
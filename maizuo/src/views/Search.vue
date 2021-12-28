<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @input="onInput"
      @cancel="onCancel"
    />
    <!-- 视图窗口 -->
    <div class="cinemas">
      <!-- 滑动元素，必须 -->
      <div v-show="value">
        <div v-for="item in computedList" :key="item.name" class="cinemasItem">
          <div class="titBox">
            <div class="tit">{{ item.name }}</div>
            <div class="price">
              {{ computedPrice(item.lowPrice) }}<span>起</span>
            </div>
          </div>
          <div class="descBox">
            <div class="desc">{{ item.address }}</div>
            <div class="distance">距离未知</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BetterScroll from "better-scroll";
import obj from "@/utils/mixinsTab";
export default {
  mixins: [obj],
  data() {
    return {
      value: "",
      cinemasList: [],
    };
  },
  mounted() {
    // 首次挂载时，判断所有电影院列表是否已经存在于store中
    if (!this.$store.state.cinemasList.length) {
      //如果没有数据，dispatch发送请求，拿到请求结果后new betterScroll()
      this.$store.dispatch("getCinemas").then(() => {
        new BetterScroll(".cinemas", {
          movable: true,
          zoom: true,
        });
      });
    } else {
      //如果已经有数据，只需要new betterScroll()
      new BetterScroll(".cinemas", {
        movable: true,
        zoom: true,
      });
    }
  },
  updated() {
    //每次搜索完成后，dom节点发生变化，重新new betterScroll()
    if (this.computedList) {
      console.log("betterScroll元素发生变化");
      new BetterScroll(".cinemas", {
        movable: true,
        zoom: true,
      });
    }
  },
  computed: {
    computedPrice() {
      return (val) => {
        return `￥${val / 100}`;
      };
    },
    computedList() {
      return this.$store.state.cinemasList.filter((item) =>
        item.name.toUpperCase().includes(this.value.toUpperCase())
      );
    },
  },
  methods: {
    onInput(val) {
      //   console.log($store.state.cinemasList)
      //   this.cinemasList = this.$store.state.cinemasList.filter(item=>item.includes())
    },
    onCancel() {
      this.$router.back();
    },
  },
};
</script>
<style lang="scss" scoped>
.cinemas {
  padding-bottom: 0.49rem;
  height: calc(100vh - 0.95rem);
  overflow: hidden;
  .cinemasItem {
    padding: 0.15rem;
    .titBox {
      font-size: 0.15rem;
      color: #191a1b;
      display: flex;
      justify-content: space-between;
      .price {
        color: #ff5f16;
        span {
          font-size: 0.1rem;
          margin-left: 0.03rem;
        }
      }
    }
    .descBox {
      font-size: 0.13rem;
      color: #797d82;
      display: flex;
      justify-content: space-between;
      margin-top: 0.05rem;
      .desc {
        width: 2.12rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
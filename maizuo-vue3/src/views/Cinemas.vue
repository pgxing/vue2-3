<template>
  <div>
    <van-nav-bar
      title="影院"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        {{ $store.state.cityName
        }}<van-icon name="arrow-down" color="#191a1b" size="12" />
      </template>
      <template #right>
        <van-icon name="search" color="#191a1b" size="22" />
      </template>
    </van-nav-bar>
    <!-- 视图窗口 -->
    <div class="cinemas">
      <!-- 滑动元素，必须 -->
      <div>
        <div
          v-for="item in $store.state.cinemasList"
          :key="item.name"
          class="cinemasItem"
        >
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
//vue3-函数组件
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import BetterScroll from "better-scroll";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    onMounted(() => {
      if (!store.state.cinemasList.length) {
        store.dispatch("getCinemas").then(() => {
          new BetterScroll(".cinemas", {
            movable: true,
            zoom: true,
          });
        });
      } else {
        new BetterScroll(".cinemas", {
          movable: true,
          zoom: true,
        });
      }
    });
    const computedPrice = computed(() => {
      return (val) => {
        return `￥${val / 100}`;
      };
    });
    const onClickLeft = () => {
      router.push("/city");
      store.commit("clearCniemasList");
    };
    const onClickRight = () => {
      router.push("/search");
    };
    return {
      computedPrice,
      cityName: computed(() => store.state.cityName),
      cinemasList: computed(() => store.state.cinemasList),
      onClickLeft,
      onClickRight,
    };
  },
};
//类组件
// import BetterScroll from "better-scroll";
// export default {
//   data() {
//     return {
//       cinemasList: [],
//     };
//   },
//   mounted() {
//     if (!this.$store.state.cinemasList.length) {
//       this.$store.dispatch("getCinemas").then(() => {
//         new BetterScroll(".cinemas", {
//           movable: true,
//           zoom: true,
//         });
//       });
//     } else {
//       new BetterScroll(".cinemas", {
//         movable: true,
//         zoom: true,
//       });
//     }
//   },
//   computed: {
//     computedPrice() {
//       return (val) => {
//         return `￥${val / 100}`;
//       };
//     },
//   },
//   methods: {
//     onClickLeft() {
//       this.$router.push("/city");
//       this.$store.commit('clearCniemasList')
//     },
//     onClickRight() {
//       this.$router.push("/search");
//     },
//   },
// };
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
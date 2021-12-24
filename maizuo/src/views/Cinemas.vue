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
        上海<van-icon name="arrow-down" color="#191a1b" size="12" />
      </template>
      <template #right>
        <van-icon name="search" color="#191a1b" size="22" />
      </template>
    </van-nav-bar>
    <!-- 视图窗口 -->
    <div class="cinemas">
      <!-- 滑动元素，必须 -->
      <div>
        <div v-for="item in cinemasList" :key="item.name" class="cinemasItem">
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
import http from "@/utils/http";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      cinemasList: [],
    };
  },
  mounted() {
    http({
      url: "/gateway?cityId=310100&ticketFlag=1&k=6173915",
      headers: {
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      this.cinemasList = res.data.data.cinemas;
      this.$nextTick(() => {
        new BetterScroll(".cinemas", {
          movable: true,
          zoom: true,
        });
      });
    });
  },
  computed: {
    computedPrice() {
      return (val) => {
        return `￥${val / 100}`;
      };
    },
  },
  methods: {
    onClickLeft() {
      this.$router.push("/city");
    },
    onClickRight() {},
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
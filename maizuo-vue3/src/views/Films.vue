<template>
  <div class="film">
    <div class="city" @click="toCity">
      <span>{{ this.cityName }}</span>
      <van-icon name="arrow-down" size="10" />
    </div>
    <film-swiper :key="datalist.length">
      <film-swiper-item v-for="item in datalist" :key="item.bannerId">
        <img class="banner" :src="item.imgUrl" alt="" srcset="" />
      </film-swiper-item>
    </film-swiper>
    <film-header></film-header>
    <top title="电影" v-scroll="210">
      <film-header></film-header>
    </top>
    <router-view></router-view>
  </div>
</template>
<script>
import filmSwiper from "@/components/film/filmSwiper";
import filmSwiperItem from "@/components/film/filmSwiperItem";
import filmHeader from "@/components/film/filmHeader";
import top from "@/components/top";
import http from "./../utils/http";
import { mapState } from "vuex";
export default {
  data() {
    return {
      datalist: [],
      screenHeight: 0,
    };
  },
  mounted() {
      console.log('挂载完毕')
    http({
      url: "/gateway?type=2&cityId=310100&k=9863121",
      headers: {
        "X-Host": "mall.cfg.common-banner",
      },
    }).then((res) => {
        console.log(res)
      this.datalist = res.data.data;
    });
    // window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.screenHeight =
        document.documentElement.scrollTop || document.body.scrollTop;
    },
    toCity() {
      this.$router.push("/city");
    },
  },
  components: {
    filmSwiper,
    filmSwiperItem,
    filmHeader,
    top,
  },
  computed: {
    filmtopshow() {
      return this.screenHeight > 210;
    },
    ...mapState(["cityName"]),
  },
};
</script>
<style lang="scss" scoped>
.film {
  padding-bottom: 0.49rem;
  .city {
    position: absolute;
    left: 0.07rem;
    top: 0.18rem;
    z-index: 999;
    color: #fff;
    background-color: rgba($color: #000000, $alpha: 0.3);
    height: 0.3rem;
    border-radius: 0.15rem;
    font-size: 0.13rem;
    line-height: 0.3rem;
    width: 0.5rem;
    text-align: center;
    span {
      margin-right: 0.02rem;
    }
  }
  .banner {
    width: 100%;
    height: 100%;
  }
}
</style>


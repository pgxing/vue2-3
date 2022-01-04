<template>
  <div class="detail" v-if="film.name">
    <div class="back" @click="goBack">
      <van-icon name="arrow-left" color="#797d82" size="22" />
    </div>
    <detail-header :title="film.name" v-scroll="100"></detail-header>
    <div
      class="banner"
      :style="{
        backgroundImage: `url(${film.poster})`,
      }"
    ></div>
    <div class="box">
      <div class="title">
        <div class="titleBox">
          <div class="name">{{ film.name }}</div>
          <div class="filmType">{{ film.filmType.name }}</div>
        </div>
        <i class="grade"
          ><span>{{ film.grade }}</span
          >分</i
        >
      </div>
      <div class="category">{{ category }}</div>
      <div class="prem">{{ computedDate(film.premiereAt) }}上映</div>
      <div class="nation">{{ film.nation }} | {{ film.runtime }}分钟</div>
      <div :class="open ? 'synopsis' : 'synopsis synopsis-close'">
        {{ film.synopsis }}
      </div>
      <div class="btn" @click="open = !open">
        <span>{{ open ? "收起" : "展开" }}</span>
      </div>
    </div>
    <div class="actors">
      <div class="tit">演职人员</div>
      <detail-swiper :prem="4" name="actors" style="padding-left: 0.15rem">
        <detail-swiper-item v-for="item in film.actors" :key="item.name">
          <div class="swiperItem">
            <div class="imgBox">
              <img :src="item.avatarAddress" alt="" srcset="" />
            </div>
            <span class="name">{{ item.name }}</span>
            <span class="role">{{ item.role }}</span>
          </div>
        </detail-swiper-item>
      </detail-swiper>
    </div>
    <div class="photos">
      <div class="tit">剧照</div>
      <detail-swiper
        v-if="film.photos"
        :prem="2"
        name="photos"
        style="padding-left: 0.15rem"
      >
        <detail-swiper-item v-for="item in film.photos" :key="item">
          <div class="imgBox">
            <img :src="item" alt="" srcset="" />
          </div>
        </detail-swiper-item>
      </detail-swiper>
      <div v-else class="noPhotos">暂无电影剧照</div>
    </div>
  </div>
</template>
<script>
import http from "@/utils/http";
import obj from "@/utils/mixinsTab";
import detailSwiper from "@/components/detail/detailSwiper.vue";
import detailSwiperItem from "@/components/detail/detailSwiperItem.vue";
import DetailHeader from "@/components/detail/detailHeader.vue";
import { mapMutations } from "vuex";
import moment from "moment";
export default {
  mixins: [obj],
  data() {
    return {
      id: null,
      film: {},
      open: false,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    http({
      url: `/gateway?filmId=${this.id}&k=4286359`,
      headers: {
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      this.film = res.data.data.film;
    });
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    ...mapMutations(["showTabBar", "hideTabBar"]),
  },
  computed: {
    category() {
      return this.film.category.replaceAll("|", " | ");
    },
    computedDate() {
      return (date) => {
        return moment(date * 1000).format("YYYY-MM-DD");
      };
    },
  },
  components: {
    detailSwiper,
    detailSwiperItem,
    DetailHeader,
  },
};
</script>
<style lang="scss" scoped>
.detail {
  background-color: #f4f4f4;
  .back {
    position: fixed;
    top: 0.1rem;
    left: 0.1rem;
    color: #fff;
    height: 0.3rem;
    width: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .banner {
    height: 2.1rem;
    width: 100%;
    background-position: center center;
  }
  .box {
    background-color: #fff;
    color: #797d82;
    padding: 0.15rem;
    font-size: 0.13rem;
    margin-bottom: 0.1rem;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .titleBox {
        display: flex;
        align-items: center;
        .name {
          font-size: 0.18rem;
          margin-right: 0.07rem;
          height: 0.24rem;
          line-height: 0.24rem;
          color: #191a1b;
        }
        .filmType {
          font-size: 0.09rem;
          color: #fff;
          background-color: #d2d6dc;
          height: 0.14rem;
          line-height: 0.14rem;
          padding: 0 0.02rem;
          border-radius: 0.02rem;
          display: inline-block;
        }
      }
      .grade {
        font-size: 0.1rem;
        span {
          font-size: 0.18rem;
        }
        color: #ffb232;
      }
    }
    .category {
      margin-top: 0.04rem;
      white-space: pre-wrap;
    }
    .prem {
      margin-top: 0.04rem;
    }
    .nation {
      margin-top: 0.04rem;
    }
    .synopsis {
      margin-top: 0.12rem;
    }
    .synopsis-close {
      line-height: 0.13rem;
      height: 0.27rem;
      overflow: hidden;
    }
    .btn {
      height: 0.15rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      display: flex;
      justify-content: center;
    }
  }
  .actors {
    background-color: #fff;
    margin-bottom: 0.1rem;
    .tit {
      font-size: 0.16rem;
      color: #191a1b;
      padding: 0.15rem;
    }
    .swiperItem {
      width: 0.85rem;
      height: 1.31rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .imgBox {
        background-color: pink;
        width: 0.85rem;
        height: 0.85rem;
        position: relative;
        overflow: hidden;
        img {
          width: 0.85rem;
          height: 1.17rem;
          position: absolute;
          transform: translateY(-50%);
          left: 0;
          top: 50%;
        }
      }
      .name {
        font-size: 0.12rem;
        color: #191a1b;
        padding-top: 0.1rem;
      }
      .role {
        color: #797d82;
        font-size: 0.1rem;
      }
    }
  }
  .photos {
    background-color: #fff;
    margin-bottom: 0.1rem;
    .tit {
      font-size: 0.16rem;
      color: #191a1b;
      padding: 0.15rem;
    }
    .imgBox {
      width: 1.5rem;
      height: 1rem;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .noPhotos {
    height: 1.15rem;
    text-align: center;
    font-size: 0.14rem;
    color: #bdc0c5;
    padding-top: 0.3rem;
  }
}
</style>
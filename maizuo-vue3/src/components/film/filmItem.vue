<template>
  <div class="filmItem" @click="gotoDetail(filmdata.filmId)">
    <img :src="filmdata.poster" alt="" srcset="" />
    <div class="detail">
      <div class="title">
        <span>{{ filmdata.name }}</span
        ><span class="type">{{ filmdata.filmType.name }}</span>
      </div>
      <div v-show="filmdata.grade" class="grade">
        观众评分<span>{{ filmdata.grade }}</span>
      </div>
      <div class="actor">主演：{{ setActor }}</div>
      <div v-if="type === '1'">
        {{ filmdata.nation }} | {{ filmdata.runtime }}分钟
      </div>
      <!-- <div v-else>上映日期&nbsp;{{ filmdata.premiereAt | dateformat }}</div> -->
    </div>
    <div class="btn">
      <span>{{ type === "1" ? "购票" : "预购" }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type", "filmdata"],
  methods: {
    gotoDetail(id) {
      this.$router.push("/detail/" + id);
    },
  },
  computed: {
    setActor() {
      return this.filmdata.actors.map((item) => item.name).join(" ");
    },
  },
};
</script>
<style lang="scss">
.filmItem {
  padding: 0.15rem;
  height: 1.24rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  font-size: 0.13rem;
  img {
    width: 0.66rem;
    height: 0.94rem;
  }
  .detail {
    width: calc(100% - 1.16rem);
    height: 0.90rem;
    color: #797d82;
    padding: 0 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .title {
      font-size: 0.16rem;
      color: #000;
      display: flex;
      align-items: center;

      .type {
        font-size: 0.09rem;
        color: #fff;
        background-color: #d2d6dc;
        height: 0.14rem;
        line-height: 0.14rem;
        border-radius: 0.02rem;
        padding: 0 0.02rem;
        margin-left: 0.05rem;
      }
    }
    .grade {
      span {
        margin-left: 0.05rem;
        color: #ff5f16;
      }
    }
    .actor {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .btn {
    width: 0.5rem;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.25rem;
      line-height: 0.25rem;
      color: #ff5f16;
      text-align: center;
      border: 1px solid #ff5f16;
      border-radius: 2px;
    }
  }
}
</style>
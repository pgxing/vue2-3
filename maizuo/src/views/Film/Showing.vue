<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      loading-text="加载中..."
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell v-for="item in filmList" :key="item.filmId">
        <film-item :filmdata="item" type="1"></film-item>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import http from "@/utils/http";
import filmItem from "@/components/film/filmItem";
export default {
  data() {
    return {
      filmList: [],
      loading: false,
      finished: false,
      current: 1,
      total: 0,
    };
  },
  components: {
    filmItem,
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      http({
        url: `/gateway?cityId=310100&pageNum=${this.current}&pageSize=10&type=1&k=1918992`,
        headers: {
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        //修改loading状态，才能进行下一次加载
        this.loading = false;
        this.filmList = [...this.filmList, ...res.data.data.films];
        this.total = res.data.data.total;
        //页码++
        this.current++;
      });
    },
    //触底时触发
    onLoad() {
      //当前数据总长度小于数据总数时，继续加载数据，否则修改finised为true
      if (this.filmList.length < this.total) {
        this.getData();
      } else {
        this.finished = true;
      }
    },
  },
};
</script>